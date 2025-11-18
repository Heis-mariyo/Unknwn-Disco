import React from "react";
import { motion } from "framer-motion";

// --- 1. HERO SECTION ---
const ContactHero = () => {
  return (
    <motion.section 
      className="py-20 px-5 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight -tracking-wide">
        <span className="text-white">LET'S CREATE</span>
        <span className="block bg-gradient-to-r from-un-purple to-un-blue bg-clip-text text-transparent gradient-drift animate-neonShimmer">
          SOMETHING THAT
        </span>
        <span className="block bg-gradient-to-r from-un-blue to-un-teal bg-clip-text text-transparent gradient-drift animate-neonShimmer">
          ECHOES
        </span>
      </h1>
      <p className="text-lg text-un-text-gray-light max-w-xl mx-auto mt-6">
        Have a project in mind? Want to collaborate? We'd love to hear from you.
      </p>
    </motion.section>
  )
};

export default ContactHero;