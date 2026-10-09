"use client";

import React, { useState } from "react";

export default function PreOrderSection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [reserved, setReserved] = useState(false);
  const [queueNo, setQueueNo] = useState(1480);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setQueueNo(Math.floor(1400 + Math.random() * 150));
      setReserved(true);
    }
  };

  return (
    <section id="pre-order" className="py-24 relative overflow-hidden bg-[#06070c] border-t border-white/[0.08]">
      {/* Radiant Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[1100px] h-[500px] ambient-aurora blur-[140px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-box rounded-3xl border border-white/[0.18] p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl bg-[#0c0e1a]/95">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-6 shadow-lg shadow-cyan-500/15">
            <span>🚀 Batch 01 VIP Allocation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Reserve Your <span className="neon-gradient-text">InSync Ultra</span> Today
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Secure your place in the first production run with a $50 fully-refundable deposit. Batch 01 reservations include complimentary VIP perks.
          </p>

          {/* Perks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8 max-w-3xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <span className="text-xs font-mono font-bold text-cyan-400 block mb-1">FREE GIFT ($89 VALUE)</span>
              <p className="text-sm font-bold text-white">120W GaN Travel Charger</p>
              <p className="text-[11px] text-zinc-400 mt-1">Dual USB-C fast charging brick and 100W braided cable.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <span className="text-xs font-mono font-bold text-purple-400 block mb-1">CARE+ INCLUDED ($199)</span>
              <p className="text-sm font-bold text-white">2 Years Accidental Cover</p>
              <p className="text-[11px] text-zinc-400 mt-1">Zero-deductible screen & battery replacement warranty.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <span className="text-xs font-mono font-bold text-emerald-400 block mb-1">GUARANTEED BATCH 01</span>
              <p className="text-sm font-bold text-white">Priority Delivery</p>
              <p className="text-[11px] text-zinc-400 mt-1">First shipments dispatch in November 2026.</p>
            </div>
          </div>

          {/* Form */}
          <div className="max-w-md mx-auto">
            {reserved ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-2 animate-in fade-in zoom-in duration-300">
                <div className="w-10 h-10 rounded-full bg-emerald-400 text-black font-mono font-black flex items-center justify-center mx-auto text-base">
                  ✓
                </div>
                <h4 className="text-lg font-extrabold text-white font-mono">
                  VIP Priority Queue #{queueNo} Reserved!
                </h4>
                <p className="text-xs text-zinc-300">
                  Receipt and configuration invite sent to <strong className="text-white font-mono">{email}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Your full name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.05] border border-white/[0.12] focus:border-cyan-400 focus:outline-none text-sm text-white placeholder:text-zinc-500 transition-all font-sans"
                />
                <input
                  type="email"
                  required
                  placeholder="Your work or personal email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.05] border border-white/[0.12] focus:border-cyan-400 focus:outline-none text-sm text-white placeholder:text-zinc-500 transition-all font-sans"
                />
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 hover:opacity-95 shadow-xl shadow-cyan-500/30 transition-all hover:scale-102 active:scale-98"
                >
                  Place $50 Refundable Pre-Order Reservation
                </button>
              </form>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-mono">
            <span>✓ 100% Refundable Anytime</span>
            <span>•</span>
            <span>✓ 5 Years OS Updates</span>
            <span>•</span>
            <span>✓ 30-Day In-Hand Return Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}
