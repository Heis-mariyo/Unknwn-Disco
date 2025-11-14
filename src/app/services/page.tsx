'use client' // This page uses Framer Motion, so it's a client component
import React from 'react'
import { motion } from 'framer-motion'

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
        <span className="bg-gradient-to-r from-un-purple to-un-teal bg-clip-text text-transparent gradient-drift animate-gradientDrift animate-neonShimmer">
          SERVICES
        </span>
      </h1>
      <p className="text-lg text-un-text-gray-light max-w-2xl mx-auto mt-6">
        Comprehensive solutions to amplify your creative presence and build your brand identity.
      </p>
    </motion.section>
  )
}

// --- 2. SERVICES LIST ---
const ServicesList = () => {
  const services = [
    {
      icon: <SparklesIcon />,
      title: "BRANDING & IDENTITY",
      desc: "We craft unique visual and narrative identities that capture your essence and make you unforgettable.",
      items: ["Logo & Visual Identity Design", "Brand Story Development", "Style Guide Creation", "Content Strategy"]
    },
    {
      icon: <ChartBarIcon />,
      title: "DIGITAL EXPOSURE",
      desc: "Strategic social media management, PR campaigns, and content distribution to expand your reach globally.",
      items: ["Social Media Management", "PR & Media Outreach", "Content Distribution", "Growth Strategy"]
    },
    {
      icon: <UserGroupIcon />,
      title: "ARTIST SUPPORT",
      desc: "End-to-end support for creative projects, collaborations, and career development in the creative industry.",
      items: ["Project Management", "Collaboration Facilitation", "Career Development", "Creative Direction"]
    },
    {
      icon: <ChatBubbleIcon />,
      title: "CONSULTING",
      desc: "Expert guidance on brand positioning, market strategy, and building sustainable creative careers.",
      items: ["Brand Positioning", "Market Analysis", "Strategy Development", "One-on-One Coaching"]
    }
  ]

  // Framer Motion variant for the card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section className="py-16 px-[6%]">
      <div className="space-y-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="p-1 rounded-3xl bg-gradient-to-r from-un-purple to-un-teal transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-un-purple/20"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Triggers when 30% is visible
          >
            <div className="bg-un-bg-card rounded-[22px] p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                {/* Icon */}
                <div className="w-20 h-20 rounded-full bg-un-purple-bg border border-un-purple-border flex-shrink-0 flex items-center justify-center">
                  {service.icon}
                </div>
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-lg text-un-text-gray-light mb-6">{service.desc}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                    {service.items.map(item => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="text-un-purple">●</span>
                        <span className="text-white">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

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
}

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
}

// --- MAIN PAGE COMPONENT ---
export default function ServicesPage() {
  return (
    // No Header, Footer, or FloatingButtons here!
    // The layout.tsx file adds them automatically.
    <div id="top">
      <ServicesHero />
      <ServicesList />
      <HowWeWork />
      <CallToAction />
    </div>
  )
}

// --- ICON COMPONENTS ---
const SparklesIcon = () => (
  <svg className="w-8 h-8 text-un-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m1-15h4m-2 2v4m6.5 1.5l-3 3-3-3l3-3 3 3zM4 11h4m-2 2v4m6.5 1.5l-3 3-3-3l3-3 3 3z"/></svg>
)
const ChartBarIcon = () => (
  <svg className="w-8 h-8 text-un-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2z"/></svg>
)
const UserGroupIcon = () => (
  <svg className="w-8 h-8 text-un-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-2.87m-1.421-2.87a3 3 0 00-4.242 0M12 10a3 3 0 11-6 0 3 3 0 016 0zm-3 9a3 3 0 00-3 3v2h6v-2a3 3 0 00-3-3zm6-3a3 3 0 00-3 3v2h6v-2a3 3 0 00-3-3z"/></svg>
)
const ChatBubbleIcon = () => (
  <svg className="w-8 h-8 text-un-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-4 4z"/></svg>
)