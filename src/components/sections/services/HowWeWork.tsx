import React from "react";
import { motion } from "framer-motion";

// --- 3. HOW WE WORK ---
const HowWeWork = () => {
  const steps = [
    { num: "01", title: "DISCOVERY", desc: "We learn about your creative vision, goals, and unique voice." },
    { num: "02", title: "STRATEGY", desc: "We develop a custom roadmap tailored to your brand and audience." },
    { num: "03", title: "CREATION", desc: "We bring your brand to life through design, content, and campaigns." },
    { num: "04", title: "AMPLIFICATION", desc: "We launch, optimize, and scale your presence across all channels." }
  ]

  // Stagger animation container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2 // Each child will animate 0.2s after the previous
      }
    }
  }

  // Stagger animation item
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section className="py-24 px-[6%] text-center">
      <motion.h2 
        className="text-4xl md:text-5xl font-extrabold mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span className="text-white">HOW WE</span>{' '}
        <span className="bg-gradient-to-r from-un-purple to-un-blue bg-clip-text text-transparent">
          WORK
        </span>
      </motion.h2>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-4 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {steps.map(step => (
          <motion.div key={step.num} variants={itemVariants} className="text-left">
            <span className="text-5xl font-bold bg-gradient-to-r from-un-purple to-un-blue bg-clip-text text-transparent">
              {step.num}
            </span>
            <h3 className="text-2xl font-bold text-white my-4">{step.title}</h3>
            <p className="text-un-text-gray leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
};

export default HowWeWork;   