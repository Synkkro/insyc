"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#06070c]/85 backdrop-blur-2xl border-b border-white/[0.1] shadow-2xl shadow-cyan-500/5 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-600 p-[1.5px] shadow-lg shadow-indigo-500/30 group-hover:shadow-cyan-400/40 transition-all duration-300">
              <div className="w-full h-full bg-[#0b0d17] rounded-[14px] flex items-center justify-center">
                <span className="font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-sm tracking-wider">
                  IS
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  InSync
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30">
                  ULTRA
                </span>
              </div>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] rounded-full px-5 py-1.5 backdrop-blur-xl shadow-inner">
            <a
              href="#optics"
              className="px-4 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white rounded-full hover:bg-white/[0.08] transition-all"
            >
              1&quot; Optics
            </a>
            <a
              href="#neural-ai"
              className="px-4 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white rounded-full hover:bg-white/[0.08] transition-all flex items-center gap-1.5"
            >
              <span>Quantum AI</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            </a>
            <a
              href="#display"
              className="px-4 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white rounded-full hover:bg-white/[0.08] transition-all"
            >
              144Hz AMOLED
            </a>
            <a
              href="#battery"
              className="px-4 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white rounded-full hover:bg-white/[0.08] transition-all"
            >
              120W Power
            </a>
            <a
              href="#configurator"
              className="px-4 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white rounded-full hover:bg-white/[0.08] transition-all"
            >
              Customizer
            </a>
            <a
              href="#specs"
              className="px-4 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white rounded-full hover:bg-white/[0.08] transition-all"
            >
              Tech Specs
            </a>
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4"></span>
              <span>VIP Reservations Live</span>
            </div>

            <a
              href="#pre-order"
              className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 hover:opacity-95 shadow-lg shadow-indigo-600/30 transition-all hover:scale-105 active:scale-95"
            >
              <span>Pre-Order Now</span>
              <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="#pre-order"
              className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600"
            >
              Pre-Order
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/[0.06] border border-white/[0.1] text-zinc-200"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#06070c]/98 border-b border-white/[0.1] backdrop-blur-2xl px-6 py-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <a
            href="#optics"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-sm font-semibold text-zinc-200 hover:bg-white/[0.05]"
          >
            1-inch Optics Array
          </a>
          <a
            href="#neural-ai"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-sm font-semibold text-zinc-200 hover:bg-white/[0.05]"
          >
            Quantum AI Engine
          </a>
          <a
            href="#display"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-sm font-semibold text-zinc-200 hover:bg-white/[0.05]"
          >
            144Hz AMOLED Display
          </a>
          <a
            href="#battery"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-sm font-semibold text-zinc-200 hover:bg-white/[0.05]"
          >
            120W HyperCharge
          </a>
          <a
            href="#configurator"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-sm font-semibold text-zinc-200 hover:bg-white/[0.05]"
          >
            Device Configurator
          </a>
          <a
            href="#specs"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-sm font-semibold text-zinc-200 hover:bg-white/[0.05]"
          >
            Technical Specifications
          </a>
        </div>
      )}
    </header>
  );
}
