import React from "react";

// --- 2. HERO SECTION (Text Only) ---
const AboutHero = () => {
  return (
    <section className="pt-32 pb-20 px-[6%] text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight opacity-0 animate-fadeInUp">
        <span className="text-white">OUR MISSION</span>
        <br />
        <span className="bg-gradient-to-r from-un-purple to-un-purple-light bg-clip-text text-transparent">
          TO
        </span>
        <br />
        <span className="bg-gradient-to-r from-un-purple to-un-blue bg-clip-text text-transparent animate-neonShimmer">
          TURN THE
        </span>
        <br />
        <span className="bg-gradient-to-r from-un-blue to-un-teal bg-clip-text text-transparent animate-neonShimmer">
          UNKNOWN INTO
        </span>
        <br />
        <span className="bg-gradient-to-r from-un-teal to-white bg-clip-text text-transparent">
          ICONS
        </span>
      </h1>
    </section>
  );
};

export default AboutHero;