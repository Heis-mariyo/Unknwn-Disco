'use client' // This component must be a client component to use hooks

import Link from 'next/link'
// We don't need 'Image' anymore since we're using text
import { usePathname } from 'next/navigation'
import TextScramble from './TextScramble' 

// --- FLOATING BUTTONS ---
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

// --- HEADER ---
export function Header() {
  const pathname = usePathname()
  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "CREATORS", path: "/creators" },
    { name: "JOIN", path: "/join" },
    { name: "CONTACT", path: "/contact" },
  ]

  return (
    <header className="flex justify-between items-center py-6 px-[6%] z-50 relative">
      
      {/* --- THIS IS THE NEW TEXT LOGO --- */}
      <Link href="/">
        <div className="
          text-xl font-bold tracking-wide cursor-pointer
          text-white
          transition-all duration-200 ease-out
          hover:drop-shadow-[0_0_8px_rgba(160,74,255,0.7)]
        ">
          UNKNWN DISCO
        </div>
      </Link>
      
      <nav>
        <ul className="flex gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path
            return (
              <li key={item.name} className="relative group">
                <Link
                  href={item.path}
                  className={`text-sm font-bold transition-opacity duration-200 ${
                    isActive
                      ? "text-white" // Active = 100% opacity
                      : "text-un-text-gray opacity-60 hover:opacity-100" // Inactive = 60% opacity
                  }`}
                >
                  <TextScramble>{item.name}</TextScramble>
                </Link>
                
                {/* Active Underline (The static one) */}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-un-purple to-un-teal"></span>
                )}

                {/* --- NEW HOVER UNDERLINE --- */}
                {!isActive && (
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-un-purple to-un-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out origin-left"></span>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}