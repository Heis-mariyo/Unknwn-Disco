import React from "react";
import { motion } from "framer-motion";

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
};

export default ContactForm;