'use client' // This page needs to be a Client Component for Framer Motion

import React from 'react'
import { motion } from 'framer-motion'

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
        <span className="bg-gradient-to-r from-un-purple to-un-teal bg-clip-text text-transparent gradient-drift animate-gradientDrift animate-neonShimmer">
          MOVEMENT
        </span>
      </h1>
      <p className="text-lg text-un-text-gray-light max-w-2xl mx-auto mt-6">
        Ready to amplify your creative presence? Share your work with us and let's build something extraordinary together.
      </p>
    </motion.section>
  )
}

// --- 2. JOIN FORM ---
const JoinForm = () => {
  // A reusable style for all form inputs
  const inputStyles = "w-full bg-un-bg-card border border-un-border-ghost rounded-lg p-4 text-white placeholder-un-text-gray focus:outline-none focus:ring-2 focus:ring-un-purple transition-all duration-300"

  return (
    <motion.section 
      className="py-16 px-[6%]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* ... (Gradient Border Box) ... */}
      <div className="bg-un-bg-card rounded-[22px] p-8 md:p-12">
        <form className="space-y-8">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-bold text-white mb-2.5">
              FULL NAME *
            </label>
            <input 
              type="text" 
              id="fullName" 
              placeholder="Your full name" 
              className={inputStyles} 
              suppressHydrationWarning={true} // <-- ADD THIS
            />
          </div>

          {/* Field/Talent Type */}
          <div>
            <label htmlFor="talentType" className="block text-sm font-bold text-white mb-2.5">
              FIELD / TALENT TYPE *
            </label>
            <select 
              id="talentType" 
              className={inputStyles} 
              suppressHydrationWarning={true} // <-- ADD THIS
            >
              <option value="">Select your field</option>
              <option value="music">Music</option>
              <option value="writing">Writing</option>
              <option value="visual">Visual Art</option>
              <option value="performance">Performance</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          {/* Short Bio */}
          <div>
            <label htmlFor="bio" className="block text-sm font-bold text-white mb-2.5">
              SHORT BIO *
            </label>
            <textarea 
              id="bio" 
              rows={5} 
              placeholder="Tell us about yourself and your creative work..." 
              className={inputStyles} 
              suppressHydrationWarning={true} // <-- ADD THIS
            ></textarea>
          </div>

          {/* Portfolio */}
          <div>
            <label htmlFor="portfolio" className="block text-sm font-bold text-white mb-2.5">
              PORTFOLIO OR SOCIAL LINKS *
            </label>
            <input 
              type="url" 
              id="portfolio" 
              placeholder="https://your-portfolio.com" 
              className={inputStyles} 
              suppressHydrationWarning={true} // <-- ADD THIS
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-white mb-2.5">
              EMAIL *
            </label>
            <input 
              type="email" 
              id="email" 
              placeholder="your.email@example.com" 
              className={inputStyles} 
              suppressHydrationWarning={true} // <-- ADD THIS
            />
          </div>

          {/* ... (Submit Button) ... */}
        </form>
      </div>
    </motion.section>
  )
}

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
}


// --- MAIN PAGE COMPONENT ---
export default function JoinPage() {
  return (
    <div id="top">
      <JoinHero />
      <JoinForm />
      <WhyJoin />
      {/* The Header and Footer are added automatically by layout.tsx */}
    </div>
  )
}