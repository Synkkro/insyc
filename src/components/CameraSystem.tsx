"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Lens {
  id: string;
  focal: string;
  name: string;
  sensor: string;
  aperture: string;
  elements: string;
  fieldOfView: string;
  notes: string;
}

export default function CameraSystem() {
  const [selectedLens, setSelectedLens] = useState("24mm");

  const lenses: Lens[] = [
    {
      id: "24mm",
      focal: "24mm",
      name: "Primary Wide Instrument",
      sensor: "1.0-inch Type Sony LYT-900 (50 MP)",
      aperture: "f/1.6 Variable Dual Mechanical Iris",
      elements: "8P Aspherical Sapphire Crystal with ALD Anti-Glare Coating",
      fieldOfView: "84° Natural Perspective",
      notes: "Massive 3.2μm 4-in-1 pixel binning captures 210% more photons than standard smartphone sensors. True optical bokeh without artificial edge-detection blurring.",
    },
    {
      id: "70mm",
      focal: "70mm",
      name: "Portrait & Periscope Telephoto",
      sensor: "1/1.56-inch Sony IMX890 (50 MP)",
      aperture: "f/2.4 Constant Aperture",
      elements: "Floating prism periscope with 3D Sensor-Shift OIS",
      fieldOfView: "34° Compression View",
      notes: "Flattering facial geometry and natural organic background compression. Dedicated macro minimum focusing distance of 10cm.",
    },
    {
      id: "14mm",
      focal: "14mm",
      name: "Ultra-Wide Architectural & Macro",
      sensor: "1/1.95-inch Ultra-Dynamic CMOS (50 MP)",
      aperture: "f/2.2 Ultra-Fast",
      elements: "Ultra-low dispersion freeform lens (0.3% edge distortion)",
      fieldOfView: "122° Ultra-Wide Field",
      notes: "Distortion-free geometric lines for architecture, interiors, and extreme 2cm macro photography with phase-detection autofocus.",
    },
  ];

  const currentLens = lenses.find((l) => l.id === selectedLens) || lenses[0];

  return (
    <section id="optics" className="py-24 relative overflow-hidden bg-[#07080d] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] font-mono tracking-widest uppercase text-amber-400">
            Optics & Sensor Engineering
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-2">
            1-inch glass. Zero digital artifacts.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-4 max-w-2xl leading-relaxed">
            Most smartphones rely on heavy neural sharpening to fix poor optical glass. InSync Phone (1) pairs a 1.0-inch physical sensor with coated sapphire elements for organic, filmic clarity.
          </p>
        </div>

        {/* Studio Macro Photo & Lens Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Macro Render Image */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0c0d12] shadow-2xl group">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/phone-camera.jpg"
                alt="InSync Phone precision milled titanium camera housing and sapphire lenses"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-zinc-300 bg-black/60 backdrop-blur-md p-3 rounded-lg border border-white/[0.08]">
                <span>Milled Titanium Ring</span>
                <span className="text-amber-400">f/1.6 — f/2.4 Optical Array</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Focal Length Selector & Spec Sheet */}
          <div className="lg:col-span-6 space-y-6">
            {/* Focal Length Selector Tabs */}
            <div className="flex items-center gap-2 p-1.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
              {lenses.map((lens) => {
                const isActive = lens.id === selectedLens;
                return (
                  <button
                    key={lens.id}
                    onClick={() => setSelectedLens(lens.id)}
                    className={`flex-1 py-3 rounded-lg text-xs font-mono transition-all flex flex-col items-center justify-center ${
                      isActive
                        ? "bg-white text-black font-bold shadow-md"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <span className="text-sm font-sans font-bold">{lens.focal}</span>
                    <span className="text-[10px] opacity-75">{lens.name.split(" ")[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Lens Technical Sheet */}
            <div className="p-6 rounded-2xl bg-[#0e1017] border border-white/[0.08] space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
                  {currentLens.focal} Lens Specification
                </span>
                <h3 className="text-xl font-bold text-white mt-1">{currentLens.name}</h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{currentLens.notes}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/[0.06] text-xs font-mono">
                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase">Sensor Dimension</span>
                  <span className="text-white font-semibold">{currentLens.sensor}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase">Aperture</span>
                  <span className="text-white font-semibold">{currentLens.aperture}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase">Optical Glass Construction</span>
                  <span className="text-white font-semibold">{currentLens.elements}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase">Field of View</span>
                  <span className="text-white font-semibold">{currentLens.fieldOfView}</span>
                </div>
              </div>
            </div>

            {/* RAW Sensor Output Guarantee */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-xs text-zinc-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>16-Bit ProRAW DNG Capture Enabled</span>
              </span>
              <span className="font-mono text-zinc-500">Zero Over-Sharpening</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
