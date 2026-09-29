"use client";

import React, { useState } from "react";

export default function TechSpecsMatrix() {
  const [activeTab, setActiveTab] = useState("performance");

  const categories = [
    { id: "performance", label: "Compute & Neural" },
    { id: "cameras", label: "1-Inch Optics" },
    { id: "display", label: "Quantum Display" },
    { id: "battery", label: "Power & Charging" },
    { id: "network", label: "Satellite & 5G" },
  ];

  const specsData: Record<string, { label: string; value: string; highlight?: boolean }[]> = {
    performance: [
      { label: "SoC Architecture", value: "3nm Octa-Core Ultra Flagship Silicon (Up to 4.3 GHz)", highlight: true },
      { label: "Neural Processing Unit", value: "54 TOPS On-Device Tensor Engine with FP8/INT4 support", highlight: true },
      { label: "Unified Memory", value: "12 GB / 16 GB Quad-Channel LPDDR5X (8,533 Mbps)" },
      { label: "Internal Storage", value: "256 GB / 512 GB / 1 TB High-Speed UFS 4.0 Storage" },
      { label: "Cooling Solution", value: "4,200 mm² Graphene Micro-Vapor Chamber" },
      { label: "OS Platform", value: "InSync Distilled OS 4.0 with 5 Years Guaranteed Upgrades" },
    ],
    cameras: [
      { label: "Primary 1-inch Wide", value: "50 MP Sony LYT-900, 1.0\" sensor, f/1.6 variable iris, 24mm, OIS", highlight: true },
      { label: "Telephoto Periscope", value: "50 MP Sony IMX890, 1/1.56\", f/2.4, 70mm, 3x Optical / 120x AI Zoom" },
      { label: "Ultra-Wide / Macro", value: "50 MP Freeform 14mm, 122° FOV, 2cm Super Macro autofocus" },
      { label: "Front Camera", value: "32 MP Quad-Bayer with Phase-Detection Autofocus" },
      { label: "Video Capture", value: "8K 60fps / 4K 120fps Dolby Vision HDR & 16-Bit ProRAW DNG", highlight: true },
      { label: "Physical Controls", value: "2-Stage Mechanical Tactile Shutter Key" },
    ],
    display: [
      { label: "Panel Technology", value: "6.78\" Quad-HD+ Super-LTPO 4.0 Quantum AMOLED", highlight: true },
      { label: "Refresh Rate", value: "1 Hz – 144 Hz Dynamic Variable Adaptive Refresh" },
      { label: "Peak HDR Brightness", value: "4,500 nits Outdoor Peak / 1 nit Ultra-Night Mode", highlight: true },
      { label: "Resolution & Density", value: "3120 × 1440 pixels (516 ppi)" },
      { label: "Color Depth", value: "10-Bit (1.07 Billion Colors), 100% DCI-P3 Gamut" },
      { label: "Glass Protection", value: "Custom Diamond-Fused Nano-Ceramic Shield (8.5 Mohs)" },
    ],
    battery: [
      { label: "Battery Chemistry", value: "5,500 mAh High-Density Silicon-Carbon Anode Cell", highlight: true },
      { label: "Wired Fast Charging", value: "120W HyperCharge (0% to 100% in 15 minutes)", highlight: true },
      { label: "Wireless Charging", value: "50W Qi2 Magnetic Fast Wireless" },
      { label: "Reverse Charge", value: "15W Reverse Wireless Power Sharing" },
      { label: "Battery Lifespan", value: "85% retention after 1,600 full charge cycles" },
      { label: "Included in Box", value: "120W Compact GaN Charger & Braided 100W Cable" },
    ],
    network: [
      { label: "Satellite Uplink", value: "Two-Way Direct-to-LEO Satellite SOS & Text Messaging", highlight: true },
      { label: "5G Connectivity", value: "Global 5G Sub-6 & mmWave Dual-SIM (eSIM + Nano-SIM)" },
      { label: "Wi-Fi & Bluetooth", value: "Wi-Fi 7 (802.11be Tri-Band) + Bluetooth 5.4 LE Audio" },
      { label: "Biometrics", value: "3D Ultrasonic Under-Display Fingerprint + Secure Face Enclave" },
      { label: "Water & Dust Rating", value: "IP68 Submersion Proof (6 meters depth for 45 minutes)" },
      { label: "Audio & Microphones", value: "Quad Studio Mics + Spatial Dual Stereo Speakers" },
    ],
  };

  return (
    <section id="specs" className="py-24 relative overflow-hidden bg-[#06070c] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-lg shadow-indigo-500/10">
            <span>📋 Full Hardware Manifest</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="neon-gradient-text">Specifications</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg mt-4 leading-relaxed">
            Detailed engineering specifications across compute, optics, display, and power.
          </p>

          {/* Category Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md max-w-2xl mx-auto">
            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/30"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Specs Grid */}
        <div className="max-w-4xl mx-auto glass-box rounded-3xl p-8 border border-white/[0.12] bg-[#0c0e1a]/95 shadow-2xl space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {specsData[activeTab].map((item, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl border transition-all ${
                  item.highlight
                    ? "bg-cyan-500/10 border-cyan-500/30 text-white"
                    : "bg-white/[0.02] border-white/[0.06] text-zinc-300"
                }`}
              >
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                  {item.label}
                </span>
                <p className="text-sm font-semibold leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
