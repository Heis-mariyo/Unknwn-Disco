import React from "react";
import { SparklesIcon, ChartBarIcon, UserGroupIcon, ChatBubbleIcon } from "./ServicesIcon";
import { motion } from "framer-motion";

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
};

export default ServicesList;