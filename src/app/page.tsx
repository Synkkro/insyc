import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CameraShowcase from "@/components/CameraShowcase";
import NeuralEngine from "@/components/NeuralEngine";
import DisplayAndMaterials from "@/components/DisplayAndMaterials";
import BatteryAndPower from "@/components/BatteryAndPower";
import InteractiveConfigurator from "@/components/InteractiveConfigurator";
import TechSpecsMatrix from "@/components/TechSpecsMatrix";
import PreOrderSection from "@/components/PreOrderSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#06070c] text-zinc-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Floating Glassmorphic Masthead */}
      <Navbar />

      <main className="flex-1">
        {/* Vibrant Neon Aurora Hero */}
        <Hero />

        {/* 1-Inch Custom Optics Array & Focal Length Explorer */}
        <CameraShowcase />

        {/* 54 TOPS On-Device Neural Engine */}
        <NeuralEngine />

        {/* 144Hz AMOLED & Cyber-Titanium Metallurgy */}
        <DisplayAndMaterials />

        {/* 120W HyperCharge & Battery Simulation */}
        <BatteryAndPower />

        {/* Interactive 3D Configurator & Price Calculator */}
        <InteractiveConfigurator />

        {/* Full Hardware Technical Matrix */}
        <TechSpecsMatrix />

        {/* Radiant Batch 01 VIP Pre-Order Section */}
        <PreOrderSection />
      </main>

      {/* Modern Footer */}
      <Footer />
    </div>
  );
}
