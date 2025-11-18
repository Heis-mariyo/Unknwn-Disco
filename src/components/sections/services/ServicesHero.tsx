import React from "react";
import { motion } from "framer-motion";

// --- 1. HERO SECTION ---
const ServicesHero = () => {
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
          SERVICES
        </span>
      </h1>
      <p className="text-lg text-un-text-gray-light max-w-2xl mx-auto mt-6">
        Comprehensive solutions to amplify your creative presence and build your brand identity.
      </p>
    </motion.section>
  )
};

export default ServicesHero;