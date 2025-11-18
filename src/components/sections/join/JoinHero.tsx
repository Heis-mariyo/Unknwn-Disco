import React from "react";
import { motion } from "framer-motion";

// --- 1. HERO SECTION ---
const JoinHero = () => {
  return (
    <motion.section 
      className="py-20 px-5 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-5xl md:text-7xl font-extrabold -tracking-wide">
        <span className="text-white">JOIN THE</span>{' '}
        <span className="bg-gradient-to-r from-un-purple to-un-teal bg-clip-text text-transparent gradient-drift animate-neonShimmer">
          MOVEMENT
        </span>
      </h1>
      <p className="text-lg text-un-text-gray-light max-w-2xl mx-auto mt-6">
        Ready to amplify your creative presence? Share your work with us and let's build something extraordinary together.
      </p>
    </motion.section>
  )
};

export default JoinHero;