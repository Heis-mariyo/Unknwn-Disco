import React from "react";
import Link from "next/link"; // <-- This is what links the pages!
import AboutHero from "@/components/sections/about/AboutHero";
import OurStory from "@/components/sections/about/OurStory";
import OurMission from "@/components/sections/about/OurMission";
import TheName from "@/components/sections/about/TheName";  
import OurValues from "@/components/sections/about/OurValues";

// --- MAIN PAGE COMPONENT ---
export default function AboutPage() {
  return (
    <div id="top" className="bg-un-bg min-h-screen">
      {/* The layout.tsx file adds the Header, Footer, 
          and Buttons! */}
      <AboutHero />
      <OurStory />
      <OurMission />
      <TheName />
      <OurValues />
    </div>
  )
};
