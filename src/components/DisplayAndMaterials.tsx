import React from "react";

export default function DisplayAndMaterials() {
  const specs = [
    {
      title: "6.78\" Quantum AMOLED",
      subtitle: "1-144Hz Super LTPO 4.0",
      description: "Dynamically drops to 1Hz for static reading to save power, and ramps up to 144Hz for instantaneous touch responsiveness.",
      stat: "4,500 nits",
      label: "Peak Outdoor Brightness",
      gradient: "from-cyan-500/20 to-blue-600/20",
      border: "border-cyan-500/30",
      badgeColor: "text-cyan-300",
    },
    {
      title: "Grade 5 Cyber-Titanium",
      subtitle: "Cold-Forged Structural Core",
      description: "Aerospace Ti-6Al-4V alloy milled to 0.01mm tolerances. Offers twice the strength of aluminum with featherweight 182g balance.",
      stat: "830 MPa",
      label: "Tensile Yield Strength",
      gradient: "from-purple-500/20 to-indigo-600/20",
      border: "border-purple-500/30",
      badgeColor: "text-purple-300",
    },
    {
      title: "Diamond-Fused Armor Glass",
      subtitle: "Nano-Ceramic Shield",
      description: "Embedded nano-crystal matrix delivers 4x greater drop protection and 8.5 Mohs scratch resistance against keys, coins, and sand.",
      stat: "4x",
      label: "Drop Impact Defense",
      gradient: "from-pink-500/20 to-rose-600/20",
      border: "border-pink-500/30",
      badgeColor: "text-pink-300",
    },
    {
      title: "IP68 Submersion Proof",
      subtitle: "Extreme Elements Defense",
      description: "Double-sealed acoustic mic chambers and nano-coated internal ribbon connectors withstand 6 meters of freshwater depth for 45 minutes.",
      stat: "6 Meters",
      label: "Water Resistance Depth",
      gradient: "from-emerald-500/20 to-teal-600/20",
      border: "border-emerald-500/30",
      badgeColor: "text-emerald-300",
    },
  ];

  return (
    <section id="display" className="py-24 relative overflow-hidden bg-[#06070c] border-t border-white/[0.08]">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-lg shadow-cyan-500/10">
            <span>🛡️ Display & Structural Metallurgy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Indestructible Craft. <span className="neon-gradient-text">Flawless Glass.</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg mt-4 leading-relaxed">
            Engineered with the most resilient aerospace alloys and the brightest LTPO display ever integrated into a flagship device.
          </p>
        </div>

        {/* 2x2 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specs.map((item, idx) => (
            <div
              key={idx}
              className={`glass-box glass-box-hover rounded-3xl p-8 flex flex-col justify-between border ${item.border} bg-gradient-to-br ${item.gradient} relative overflow-hidden group`}
            >
              <div>
                <div className="flex items-baseline justify-between border-b border-white/[0.08] pb-4 mb-6">
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider ${item.badgeColor}`}>
                    {item.subtitle}
                  </span>
                  <div className="text-right">
                    <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white group-hover:scale-105 transition-transform inline-block">
                      {item.stat}
                    </span>
                    <span className="block text-[10px] font-mono text-zinc-400">{item.label}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">{item.title}</h3>
                <p className="text-zinc-300 text-sm sm:text-base mt-3 leading-relaxed">{item.description}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>Inspected to ±0.005mm</span>
                <span className="text-emerald-400 font-bold">✓ Military Standard Passed</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
