import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#040508] border-t border-white/[0.08] pt-16 pb-12 text-xs text-zinc-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Info */}
          <div className="col-span-2 space-y-3">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-400 to-purple-600 p-[1px]">
                <div className="w-full h-full bg-[#0a0c16] rounded-[11px] flex items-center justify-center font-mono font-bold text-cyan-400 text-xs">
                  IS
                </div>
              </div>
              <span className="text-lg font-extrabold text-white tracking-tight">InSync Ultra</span>
            </Link>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              The flagship quantum AI mobile hardware instrument engineered with cyber-titanium and 1-inch sensor optics.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Batch 01 Production Pipeline Active</span>
            </div>
          </div>

          {/* Column 1 */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-200 block mb-1">
              Hardware
            </span>
            <ul className="space-y-1.5 text-xs text-zinc-400">
              <li><a href="#optics" className="hover:text-cyan-400 transition-colors">1-inch LYT-900 Optics</a></li>
              <li><a href="#display" className="hover:text-cyan-400 transition-colors">144Hz AMOLED Display</a></li>
              <li><a href="#display" className="hover:text-cyan-400 transition-colors">Grade-5 Cyber Titanium</a></li>
              <li><a href="#battery" className="hover:text-cyan-400 transition-colors">120W HyperCharge</a></li>
              <li><a href="#configurator" className="hover:text-cyan-400 transition-colors">Interactive 3D Configurator</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-200 block mb-1">
              AI & Software
            </span>
            <ul className="space-y-1.5 text-xs text-zinc-400">
              <li><a href="#neural-ai" className="hover:text-cyan-400 transition-colors">54 TOPS Neural Engine</a></li>
              <li><a href="#neural-ai" className="hover:text-cyan-400 transition-colors">Vision AI 3.0 Real-time</a></li>
              <li><a href="#neural-ai" className="hover:text-cyan-400 transition-colors">Zero-Cloud Privacy Policy</a></li>
              <li><a href="#specs" className="hover:text-cyan-400 transition-colors">InSync OS 4.0 Features</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-200 block mb-1">
              Reservations
            </span>
            <ul className="space-y-1.5 text-xs text-zinc-400">
              <li><a href="#pre-order" className="hover:text-cyan-400 transition-colors">VIP Queue Status</a></li>
              <li><a href="#configurator" className="hover:text-cyan-400 transition-colors">Trade-in Program</a></li>
              <li><a href="#pre-order" className="hover:text-cyan-400 transition-colors">InSync Care+ Warranty</a></li>
              <li><a href="#specs" className="hover:text-cyan-400 transition-colors">Global Carrier Lookup</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p>© {new Date().getFullYear()} InSync Technologies Laboratories, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#specs" className="hover:text-zinc-300 transition-colors">FCC & CE Certification</a>
            <a href="#specs" className="hover:text-zinc-300 transition-colors">Privacy Charter</a>
            <a href="#pre-order" className="hover:text-zinc-300 transition-colors">Terms of Reservation</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
