import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InSync Ultra Phone (1) — The Quantum AI Flagship",
  description:
    "Experience the pinnacle of mobile innovation. Cyber-forged Grade-5 Titanium, 1-inch Sony LYT-900 Optics, 120W HyperCharge, and On-Device Quantum AI Engine.",
  keywords: [
    "InSync Phone",
    "InSync Ultra",
    "Quantum AI Phone",
    "Titanium Smartphone",
    "1-inch Camera Phone",
    "Next-Gen Mobile",
  ],
  openGraph: {
    title: "InSync Ultra Phone (1) — The Quantum AI Flagship",
    description:
      "Experience the pinnacle of mobile innovation with InSync Phone (1). Cyber-forged Titanium, 1-inch Optics, and On-Device Neural Intelligence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-[#06070c] text-zinc-100 min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200 antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
