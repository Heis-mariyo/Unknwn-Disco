'use client' // This page uses Framer Motion, so it's a client component

import React from 'react'
import { motion } from 'framer-motion'

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
        <span className="block bg-gradient-to-r from-un-purple to-un-blue bg-clip-text text-transparent gradient-drift animate-gradientDrift animate-neonShimmer">
          SOMETHING THAT
        </span>
        <span className="block bg-gradient-to-r from-un-blue to-un-teal bg-clip-text text-transparent gradient-drift animate-gradientDrift animate-neonShimmer">
          ECHOES
        </span>
      </h1>
      <p className="text-lg text-un-text-gray-light max-w-xl mx-auto mt-6">
        Have a project in mind? Want to collaborate? We'd love to hear from you.
      </p>
    </motion.section>
  )
}

// --- 2. CONTACT FORM ---
const ContactForm = () => {
  // Reusable style for all form inputs
  const inputStyles = "w-full bg-un-bg-card border border-un-border-ghost rounded-lg p-4 text-white placeholder-un-text-gray focus:outline-none focus:ring-2 focus:ring-un-purple transition-all duration-300"

  return (
    <motion.section 
      className="py-16 px-[6%]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {/* Gradient Border Box */}
      <div className="p-1 rounded-3xl bg-gradient-to-r from-un-purple to-un-teal max-w-4xl mx-auto">
        <div className="bg-un-bg-card rounded-[22px] p-8 md:p-12">
          
          <form className="space-y-8">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-white mb-2.5">
                NAME *
              </label>
              <input type="text" id="name" placeholder="Your name" className={inputStyles} />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-white mb-2.5">
                EMAIL *
              </label>
              <input type="email" id="email" placeholder="your.email@example.com" className={inputStyles} />
            </div>
            
            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-white mb-2.5">
                MESSAGE *
              </label>
              <textarea id="message" rows={6} placeholder="Tell us about your project or inquiry..." className={inputStyles}></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <motion.button
                type="submit"
                className="w-full px-12 py-4 text-sm font-bold text-white rounded-full bg-gradient-to-r from-un-purple to-un-teal"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(160, 74, 255, 0.3)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                SEND MESSAGE
              </motion.button>
            </div>
          </form>
          
        </div>
      </div>
    </motion.section>
  )
}

// --- 3. OTHER CONTACT INFO ---
const ContactInfo = () => {
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <motion.section 
      className="py-16 px-[6%] max-w-4xl mx-auto space-y-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Email */}
      <motion.div variants={itemVariants} className="bg-un-bg-card border border-un-border rounded-2xl p-8 flex items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-un-purple-bg border border-un-purple-border flex-shrink-0 flex items-center justify-center">
          <EmailIcon />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-1">EMAIL</h3>
          <p className="text-un-text-gray-light text-lg hover:text-un-teal transition-colors">
            <a href="mailto:hello@unknwndisco.com">hello@unknwndisco.com</a>
          </p>
        </div>
      </motion.div>

      {/* Follow Us */}
      <motion.div variants={itemVariants} className="bg-un-bg-card border border-un-border rounded-2xl p-8">
        <h3 className="text-xl font-bold text-white mb-6">FOLLOW US</h3>
        <div className="flex gap-4">
          <a href="#" className="w-12 h-12 rounded-full border border-un-border-ghost flex items-center justify-center text-un-text-gray hover:text-white hover:border-white transition-all">
            <TwitterIcon />
          </a>
          <a href="#" className="w-12 h-12 rounded-full border border-un-border-ghost flex items-center justify-center text-un-text-gray hover:text-white hover:border-white transition-all">
            <InstagramIcon />
          </a>
          <a href="#" className="w-12 h-12 rounded-full border border-un-border-ghost flex items-center justify-center text-un-text-gray hover:text-white hover:border-white transition-all">
            <YoutubeIcon />
          </a>
          <a href="#" className="w-12 h-12 rounded-full border border-un-border-ghost flex items-center justify-center text-un-text-gray hover:text-white hover:border-white transition-all">
            <MusicIcon />
          </a>
        </div>
      </motion.div>

      {/* Response Time */}
      <motion.div variants={itemVariants} className="bg-un-bg-card border border-un-border rounded-2xl p-8">
        <h3 className="text-xl font-bold text-white mb-3">RESPONSE TIME</h3>
        <p className="text-un-text-gray-light text-lg">
          We typically respond to all inquiries within 24-48 hours during business days.
        </p>
      </motion.div>
    </motion.section>
  )
}

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
}


// --- MAIN PAGE COMPONENT ---
export default function ContactPage() {
  return (
    <div id="top">
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <LetsConnect />
      {/* The Header and Footer are added automatically by layout.tsx */}
    </div>
  )
}

// --- ICON COMPONENTS ---
const EmailIcon = () => (
  <svg className="w-8 h-8 text-un-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
)
const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
)
const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.227-1.669 4.771-4.919 4.919-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.227 1.669 4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.62c-3.203 0-3.57.01-4.832.069-2.73.125-3.95 1.346-4.074 4.074-.06 1.262-.069 1.63-.069 4.832s.01 3.57.069 4.832c.125 2.73 1.346 3.95 4.074 4.074 1.262.06 1.63.069 4.832.069s3.57-.01 4.832-.069c2.73-.125 3.95-1.346 4.074-4.074.06-1.262.069-1.63.069-4.832s-.01-3.57-.069-4.832c-.125-2.73-1.346-3.95-4.074-4.074C15.57 3.793 15.2 3.783 12 3.783zM12 9.75a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zM12 16a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zm6.2-6.7a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" /></svg>
)
const YoutubeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
)
const MusicIcon = () => (
  <svg className="w-7 h-7 text-un-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18"cy="16" r="3"></circle></svg>
)