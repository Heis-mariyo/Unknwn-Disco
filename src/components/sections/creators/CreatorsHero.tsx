import React from "react";
import { motion } from "framer-motion";

// --- 1. HERO SECTION (No changes) ---
const CreatorsHero = () => {
  return (
    <motion.section
      className="py-20 px-5 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-5xl md:text-7xl font-extrabold -tracking-wide">
        <span className="text-white">OUR</span>{' '}
        <span className="bg-gradient-to-r from-un-purple to-un-teal bg-clip-text text-transparent gradient-drift animate-neonShimmer">
          CREATORS
        </span>
      </h1>
      <p className="text-lg text-un-text-gray-light max-w-2xl mx-auto mt-6">
        Meet the talented artists, musicians, writers, and performers we're proud
        to support.
      </p>
    </motion.section>
  );
};

export default CreatorsHero;