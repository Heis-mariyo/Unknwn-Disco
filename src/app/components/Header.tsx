// src/app/components/Header.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import TextScramble from './TextScramble';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- FLOATING BUTTONS (No changes) ---
const ArrowUpIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 19V5m-7 7l7-7 7 7"
    ></path>
  </svg>
);

export function FloatingButtons() {
  /* ... (Same as before) ... */
  return (
    <>
      <a
        href="#top"
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-un-purple flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#b373ff]"
      >
        <ArrowUpIcon />
      </a>
      <button className="fixed bottom-[104px] right-8 z-50 w-12 h-12 rounded-full bg-[#38324e] flex items-center justify-center text-white text-2xl font-bold shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#50486e]">
        ?
      </button>
    </>
  );
}

// --- ICON COMPONENTS (No changes) ---
const HamburgerIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    ></path>
  </svg>
);

const CloseIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    ></path>
  </svg>
);

// --- HEADER ---
export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'CREATORS', path: '/creators' },
    { name: 'JOIN', path: '/join' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // --- 1. NEW: Animation Variants for the Dropdown ---
  const menuVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.2, ease: 'easeOut' as const},
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: { duration: 0.1, ease: 'easeIn' as const },
    },
  };

  return (
    <>
      {/* --- 2. ADD 'relative' HERE --- */}
      {/* This makes the header the parent for the absolute-positioned dropdown */}
      <header className="flex justify-between items-center py-6 px-[6%] z-50 relative">
        {/* --- LOGO (No changes) --- */}
        <Link href="/">
          <div className="text-xl font-bold tracking-wide cursor-pointer text-white transition-all duration-200 ease-out hover:drop-shadow-[0_0_8px_rgba(160,74,255,0.7)]">
            UNKNWN DISCO
          </div>
        </Link>

        {/* --- DESKTOP NAV (No changes) --- */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.name} className="relative group">
                  <Link
                    href={item.path}
                    className={`text-sm font-bold transition-opacity duration-200 ${
                      isActive
                        ? 'text-white'
                        : 'text-un-text-gray opacity-60 hover:opacity-100'
                    }`}
                  >
                    <TextScramble>{item.name}</TextScramble>
                  </Link>
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-un-purple to-un-teal"></span>
                  )}
                  {!isActive && (
                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-un-purple to-un-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out origin-left"></span>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* --- MOBILE MENU BUTTON (No changes) --- */}
        <button
          className="md:hidden z-50 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>

        {/* --- 3. UPDATED: MOBILE MENU DROPDOWN --- */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              // This is the new styling for the dropdown
              className="md:hidden absolute top-full right-[6%] mt-4 w-64
                         bg-[#1a1a1e] border border-un-border-ghost
                         rounded-lg shadow-xl p-4 origin-top-right"
              // `origin-top-right` makes it scale from the corner
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.path}
                        className={`block text-base font-bold p-2 rounded-md ${
                          isActive
                            ? 'text-white bg-un-purple' // Active link style
                            : 'text-un-text-gray hover:text-white hover:bg-[#333]' // Inactive
                        }`}
                        onClick={handleLinkClick} // Close menu on click
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}