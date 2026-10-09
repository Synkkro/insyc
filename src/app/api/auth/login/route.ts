import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { employeeId, password } = body;

    const trimmedId = (employeeId || "").trim();
    const trimmedPassword = (password || "").trim();

    if (!trimmedId || !trimmedPassword) {
      return NextResponse.json(
        { success: false, message: "Employee ID and password are required." },
        { status: 400 }
      );
    }

    // Query Supabase for employee
    const { data: employee, error: fetchError } = await supabaseAdmin
      .from("employees")
      .select("*")
      .eq("employee_id", trimmedId)
      .maybeSingle();

    if (fetchError) {
      console.error("Database error during login:", fetchError);
      return NextResponse.json(
        { success: false, message: "Database error during authentication." },
        { status: 500 }
      );
    }

    if (!employee) {
      return NextResponse.json(
        { success: false, message: "Invalid Employee ID or password." },
        { status: 401 }
      );
    }

    // Check activation status
    if (!employee.is_activated) {
      return NextResponse.json(
        {
          success: false,
          message:
            "This account has not been activated yet. Please click 'Click here to activate account' below.",
          needsActivation: true,
        },
        { status: 403 }
      );
    }

    // Check password: either default_password or password123 fallback
    const validPassword =
      employee.default_password === trimmedPassword ||
      trimmedPassword === "password123";

    if (!validPassword) {
      return NextResponse.json(
        { success: false, message: "Invalid Employee ID or password." },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Login successful!",
      user: {
        employee_id: employee.employee_id,
        full_name: employee.full_name,
        role: employee.role,
        department: employee.department || "HR Department",
        company_email: employee.company_email,
        must_change_password: employee.must_change_password,
      },
    });
  } catch (error: any) {
    console.error("Login server error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Internal server error." },
      { status: 500 }
    );
  }
}
