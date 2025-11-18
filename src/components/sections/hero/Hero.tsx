import React from "react";
import Link from "next/link";


// --- 2. HERO SECTION COMPONENT ---
const Hero = () => {
  return (
    <main className="flex flex-col items-center justify-center text-center py-20 px-5">
      <h1 className="text-7xl font-extrabold leading-tight -tracking-wider mb-6">
        <span className="block bg-gradient-to-r from-un-purple to-un-blue bg-clip-text text-transparent gradient-drift animate-gradientDrift">
          WE BUILD
        </span>
        <span className="block bg-gradient-to-r from-un-blue to-un-teal bg-clip-text text-transparent animate-neonShimmer">
          VISIBILITY
        </span>
        <span className="block text-white">FOR THE UNSEEN.</span>
      </h1>
      <p className="text-lg text-un-text-gray-light max-w-lg leading-relaxed mb-10">
        UNKNWN DISCO helps creators amplify their brands, gain exposure, and
        build global presence.
      </p>
      <div className="flex gap-5 mb-8">
        <Link
          href="./join"
          className="px-7 py-3.5 text-sm font-bold rounded-full shadow-md bg-transparent border-2 transition-all duration-300 text-un-purple border-un-purple hover:text-white hover:bg-gradient-to-r from-un-purple to-un-blue hover:scale-[1.03] hover:shadow-xl hover:shadow-un-purple/10"
        >
          WORK WITH US
        </Link>
        <Link
          href="./creators"
          className="px-7 py-3.5 text-sm font-bold rounded-full shadow-md bg-transparent border-2 transition-all duration-300 text-un-purple border-un-purple hover:text-white hover:bg-gradient-to-r from-un-purple to-un-blue hover:scale-[1.03] hover:shadow-xl hover:shadow-un-purple/10"
        >
          DISCOVER CREATORS
        </Link>
      </div>
      <div className="w-5 h-1 bg-white rounded-full animate-blink"></div>
    </main>
  );
};

export default Hero;