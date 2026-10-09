import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

function generateTemporaryPassword(length: number = 8): string {
  const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789!@#$%";
  let result = "Tmp-";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { employeeId, companyEmail } = body;

    const trimmedId = (employeeId || "").trim();
    const trimmedEmail = (companyEmail || "").trim().toLowerCase();

    if (!trimmedId || !trimmedEmail) {
      return NextResponse.json(
        { success: false, message: "Employee ID and Company Email are required." },
        { status: 400 }
      );
    }

    // 1. Check if employee exists in Supabase
    const { data: employee, error: fetchError } = await supabaseAdmin
      .from("employees")
      .select("*")
      .eq("employee_id", trimmedId)
      .maybeSingle();

    if (fetchError) {
      console.error("Database query error:", fetchError);
      return NextResponse.json(
        { success: false, message: "Database error while verifying credentials." },
        { status: 500 }
      );
    }

    if (!employee) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid Employee ID or Company Email. No matching record found.",
        },
        { status: 404 }
      );
    }

    // 2. Validate that the company email matches
    if (employee.company_email.toLowerCase() !== trimmedEmail) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid credentials. The provided email does not match our records.",
        },
        { status: 400 }
      );
    }

    // 3. Check if account is already activated
    if (employee.is_activated) {
      return NextResponse.json(
        {
          success: false,
          message:
            "This account is already activated. Please use the login screen to sign in.",
          alreadyActivated: true,
        },
        { status: 400 }
      );
    }

    // 4. Generate secure random temporary password
    const tempPassword = generateTemporaryPassword(6);

    // 5. Send credentials via EmailJS REST API
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    let emailSent = false;
    let emailErrorMessage = "";

    if (serviceId && templateId && publicKey) {
      try {
        const emailResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            accessToken: privateKey,
            template_params: {
              to_email: employee.company_email,
              employee_name: employee.full_name,
              employee_id: employee.employee_id,
              temp_password: tempPassword,
            },
          }),
        });

        if (emailResponse.ok) {
          emailSent = true;
        } else {
          const errorText = await emailResponse.text();
          console.error("EmailJS sending error:", errorText);
          emailErrorMessage = errorText;
        }
      } catch (err) {
        console.error("Failed to connect to EmailJS:", err);
      }
    }

    // 6. Update database record: mark as activated & set default temporary password
    const { error: updateError } = await supabaseAdmin
      .from("employees")
      .update({
        is_activated: true,
        must_change_password: true,
        default_password: tempPassword,
        updated_at: new Date().toISOString(),
      })
      .eq("employee_id", employee.employee_id);

    if (updateError) {
      console.error("Failed to update activation status:", updateError);
      return NextResponse.json(
        { success: false, message: "Failed to record activation in database." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: emailSent
        ? `Account activated successfully! Temporary credentials have been emailed to ${employee.company_email}.`
        : `Account activated successfully! (Note: Email delivery failed: ${emailErrorMessage || "Check EmailJS credentials"}, default password: ${tempPassword})`,
      employeeId: employee.employee_id,
      email: employee.company_email,
      emailSent,
    });
  } catch (error: any) {
    console.error("Activation server error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Internal server error." },
      { status: 500 }
    );
  }
}
