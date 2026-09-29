"use client";

import React, { useState } from "react";

export default function NeuralEngine() {
  const [activeTab, setActiveTab] = useState(0);

  const capabilities = [
    {
      title: "Vision AI 3.0",
      tag: "Real-Time Spatial",
      description: "Processes 60 visual frames per second on-device. Instantly scans handwritten schematics, translates signs in 80+ languages offline, and isolates subjects with cinematic depth.",
      stat: "60 FPS",
      statLabel: "Neural Video Stream",
      promptExample: "Vision Analysis: Extracted 14 architectural dimensions from blueprint with 99.8% precision.",
    },
    {
      title: "Quantum Voice Engine",
      tag: "Sub-50ms Speech",
      description: "Zero-latency on-device speech-to-thought. Understands natural conversational interruptions, whisper tones, and complex multilingual technical jargon.",
      stat: "42ms",
      statLabel: "Response Latency",
      promptExample: "Voice Action: 'Summarize today's client calls and draft follow-up agreements' → Drafted 3 docs.",
    },
    {
      title: "Autonomous Action Swarm",
      tag: "Multi-Agent System",
      description: "Personal AI agents that manage workflows, book flights, organize invoices, and verify security protocols entirely locally without sending data to third-party servers.",
      stat: "100%",
      statLabel: "Private On-Device",
      promptExample: "Autonomous Agent: Resolved schedule conflict with Paris design team and synced calendar invites.",
    },
  ];

  return (
    <section id="neural-ai" className="py-24 relative overflow-hidden bg-[#07080e] border-t border-white/[0.08]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-600/15 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-lg shadow-purple-500/10">
            <span>🧠 54 TOPS Neural Silicon Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Intelligence that <span className="neon-gradient-text">Lives on Device</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg mt-4 leading-relaxed">
            Experience real-time AI agents, computer vision, and multimodal voice processing with 100% data privacy and zero cloud dependence.
          </p>
        </div>

        {/* Interactive Capability Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Tab Selectors */}
          <div className="lg:col-span-5 space-y-4">
            {capabilities.map((cap, idx) => {
              const isActive = activeTab === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`p-6 rounded-3xl border cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "glass-box bg-gradient-to-r from-purple-900/30 via-indigo-900/20 to-black/40 border-purple-500/50 shadow-xl shadow-purple-500/15 scale-102"
                      : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.15]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold uppercase px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {cap.tag}
                    </span>
                    <span className="text-xs font-mono font-bold text-cyan-300">{cap.stat}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight mt-2">{cap.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed">{cap.description}</p>
                </div>
              );
            })}
          </div>

          {/* Right: Live Neural Stream Visualizer */}
          <div className="lg:col-span-7 glass-box rounded-3xl p-8 border border-white/[0.12] bg-[#0c0f1c]/95 shadow-2xl relative overflow-hidden min-h-[420px] flex flex-col justify-between">
            {/* Ambient Pulse Ring */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[90px] rounded-full pointer-events-none" />

            {/* Neural Header */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping"></span>
                <span className="text-sm font-mono font-bold text-white">
                  NEURAL_ENGINE // {capabilities[activeTab].title.toUpperCase()}
                </span>
              </div>
              <span className="text-xs font-mono text-emerald-400 font-bold">54 TOPS ACTIVE</span>
            </div>

            {/* Live Terminal Agent Activity */}
            <div className="my-8 space-y-4 font-mono text-xs">
              <div className="p-4 rounded-2xl bg-black/60 border border-white/[0.08] text-zinc-300 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-zinc-500">
                  <span>AGENT RUNTIME EXECUTION</span>
                  <span className="text-purple-400">HARDWARE ENCLAVE v2.4</span>
                </div>
                <p className="text-cyan-300 font-semibold">&gt; {capabilities[activeTab].promptExample}</p>
                <div className="flex items-center gap-2 pt-2 text-[10px] text-emerald-400">
                  <span>✓ 0.00KB Transmitted to Cloud</span>
                  <span>•</span>
                  <span>100% Encrypted at Rest</span>
                </div>
              </div>

              {/* Real-time processing graph bars */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="text-[10px] text-zinc-400 uppercase">Tensor Pipeline</span>
                  <p className="text-base font-bold text-white mt-1">99.4% Eff.</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="text-[10px] text-zinc-400 uppercase">Thermal Load</span>
                  <p className="text-base font-bold text-emerald-400 mt-1">32°C Peak</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="text-[10px] text-zinc-400 uppercase">Quantization</span>
                  <p className="text-base font-bold text-purple-400 mt-1">INT4 / FP8</p>
                </div>
              </div>
            </div>

            {/* Footer Tag */}
            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Zero Subscription Fees Forever</span>
              <span className="text-cyan-300 font-bold">Included Free on InSync Ultra</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
