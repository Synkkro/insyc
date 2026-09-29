"use client";

import React, { useState } from "react";

export default function ReservationSection() {
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("US / CA");
  const [reserved, setReserved] = useState(false);
  const [queueNumber, setQueueNumber] = useState(1482);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setQueueNumber(Math.floor(1400 + Math.random() * 200));
      setReserved(true);
    }
  };

  return (
    <section id="reserve" className="py-24 relative overflow-hidden bg-[#090a0f] border-t border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0e1017] border border-white/[0.12] shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Backlight */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="text-center max-w-xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono tracking-widest uppercase">
              <span>Batch 01 // Limited Allocation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Reserve your InSync Phone (1).
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Secure your spot in the first production run with a $50 fully-refundable deposit. Batch 01 units include a bespoke serialized titanium badge and complimentary GaN charger.
            </p>

            {/* Form / Success State */}
            <div className="pt-4 max-w-md mx-auto">
              {reserved ? (
                <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/[0.1] text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-white text-black font-mono font-bold flex items-center justify-center mx-auto text-sm">
                    ✓
                  </div>
                  <h4 className="text-base font-bold text-white font-mono">
                    Priority Queue #{queueNumber} Secured
                  </h4>
                  <p className="text-xs text-zinc-400">
                    We sent your reservation confirmation and receipt to <span className="text-white font-mono">{email}</span>.
                  </p>
                  <p className="text-[11px] text-zinc-500 pt-2 border-t border-white/[0.06]">
                    You will receive your custom finish checkout link in October 2026.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-4 py-3 rounded-lg bg-black/40 border border-white/[0.1] focus:border-white focus:outline-none text-sm text-white placeholder:text-zinc-600 font-mono transition-colors"
                    />
                    <select
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      aria-label="Select delivery region"
                      className="px-3 py-3 rounded-lg bg-black/40 border border-white/[0.1] text-xs font-mono text-zinc-300 focus:outline-none"
                    >
                      <option value="US / CA">US / Canada</option>
                      <option value="EU / UK">Europe / UK</option>
                      <option value="APAC">Asia-Pacific</option>
                      <option value="GLOBAL">Rest of World</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg text-sm font-semibold text-black bg-white hover:bg-zinc-200 transition-all shadow-lg active:scale-98 font-mono"
                  >
                    Place $50 Priority Reservation
                  </button>
                </form>
              )}
            </div>

            {/* Guarantees */}
            <div className="pt-6 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] font-mono text-zinc-500 text-center">
              <div>• 100% Refundable Anytime</div>
              <div>• 5 Years OS Updates</div>
              <div>• 30-Day In-Hand Return</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
