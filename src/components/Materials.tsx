import React from "react";

export default function Materials() {
  const elements = [
    {
      title: "Grade 5 Titanium Alloy (Ti-6Al-4V)",
      subtitle: "Aerospace Structural Core",
      description:
        "Cold-forged under 800 metric tons of hydraulic pressure and CNC milled for 64 minutes per chassis. Achieves extraordinary tensile strength while shedding 24% of the weight compared to stainless steel.",
      stat: "830 MPa",
      statLabel: "Yield Strength",
    },
    {
      title: "Diamond-Lapped Zirconia Ceramic",
      subtitle: "Tactile Matte Back Plate",
      description:
        "Sintered at 1,500°C and polished with diamond abrasive slurry to create a warm, fingerprint-resistant satin touch that never scratches or degrades.",
      stat: "8.5 Mohs",
      statLabel: "Surface Hardness",
    },
    {
      title: "Two-Stage Knurled Shutter",
      subtitle: "Mechanical Tactile Switch",
      description:
        "Engineered with a dual-stage micro-switch. Half-press engages optical autofocus lock; full-press triggers instantaneous zero-shutter-lag sensor capture.",
      stat: "1.2N",
      statLabel: "Actuation Force",
    },
    {
      title: "Cryogenic Graphene Vapor Chamber",
      subtitle: "Sustained Thermal Envelope",
      description:
        "A 4,200mm² micro-channel vapor chamber layered with hexagonal boron nitride graphene keeps the 3nm processor running at peak clock speeds with zero thermal throttling.",
      stat: "38°C",
      statLabel: "Max Under Heavy Load",
    },
  ];

  return (
    <section id="materials" className="py-24 relative overflow-hidden bg-[#08090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-mono tracking-widest uppercase text-amber-400">
            Materiality & Metallurgy
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-2">
            Form follows physics.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-4 max-w-2xl leading-relaxed">
            Every curve, bevel, and tactile surface on the InSync Phone (1) is determined by structural necessity and ergonomics — not ornamental styling.
          </p>
        </div>

        {/* 2x2 Precision Engineering Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {elements.map((item, idx) => (
            <div
              key={idx}
              className="tactile-card rounded-2xl p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-baseline justify-between border-b border-white/[0.06] pb-4 mb-5">
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                    {item.subtitle}
                  </span>
                  <div className="text-right">
                    <span className="text-xl font-bold font-mono text-white group-hover:text-amber-300 transition-colors">
                      {item.stat}
                    </span>
                    <span className="block text-[10px] font-mono text-zinc-500">{item.statLabel}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">{item.title}</h3>
                <p className="text-zinc-400 text-sm mt-3 leading-relaxed">{item.description}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Tolerance: ±0.005mm</span>
                <span>Inspected 100%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
