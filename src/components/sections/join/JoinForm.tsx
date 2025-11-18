import React from "react";
import { motion } from "framer-motion";

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
};

export default JoinForm;