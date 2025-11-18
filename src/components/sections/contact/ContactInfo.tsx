import React from "react";
import { motion } from "framer-motion";
import { EmailIcon, TwitterIcon, InstagramIcon, YoutubeIcon, MusicIcon } from "./ContactIcons";

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
};

export default ContactInfo;