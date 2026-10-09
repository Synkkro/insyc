"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface UserProfile {
  employee_id: string;
  full_name: string;
  role: "Department Manager" | "Employee";
  department: string;
}

export default function DashboardPage() {
  const router = useRouter();

  // Current user state (defaults to Rexor Chico, Department Manager)
  const [user, setUser] = useState<UserProfile>({
    employee_id: "24-1001-001",
    full_name: "Rexor Chico",
    role: "Department Manager",
    department: "HR Department",
  });

  const [activeTab, setActiveTab] = useState("Dashboard");
  const [searchQuery, setSearchQuery] = useState("");

  // Load session from localStorage if available
  useEffect(() => {
    try {
      const stored = localStorage.getItem("insync_session");
      if (stored) {
        const parsed = JSON.parse(stored);
        setUser({
          employee_id: parsed.employee_id || "24-1001-001",
          full_name: parsed.full_name || "Rexor Chico",
          role: parsed.role || "Department Manager",
          department: parsed.department || "HR Department",
        });
      }
    } catch (e) {
      // Ignore
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("insync_session");
    router.push("/");
  };

  const toggleRole = () => {
    setUser((prev) => ({
      ...prev,
      role: prev.role === "Department Manager" ? "Employee" : "Department Manager",
    }));
  };

  return (
    <div className="min-h-screen w-full bg-[#0d1527] flex p-3 sm:p-5 font-sans select-none overflow-x-hidden">
      {/* =========================================================
          LEFT SIDEBAR (Dark Slate/Navy)
          ========================================================= */}
      <aside className="w-56 sm:w-64 flex flex-col justify-between shrink-0 pr-4 sm:pr-6 py-2">
        {/* Top: Brand Logo */}
        <div>
          <div className="flex flex-col items-start pl-2 mb-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <svg
                  className="w-full h-full drop-shadow-md"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="44" cy="36" r="22" stroke="#d90429" strokeWidth="11" fill="none" />
                  <circle cx="58" cy="58" r="22" stroke="#ef233c" strokeWidth="11" fill="none" />
                  <path
                    d="M36 34 C44 26 56 30 58 40 C60 48 52 54 46 58"
                    stroke="#ffffff"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
              <span className="text-white font-bold text-2xl tracking-tight">InSync</span>
            </div>
          </div>

          <div className="w-full h-[1px] bg-white/10 mb-5" />

          {/* User Profile Badge */}
          <div className="flex items-center gap-3 px-2 mb-5">
            <div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center text-slate-700 shrink-0 shadow-sm">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <div className="overflow-hidden">
              <h2 className="text-white font-bold text-sm tracking-tight truncate leading-tight">
                {user.full_name}
              </h2>
              <p className="text-slate-400 text-xs truncate font-medium">{user.role}</p>
            </div>
          </div>

          {/* Search Pill Input */}
          <div className="relative mb-5 px-1">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="w-full bg-[#dbe1eb] text-slate-800 placeholder-slate-500 rounded-full pl-10 pr-4 py-1.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
          </div>

          {/* Sidebar Navigation Items */}
          <nav className="space-y-2 px-1">
            {/* Dashboard */}
            <button
              onClick={() => setActiveTab("Dashboard")}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-full text-xs font-bold transition border border-slate-400/40 shadow-sm ${
                activeTab === "Dashboard"
                  ? "bg-[#b0bccf] text-slate-900"
                  : "bg-[#dbe1eb] text-slate-800 hover:bg-white"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7" rx="1.5" strokeWidth="2.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" strokeWidth="2.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" strokeWidth="2.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" strokeWidth="2.5" />
              </svg>
              <span>Dashboard</span>
            </button>

            {/* Announcements */}
            <button
              onClick={() => setActiveTab("Announcements")}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-full text-xs font-bold transition border border-slate-400/40 shadow-sm ${
                activeTab === "Announcements"
                  ? "bg-[#b0bccf] text-slate-900"
                  : "bg-[#dbe1eb] text-slate-800 hover:bg-white"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span>Announcements</span>
            </button>

            {user.role === "Department Manager" ? (
              <>
                {/* Manager: Employees */}
                <button
                  onClick={() => setActiveTab("Employees")}
                  className={`w-full flex items-center gap-3 px-4 py-2 rounded-full text-xs font-bold transition border border-slate-400/40 shadow-sm ${
                    activeTab === "Employees"
                      ? "bg-[#b0bccf] text-slate-900"
                      : "bg-[#dbe1eb] text-slate-800 hover:bg-white"
                  }`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                  <span>Employees</span>
                </button>

                {/* Manager: Tasks */}
                <button
                  onClick={() => setActiveTab("Tasks")}
                  className={`w-full flex items-center gap-3 px-4 py-2 rounded-full text-xs font-bold transition border border-slate-400/40 shadow-sm ${
                    activeTab === "Tasks"
                      ? "bg-[#b0bccf] text-slate-900"
                      : "bg-[#dbe1eb] text-slate-800 hover:bg-white"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                  <span>Tasks</span>
                </button>

                {/* Manager: Requests */}
                <button
                  onClick={() => setActiveTab("Requests")}
                  className={`w-full flex items-center gap-3 px-4 py-2 rounded-full text-xs font-bold transition border border-slate-400/40 shadow-sm ${
                    activeTab === "Requests"
                      ? "bg-[#b0bccf] text-slate-900"
                      : "bg-[#dbe1eb] text-slate-800 hover:bg-white"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <span>Requests</span>
                </button>
              </>
            ) : (
              <>
                {/* Employee: Personal Info */}
                <button
                  onClick={() => setActiveTab("PersonalInfo")}
                  className={`w-full flex items-center justify-between px-4 py-2 rounded-full text-xs font-bold transition border border-slate-400/40 shadow-sm ${
                    activeTab === "PersonalInfo"
                      ? "bg-[#b0bccf] text-slate-900"
                      : "bg-[#dbe1eb] text-slate-800 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    <span>Personal Info</span>
                  </div>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Employee: Attendance */}
                <button
                  onClick={() => setActiveTab("Attendance")}
                  className={`w-full flex items-center gap-3 px-4 py-2 rounded-full text-xs font-bold transition border border-slate-400/40 shadow-sm ${
                    activeTab === "Attendance"
                      ? "bg-[#b0bccf] text-slate-900"
                      : "bg-[#dbe1eb] text-slate-800 hover:bg-white"
                  }`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                  <span>Attendance</span>
                </button>

                {/* Employee: Tasks */}
                <button
                  onClick={() => setActiveTab("Tasks")}
                  className={`w-full flex items-center gap-3 px-4 py-2 rounded-full text-xs font-bold transition border border-slate-400/40 shadow-sm ${
                    activeTab === "Tasks"
                      ? "bg-[#b0bccf] text-slate-900"
                      : "bg-[#dbe1eb] text-slate-800 hover:bg-white"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                  <span>Tasks</span>
                </button>

                {/* Employee: Leave */}
                <button
                  onClick={() => setActiveTab("Leave")}
                  className={`w-full flex items-center gap-3 px-4 py-2 rounded-full text-xs font-bold transition border border-slate-400/40 shadow-sm ${
                    activeTab === "Leave"
                      ? "bg-[#b0bccf] text-slate-900"
                      : "bg-[#dbe1eb] text-slate-800 hover:bg-white"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <span>Leave</span>
                </button>
              </>
            )}

            {/* Settings */}
            <button
              onClick={() => setActiveTab("Settings")}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-full text-xs font-bold transition border border-slate-400/40 shadow-sm ${
                activeTab === "Settings"
                  ? "bg-[#b0bccf] text-slate-900"
                  : "bg-[#dbe1eb] text-slate-800 hover:bg-white"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <circle cx="12" cy="12" r="3" strokeWidth="2.5" />
              </svg>
              <span>Settings</span>
            </button>
          </nav>
        </div>

        {/* Bottom: Logout and Role Preview Toggle */}
        <div className="px-1 pt-6 space-y-3">
          {/* Quick Preview Toggle (allows switching between screenshots) */}
          <button
            onClick={toggleRole}
            className="w-full text-[11px] font-semibold text-cyan-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 py-1.5 px-3 rounded-xl border border-cyan-500/30 transition text-center"
          >
            Switch to {user.role === "Department Manager" ? "Employee" : "Manager"} View
          </button>

          {/* Red Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full bg-[#f03e3e] hover:bg-[#e03131] active:bg-[#c92a2a] text-white font-bold text-xs py-2 px-5 rounded-full flex items-center justify-start gap-2 shadow-lg transition cursor-pointer"
          >
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* =========================================================
          MAIN CANVAS (Rounded White Sheet Card)
          ========================================================= */}
      <main className="flex-1 bg-white rounded-[32px] sm:rounded-[36px] p-6 sm:p-10 shadow-2xl flex flex-col justify-between overflow-y-auto">
        {user.role === "Department Manager" ? (
          /* =======================================================
             SCREEN 1: DEPARTMENT MANAGER DASHBOARD
             ======================================================= */
          <div className="space-y-6">
            {/* Header with Title and Date Card */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
                  Good Morning, {user.full_name}!
                </h1>
                <p className="text-slate-600 text-xs sm:text-sm font-normal mt-1">
                  Here&apos;s what&apos;s happening today.
                </p>
                <p className="text-black font-semibold text-xs sm:text-sm mt-0.5">
                  {user.department || "HR Department"}
                </p>
              </div>

              {/* Date Card Badge */}
              <div className="flex items-center gap-3.5 bg-white border border-slate-300 rounded-2xl px-5 py-2.5 shadow-sm self-start">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2" />
                    <path strokeLinecap="round" strokeWidth="2" d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] font-medium text-slate-600">August 5, 2026</div>
                  <div className="text-sm font-bold text-black">Wednesday</div>
                </div>
              </div>
            </div>

            {/* Top 2 Cards (Employees & Attendance) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
              {/* Card 1: Employees */}
              <div className="bg-[#f0f7f2] border border-[#d2ead6] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xs">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 flex items-center justify-center text-black shrink-0">
                    <svg className="w-11 h-11" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black tracking-tight">Employees</h3>
                    <p className="text-slate-800 text-sm font-normal mt-1 leading-snug">
                      View employees within your department.
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <button className="bg-[#cbe9d3] hover:bg-[#bce0c5] active:bg-[#a9d4b3] text-black font-semibold text-xs px-5 py-1.5 rounded-full border border-black shadow-2xs transition inline-flex items-center gap-1.5 cursor-pointer">
                    <span>View Employees</span>
                    <span className="text-sm">→</span>
                  </button>
                </div>
              </div>

              {/* Card 2: Attendance */}
              <div className="bg-[#fdfaf3] border border-[#f5ebd2] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xs">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 flex items-center justify-center text-black shrink-0">
                    <svg className="w-11 h-11" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" strokeWidth="2.5" />
                      <path strokeLinecap="round" strokeWidth="2.5" d="M12 7v5l3 3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black tracking-tight">Attendance</h3>
                    <p className="text-slate-800 text-sm font-normal mt-1 leading-snug">
                      Review attendance records of employees.
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <button className="bg-[#fbe5b5] hover:bg-[#f6db9e] active:bg-[#efce86] text-black font-semibold text-xs px-5 py-1.5 rounded-full border border-black shadow-2xs transition inline-flex items-center gap-1.5 cursor-pointer">
                    <span>Review Attendance</span>
                    <span className="text-sm">→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom: Department Overview */}
            <div className="border border-slate-300 rounded-2xl p-6 sm:p-7 bg-white shadow-xs">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-5 tracking-tight">
                Department Overview
              </h3>

              {/* 4 Stat Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Total Employees */}
                <div className="bg-[#e8ebff] rounded-xl p-4 sm:p-5 flex items-center gap-4 border border-[#d3d8fc]">
                  <div className="w-12 h-12 rounded-full bg-[#ccd3ff] flex items-center justify-center text-black shrink-0">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs font-semibold text-slate-800 leading-tight">
                      Total<br />Employees
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-black mt-1">25</div>
                  </div>
                </div>

                {/* Present Today */}
                <div className="bg-[#e8ebff] rounded-xl p-4 sm:p-5 flex items-center gap-4 border border-[#d3d8fc]">
                  <div className="w-12 h-12 rounded-full bg-[#ccd3ff] flex items-center justify-center text-black shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2.5" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 2v4M16 2v4M3 10h18M8 14l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs font-semibold text-slate-800 leading-tight">
                      Present Today
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-black mt-1">18</div>
                  </div>
                </div>

                {/* On Leave */}
                <div className="bg-[#e8ebff] rounded-xl p-4 sm:p-5 flex items-center gap-4 border border-[#d3d8fc]">
                  <div className="w-12 h-12 rounded-full bg-[#ccd3ff] flex items-center justify-center text-black shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs font-semibold text-slate-800 leading-tight">
                      On Leave
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-black mt-1">3</div>
                  </div>
                </div>

                {/* Absent Today */}
                <div className="bg-[#e8ebff] rounded-xl p-4 sm:p-5 flex items-center gap-4 border border-[#d3d8fc]">
                  <div className="w-12 h-12 rounded-full bg-[#ccd3ff] flex items-center justify-center text-black shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs font-semibold text-slate-800 leading-tight">
                      Absent Today
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-black mt-1">18</div>
                  </div>
                </div>
              </div>

              {/* View Employees bottom link */}
              <div className="pt-5">
                <button className="text-xs sm:text-sm font-semibold text-black hover:text-cyan-700 underline underline-offset-4 flex items-center gap-1.5 cursor-pointer">
                  <span>View Employees</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* =======================================================
             SCREEN 2: EMPLOYEE DASHBOARD
             ======================================================= */
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
                Good Morning, {user.full_name}!
              </h1>
              <p className="text-slate-600 text-xs sm:text-sm font-normal mt-1">
                Here&apos;s what&apos;s happening today.
              </p>
            </div>

            {/* Top Row: Attendance Card & My Tasks Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Attendance Card (7 cols) */}
              <div className="lg:col-span-7 border border-slate-300 rounded-2xl p-6 sm:p-7 bg-[#fcfdfd] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2.5" />
                      <path strokeLinecap="round" strokeWidth="2.5" d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                    <h3 className="text-lg font-bold text-black tracking-tight">Attendance</h3>
                  </div>

                  <div className="grid grid-cols-3 gap-3 items-center py-2">
                    {/* Today's Status */}
                    <div>
                      <div className="text-xs font-medium text-slate-700 mb-1">Today&apos;s Status</div>
                      <div className="flex items-center gap-2">
                        <svg className="w-6 h-6 text-[#109038] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <span className="text-lg font-bold text-[#109038]">Present</span>
                      </div>
                      <div className="text-[11px] text-slate-600 mt-1">Clocked in at 07:53 A.M.</div>
                    </div>

                    {/* Clock In */}
                    <div className="border-l border-slate-200 pl-4">
                      <div className="text-xs font-medium text-slate-700 mb-1">Clock In</div>
                      <div className="text-lg font-bold text-[#109038]">07:53 A.M.</div>
                      <div className="text-[11px] text-slate-600 mt-1">July 31, 2026</div>
                    </div>

                    {/* Clock Out */}
                    <div className="border-l border-slate-200 pl-4">
                      <div className="text-xs font-medium text-slate-700 mb-1">Clock Out</div>
                      <div className="text-lg font-bold text-slate-400">--:-- --</div>
                      <div className="text-[11px] text-slate-600 mt-1">Not clocked out</div>
                    </div>
                  </div>
                </div>

                <div className="pt-5">
                  <button className="text-xs font-bold text-black underline underline-offset-4 hover:text-cyan-700 cursor-pointer">
                    View Attendance
                  </button>
                </div>
              </div>

              {/* My Tasks Card (5 cols) */}
              <div className="lg:col-span-5 border border-slate-300 rounded-2xl p-6 sm:p-7 bg-[#fdfdf9] shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-black tracking-tight mb-3">My Tasks</h3>

                  <div className="divide-y divide-slate-300 border-t border-b border-slate-300">
                    {/* Row 1: To Do */}
                    <div className="flex items-center justify-between py-2.5 px-3">
                      <div className="flex items-center gap-4">
                        <div className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center" />
                        <span className="text-2xl font-bold text-black">2</span>
                      </div>
                      <span className="text-sm font-medium text-black">To Do</span>
                    </div>

                    {/* Row 2: In Progress */}
                    <div className="flex items-center justify-between py-2.5 px-3">
                      <div className="flex items-center gap-4">
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                        <span className="text-2xl font-bold text-black">3</span>
                      </div>
                      <span className="text-sm font-medium text-black">In Progress</span>
                    </div>

                    {/* Row 3: Completed */}
                    <div className="flex items-center justify-between py-2.5 px-3">
                      <div className="flex items-center gap-4">
                        <div className="w-5 h-5 rounded-full bg-[#109038] text-white flex items-center justify-center">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-2xl font-bold text-black">1</span>
                      </div>
                      <span className="text-sm font-medium text-black">Completed</span>
                    </div>
                  </div>
                </div>

                <div className="pt-5">
                  <button className="text-xs font-bold text-black underline underline-offset-4 hover:text-cyan-700 cursor-pointer">
                    View All Tasks
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom: Announcements Card */}
            <div className="border border-slate-300 rounded-2xl p-6 sm:p-7 bg-white shadow-xs">
              <h3 className="text-lg font-bold text-black mb-4 tracking-tight">Announcements</h3>

              <div className="space-y-4">
                {/* Announcement 1: URGENT */}
                <div className="flex items-center justify-between py-1 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-4 rounded-full bg-[#f03e3e] shrink-0" />
                    <span className="font-extrabold text-xs sm:text-sm tracking-wide text-black">
                      URGENT
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-normal text-slate-800 text-center flex-1 px-4">
                    Annual System Maintenance
                  </div>
                  <div className="text-xs sm:text-sm font-normal text-slate-800 shrink-0">
                    July 23, 2026
                  </div>
                </div>

                {/* Announcement 2: IMPORTANT */}
                <div className="flex items-center justify-between py-1 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-4 rounded-full bg-[#fab005] shrink-0" />
                    <span className="font-extrabold text-xs sm:text-sm tracking-wide text-black">
                      IMPORTANT
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-normal text-slate-800 text-center flex-1 px-4">
                    Updated Leave Application Policy
                  </div>
                  <div className="text-xs sm:text-sm font-normal text-slate-800 shrink-0">
                    July 27, 2026
                  </div>
                </div>

                {/* Announcement 3: GENERAL */}
                <div className="flex items-center justify-between py-1">
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-4 rounded-full bg-[#40c057] shrink-0" />
                    <span className="font-extrabold text-xs sm:text-sm tracking-wide text-black">
                      GENERAL
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-normal text-slate-800 text-center flex-1 px-4">
                    Company Team Building 2026
                  </div>
                  <div className="text-xs sm:text-sm font-normal text-slate-800 shrink-0">
                    July 26, 2026
                  </div>
                </div>
              </div>

              {/* View All Announcements bottom link */}
              <div className="pt-6">
                <button className="text-xs font-bold text-black underline underline-offset-4 hover:text-cyan-700 cursor-pointer">
                  View All Announcements
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
