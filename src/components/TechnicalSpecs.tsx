import React from "react";

export default function TechnicalSpecs() {
  const specCategories = [
    {
      category: "Chassis & Metallurgy",
      specs: [
        { label: "Frame Material", value: "Grade 5 Aerospace Titanium (Ti-6Al-4V) cold-forged" },
        { label: "Back Finish", value: "Diamond-lapped satin Zirconia ceramic plate" },
        { label: "Dimensions", value: "159.2 mm × 74.8 mm × 7.2 mm" },
        { label: "Weight", value: "182 grams" },
        { label: "Water & Dust Rating", value: "IP68 (6 meters depth for up to 30 minutes)" },
      ],
    },
    {
      category: "Display & Glass",
      specs: [
        { label: "Screen Type", value: "6.7-inch Quad-HD+ Super-LTPO 4.0 OLED" },
        { label: "Refresh Rate", value: "1 Hz – 120 Hz dynamic variable adaptive refresh" },
        { label: "Peak Brightness", value: "3,200 nits outdoor peak / 1 nit minimum night mode" },
        { label: "Resolution", value: "3120 × 1440 pixels (516 ppi)" },
        { label: "Glass Shield", value: "Custom Sapphire-Fused Ceramic Crystal" },
      ],
    },
    {
      category: "Processor & Architecture",
      specs: [
        { label: "SoC Platform", value: "3nm Octa-Core High-Efficiency Neural Architecture" },
        { label: "NPU Engine", value: "54 TOPS On-Device Tensor Intelligence Core" },
        { label: "Memory (RAM)", value: "12 GB / 16 GB Quad-Channel LPDDR5X (8,533 Mbps)" },
        { label: "Storage", value: "256 GB / 512 GB / 1 TB High-Speed UFS 4.0" },
        { label: "Thermal System", value: "4,200 mm² Graphene Micro-Vapor Chamber" },
      ],
    },
    {
      category: "Optics & Sensor Array",
      specs: [
        { label: "Primary Wide Lens", value: "50 MP 1.0-inch Sony LYT-900, f/1.6, 24mm, Sensor-Shift OIS" },
        { label: "Telephoto Periscope", value: "50 MP 1/1.56-inch Sony IMX890, f/2.4, 70mm, 3x Optical" },
        { label: "Ultra-Wide & Macro", value: "50 MP 1/1.95-inch, f/2.2, 14mm, 122° FOV, 2cm Macro" },
        { label: "Video Capture", value: "4K 120fps / 8K 30fps 10-bit Log ProRes & DNG RAW" },
        { label: "Front Camera", value: "32 MP Quad-Bayer with Phase-Detection AF" },
      ],
    },
    {
      category: "Battery & Power Refill",
      specs: [
        { label: "Cell Chemistry", value: "5,200 mAh High-Density Silicon-Carbon Anode" },
        { label: "Wired Fast Charging", value: "65W GaN Fast Charge (0 to 80% in 18 minutes)" },
        { label: "Wireless Charging", value: "30W Qi2 Magnetic Wireless + 10W Reverse Charge" },
        { label: "Cycle Longevity", value: "85% capacity retained after 1,600 charge cycles" },
      ],
    },
    {
      category: "Connectivity & Security",
      specs: [
        { label: "Cellular & 5G", value: "Global 5G Sub-6 & mmWave Dual-SIM (eSIM + Nano)" },
        { label: "Satellite Uplink", value: "Direct-to-LEO Two-Way Satellite SOS & Messaging" },
        { label: "Wi-Fi & Bluetooth", value: "Wi-Fi 7 (802.11be) 2.4/5/6GHz + Bluetooth 5.4 LE" },
        { label: "Biometrics", value: "Ultrasonic 3D Under-Display Fingerprint + Dual Secure Enclave" },
      ],
    },
  ];

  return (
    <section id="specs" className="py-24 relative overflow-hidden bg-[#07080d] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-mono tracking-widest uppercase text-amber-400">
            Hardware Engineering Manifest
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-2">
            Technical Specifications
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3">
            Every component verified for durability, reparability, and optical excellence.
          </p>
        </div>

        {/* Spec Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0d0f15] border border-white/[0.08] flex flex-col justify-between space-y-4"
            >
              <div>
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white border-b border-white/[0.08] pb-3 mb-4">
                  {cat.category}
                </h3>

                <dl className="space-y-3.5 text-xs">
                  {cat.specs.map((s, sIdx) => (
                    <div key={sIdx} className="space-y-0.5">
                      <dt className="text-zinc-500 font-mono text-[10px] uppercase tracking-wider">
                        {s.label}
                      </dt>
                      <dd className="text-zinc-200 font-medium leading-relaxed">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
