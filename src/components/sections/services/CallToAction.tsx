import React from "react";
import { motion } from "framer-motion";

// --- 4. CALL TO ACTION ---
const CallToAction = () => {
  return (
    <motion.section 
      className="py-24 px-[6%]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="p-1 rounded-3xl bg-gradient-to-r from-un-purple via-un-blue to-un-teal max-w-5xl mx-auto transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-un-purple/20">
        <div className="bg-un-bg-card rounded-[22px] text-center p-12 md:p-20">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight -tracking-wider mb-6">
            <span className="block text-white">LET'S BUILD</span>
            <span className="block bg-gradient-to-r from-un-blue to-un-teal bg-clip-text text-transparent">
              YOUR BRAND
            </span>
          </h2>
          <p className="text-lg text-un-text-gray-light max-w-md mx-auto leading-relaxed mb-10">
            Ready to transform your creative vision into a powerful brand presence?
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="#"
              className="px-7 py-3.5 text-sm font-bold text-white rounded-full bg-gradient-to-r from-un-purple to-un-blue transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-un-purple/20"
            >
              GET STARTED
            </a>
            <a
              href="#"
              className="px-7 py-3.5 text-sm font-bold text-white rounded-full bg-transparent border-2 border-un-border-ghost transition-all duration-300 hover:border-white hover:bg-white/5"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  )
};

export default CallToAction;