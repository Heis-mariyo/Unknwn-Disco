import React from "react";
import Link from "next/link";
import Hero from "@/components/sections/hero/Hero";
import WorkWith from "@/components/sections/hero/Workwith";
import WhatWeDo from "@/components/sections/hero/Whatwedo";
import Spotlight from "@/components/sections/hero/Spotlight";
import CallToAction from "@/components/sections/hero/CallToAction";
import Marquee from "@/components/sections/hero/Marquee";


export default function Home() {
  return (
    <div id="top">
      <Hero />
      <WorkWith />
      <WhatWeDo />
      <Spotlight />
      <CallToAction />
      <Marquee />
    </div>
  )
};



