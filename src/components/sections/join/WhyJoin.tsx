import React from "react";
import { motion } from "framer-motion";

// --- 3. WHY JOIN SECTION ---
const WhyJoin = () => {
  const items = [
    { title: "GLOBAL EXPOSURE", desc: "Reach audiences worldwide through our strategic marketing and PR initiatives." },
    { title: "BRAND DEVELOPMENT", desc: "Work with our team to craft a unique visual and narrative identity that sets you apart." },
    { title: "CREATIVE COMMUNITY", desc: "Connect with other creators, collaborate on projects, and grow together in a supportive environment." }
  ]

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1 // Each child animates 0.1s after the previous
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  }

  return (
    <motion.section 
      className="py-24 px-[6%] text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants} // Container for stagger animation
    >
      <motion.h2 
        className="text-4xl md:text-5xl font-extrabold mb-16"
        variants={itemVariants} // The title animates in first
      >
        <span className="text-white">WHY JOIN</span>{' '}
        <span className="bg-gradient-to-r from-un-purple to-un-blue bg-clip-text text-transparent">
          UNKNWN DISCO
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map(item => (
          <motion.div 
            key={item.title}
            variants={itemVariants} // Each card animates in
            className="bg-un-bg-card border border-un-border p-8 rounded-2xl text-left transition-all duration-300 hover:-translate-y-2 hover:border-un-purple"
          >
            <h3 className="text-2xl font-bold text-white mb-6">{item.title}</h3>
            <p className="text-un-text-gray leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
};

export default WhyJoin;