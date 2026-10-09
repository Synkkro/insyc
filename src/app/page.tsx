"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "activate">("login");

  // Login form state
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [showLoginSuccessModal, setShowLoginSuccessModal] = useState(false);
  const [loginError, setLoginError] = useState("");

  // Activation form state
  const [activateId, setActivateId] = useState("");
  const [activateEmail, setActivateEmail] = useState("");
  const [isActivating, setIsActivating] = useState(false);
  const [activationError, setActivationError] = useState("");
  const [showActivationModal, setShowActivationModal] = useState(false);
  const [activationSuccessData, setActivationSuccessData] = useState<{
    message: string;
    email: string;
  } | null>(null);

  // Handle Login submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!employeeId.trim()) {
      setLoginError("Please enter your Employee ID");
      return;
    }
    if (!password.trim()) {
      setLoginError("Please enter your password");
      return;
    }

    setLoginError("");
    setIsLoggingIn(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          employeeId: employeeId.trim(),
          password: password.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setLoginError(data.message || "Login failed.");
        setIsLoggingIn(false);
        return;
      }

      // Store authenticated user session
      if (data.user) {
        localStorage.setItem("insync_session", JSON.stringify(data.user));
      }

      setShowLoginSuccessModal(true);
    } catch (err: any) {
      setLoginError("Network error. Please try again.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  // Handle Account Activation submission
  const handleActivate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activateId.trim()) {
      setActivationError("Please enter your Employee ID");
      return;
    }
    if (!activateEmail.trim()) {
      setActivationError("Please enter your registered company email");
      return;
    }

    setActivationError("");
    setIsActivating(true);

    try {
      const response = await fetch("/api/auth/activate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          employeeId: activateId.trim(),
          companyEmail: activateEmail.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setActivationError(data.message || "Failed to activate account.");
        setIsActivating(false);
        return;
      }

      setActivationSuccessData({
        message: data.message,
        email: data.email,
      });
      setShowActivationModal(true);
    } catch (err: any) {
      setActivationError("Network error. Please try again later.");
    } finally {
      setIsActivating(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950 font-sans select-none">
      {/* Background Cityscape */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/login-bg.jpg"
          alt="InSync Cityscape"
          fill
          priority
          className="object-cover object-center brightness-75 contrast-110"
        />
        {/* Soft vignette overlay */}
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px]" />
      </div>

      {/* Top Left Brand Logo */}
      <div className="absolute top-7 left-8 sm:top-9 sm:left-12 z-20 flex flex-col items-center">
        {/* InSync Red Ribbon Icon */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
          <svg
            className="w-full h-full drop-shadow-md"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Top red circular loop */}
            <circle
              cx="44"
              cy="36"
              r="22"
              stroke="#d90429"
              strokeWidth="11"
              fill="none"
            />
            {/* Bottom red circular loop */}
            <circle
              cx="58"
              cy="58"
              r="22"
              stroke="#ef233c"
              strokeWidth="11"
              fill="none"
            />
            {/* Central intertwining highlight */}
            <path
              d="M36 34 C44 26 56 30 58 40 C60 48 52 54 46 58"
              stroke="#ffffff"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
        <span className="text-white font-bold text-2xl sm:text-[28px] tracking-tight -mt-1 drop-shadow-md">
          InSync
        </span>
      </div>

      {/* Center Frosted Glass Card */}
      <div className="relative z-10 w-full max-w-[680px] sm:max-w-[720px] mx-4 sm:mx-6 rounded-[34px] bg-black/45 backdrop-blur-md p-10 sm:p-14 border border-white/10 shadow-2xl">
        {mode === "login" ? (
          /* ==========================================
             LOGIN VIEW
             ========================================== */
          <>
            <h1 className="text-3xl sm:text-[36px] font-bold text-white text-center tracking-tight mb-2">
              Log In To Your Account
            </h1>
            <p className="text-white/80 text-sm sm:text-base text-center mb-9 font-normal">
              Enter your credentials to access your account.
            </p>

            <form onSubmit={handleLogin} className="space-y-4 max-w-[500px] mx-auto">
              {/* Employee ID Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                <label
                  htmlFor="employeeId"
                  className="text-white text-sm sm:text-[15px] font-medium sm:w-36 shrink-0"
                >
                  Employee ID:
                </label>
                <input
                  id="employeeId"
                  type="text"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  placeholder="24-1001-001"
                  className="w-full sm:w-[320px] bg-white text-slate-900 rounded-full px-5 py-2 text-sm font-medium border border-slate-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                />
              </div>

              {/* Password Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                <label
                  htmlFor="password"
                  className="text-white text-sm sm:text-[15px] font-medium sm:w-36 shrink-0"
                >
                  Password:
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••"
                  className="w-full sm:w-[320px] bg-white text-slate-900 rounded-full px-5 py-2 text-sm font-medium border border-slate-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-cyan-400 transition tracking-widest"
                />
              </div>

              {loginError && (
                <div className="bg-rose-500/20 border border-rose-500/40 rounded-xl p-2.5 my-1">
                  <p className="text-rose-200 text-xs sm:text-sm text-center font-medium">
                    {loginError}
                  </p>
                </div>
              )}

              {/* Login Button */}
              <div className="pt-2 flex flex-col items-start sm:pl-40">
                <button
                  type="submit"
                  disabled={isLoggingIn}
                  className="bg-[#9ae3ec] hover:bg-[#85dae2] active:bg-[#71d0d9] disabled:opacity-50 text-black font-semibold text-sm px-8 py-1.5 rounded-full border border-black shadow-sm transition cursor-pointer"
                >
                  {isLoggingIn ? (
                    <span>Logging In...</span>
                  ) : (
                    <span className="underline decoration-black underline-offset-2">
                      Login
                    </span>
                  )}
                </button>
              </div>

              {/* Link to Activation */}
              <div className="pt-3 text-left sm:pl-40 space-y-1">
                <div>
                  <span className="text-white text-xs sm:text-[13px]">
                    New employee?{" "}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setLoginError("");
                      setMode("activate");
                    }}
                    className="text-[#9ae3ec] hover:text-cyan-200 text-xs sm:text-[13px] underline underline-offset-2 font-medium cursor-pointer"
                  >
                    Click here to activate account
                  </button>
                </div>
              </div>
            </form>
          </>
        ) : (
          /* ==========================================
             ACCOUNT ACTIVATION VIEW
             ========================================== */
          <>
            <h1 className="text-3xl sm:text-[36px] font-bold text-white text-center tracking-tight mb-2">
              Activate Your Account
            </h1>
            <p className="text-white/80 text-sm sm:text-base text-center mb-9 font-normal">
              Enter your Employee ID and company email to receive your credentials.
            </p>

            <form onSubmit={handleActivate} className="space-y-4 max-w-[500px] mx-auto">
              {/* Employee ID Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                <label
                  htmlFor="activateId"
                  className="text-white text-sm sm:text-[15px] font-medium sm:w-36 shrink-0"
                >
                  Employee ID:
                </label>
                <input
                  id="activateId"
                  type="text"
                  value={activateId}
                  onChange={(e) => setActivateId(e.target.value)}
                  placeholder="24-1861-125"
                  className="w-full sm:w-[320px] bg-white text-slate-900 rounded-full px-5 py-2 text-sm font-medium border border-slate-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                />
              </div>

              {/* Company Email Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                <label
                  htmlFor="activateEmail"
                  className="text-white text-sm sm:text-[15px] font-medium sm:w-36 shrink-0"
                >
                  Company Email:
                </label>
                <input
                  id="activateEmail"
                  type="email"
                  value={activateEmail}
                  onChange={(e) => setActivateEmail(e.target.value)}
                  placeholder="employee@insync.com"
                  className="w-full sm:w-[320px] bg-white text-slate-900 rounded-full px-5 py-2 text-sm font-medium border border-slate-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                />
              </div>

              {activationError && (
                <div className="bg-rose-500/20 border border-rose-500/40 rounded-xl p-2.5 my-1">
                  <p className="text-rose-200 text-xs sm:text-sm text-center font-medium">
                    {activationError}
                  </p>
                </div>
              )}

              {/* Activate Button */}
              <div className="pt-2 flex flex-col items-start sm:pl-40">
                <button
                  type="submit"
                  disabled={isActivating}
                  className="bg-[#9ae3ec] hover:bg-[#85dae2] active:bg-[#71d0d9] disabled:opacity-50 text-black font-semibold text-sm px-8 py-1.5 rounded-full border border-black shadow-sm transition cursor-pointer flex items-center gap-2"
                >
                  {isActivating ? (
                    <span>Verifying...</span>
                  ) : (
                    <span className="underline decoration-black underline-offset-2">
                      Activate Account
                    </span>
                  )}
                </button>
              </div>

              {/* Return to Login */}
              <div className="pt-3 text-left sm:pl-40">
                <span className="text-white text-xs sm:text-[13px]">
                  Already have an account?{" "}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setActivationError("");
                    setMode("login");
                  }}
                  className="text-[#9ae3ec] hover:text-cyan-200 text-xs sm:text-[13px] underline underline-offset-2 font-medium cursor-pointer"
                >
                  Back to Login
                </button>
              </div>
            </form>
          </>
        )}
      </div>

      {/* Login Success Modal */}
      {showLoginSuccessModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px] p-4 transition-all duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[360px] sm:max-w-[400px] bg-white rounded-[26px] border-2 border-black p-8 sm:p-10 shadow-2xl text-center transform transition-all animate-in fade-in zoom-in-95"
          >
            <div className="flex justify-center mb-4">
              <svg
                className="w-12 h-12 text-[#109038]"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 24 L20 34 L38 14"
                  stroke="#109038"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="text-xl sm:text-[22px] font-bold text-black mb-3">
              Login Success!
            </h2>
            <p className="text-black font-medium text-sm sm:text-[15px] leading-snug mb-5">
              Welcome back! Click below to enter your dashboard.
            </p>
            <button
              onClick={() => {
                setShowLoginSuccessModal(false);
                router.push("/dashboard");
              }}
              className="bg-[#9ae3ec] hover:bg-[#85dae2] active:bg-[#71d0d9] text-black font-semibold text-xs px-8 py-2 rounded-full border border-black cursor-pointer shadow-sm"
            >
              Proceed to Dashboard
            </button>
          </div>
        </div>
      )}

      {/* Activation Success Modal */}
      {showActivationModal && activationSuccessData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 transition-all duration-200"
        >
          <div
            className="w-full max-w-[420px] bg-white rounded-[28px] border-2 border-black p-8 sm:p-10 shadow-2xl text-center transform transition-all animate-in fade-in zoom-in-95"
          >
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-[#109038]"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 24 L20 34 L38 14"
                    stroke="#109038"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-black mb-2">
              Activation Successful!
            </h2>

            <p className="text-slate-700 font-normal text-sm leading-relaxed mb-3">
              Your default username and temporary password have been emailed to{" "}
              <strong className="text-black font-semibold">{activationSuccessData.email}</strong>.
            </p>

            <p className="text-slate-600 text-xs leading-relaxed mb-6">
              Please check your inbox (including your spam/junk folder) for your temporary login credentials.
            </p>

            <button
              onClick={() => {
                setShowActivationModal(false);
                setMode("login");
                setEmployeeId(activateId);
                setPassword("");
              }}
              className="w-full bg-[#9ae3ec] hover:bg-[#85dae2] active:bg-[#71d0d9] text-black font-semibold text-sm py-2.5 rounded-full border border-black shadow-sm transition cursor-pointer"
            >
              Proceed to Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
