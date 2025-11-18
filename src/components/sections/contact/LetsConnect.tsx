import React from "react";
import { motion } from "framer-motion";

// --- 4. LETS CONNECT SECTION ---
const LetsConnect = () => {
  const items = [
    { title: "CREATORS", desc: "Looking to amplify your creative work? Reach out to discuss how we can help build your brand." },
    { title: "COLLABORATORS", desc: "Interested in partnering on projects or campaigns? Let's explore opportunities together." },
    { title: "MEDIA", desc: "Press inquiries, interviews, and media requests are always welcome. Get in touch with our team." }
  ]

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
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
      variants={containerVariants}
    >
      <motion.h2 
        className="text-4xl md:text-5xl font-extrabold mb-16"
        variants={itemVariants}
      >
        <span className="text-white">LET'S</span>{' '}
        <span className="bg-gradient-to-r from-un-purple to-un-blue bg-clip-text text-transparent">
          CONNECT
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map(item => (
          <motion.div 
            key={item.title}
            variants={itemVariants}
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

export default LetsConnect;