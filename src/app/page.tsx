import React from "react";
import Link from "next/link";

// --- 1. HEADER COMPONENT (Updated with Active Underline) ---
const Header = () => {
  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "CREATORS", path: "/creators" },
    { name: "JOIN", path: "/join" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <header className="flex justify-between items-center py-6 px-[6%]">
      <Link href="/">
        <img 
        src="/unknwn-disco-logo.png" 
        alt="UNKNWN DISCO Logo" 
        className="h-12 cursor-pointer"
        />
      </Link>
      
      <nav>
        <ul className="flex gap-8">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <Link
                href={item.path}
                className={`text-sm font-bold transition-colors duration-300 ${
                  item.name === "HOME"
                    ? "text-white" // Active color
                    : "text-un-text-gray hover:text-white" // Inactive color
                }`}
              >
                {item.name}
              </Link>
              
              {/* The Magic Underline Logic */}
              {item.name === "HOME" && (
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-un-purple to-un-teal"></span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

// --- 2. HERO SECTION COMPONENT ---
const Hero = () => {
  return (
    <main className="flex flex-col items-center justify-center text-center py-20 px-5">
      <h1 className="text-7xl font-extrabold leading-tight -tracking-wider mb-6">
        <span className="block bg-gradient-to-r from-un-purple to-un-blue bg-clip-text text-transparent">
          WE BUILD
        </span>
        <span className="block bg-gradient-to-r from-un-blue to-un-teal bg-clip-text text-transparent">
          VISIBILITY
        </span>
        <span className="block text-white">FOR THE UNSEEN.</span>
      </h1>
      <p className="text-lg text-un-text-gray-light max-w-lg leading-relaxed mb-10">
        UNKNWN DISCO helps creators amplify their brands, gain exposure, and
        build global presence.
      </p>
      <div className="flex gap-5 mb-8">
        <a
          href="#"
          className="px-7 py-3.5 text-sm font-bold text-white rounded-full bg-gradient-to-r from-un-purple to-un-blue transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-un-purple/20"
        >
          WORK WITH US
        </a>
        <a
          href="#"
          className="px-7 py-3.5 text-sm font-bold text-white rounded-full bg-transparent border-2 border-un-border-ghost transition-all duration-300 hover:border-white hover:bg-white/5"
        >
          DISCOVER CREATORS
        </a>
      </div>
      <div className="w-5 h-1 bg-white rounded-full animate-blink"></div>
    </main>
  );
};

// --- 3. "WHO WE WORK WITH" COMPONENT ---
const WorkWith = () => {
  const cards = [
    {
      icon: <MusicIcon />,
      title: "MUSICIANS & PRODUCERS",
      desc: "Amplify your sound and reach audiences worldwide.",
    },
    {
      icon: <PenIcon />,
      title: "WRITERS & POETS",
      desc: "Share your words with readers who need to hear them.",
    },
    {
      icon: <PaintIcon />,
      title: "PAINTERS & VISUAL ARTISTS",
      desc: "Showcase your art to collectors and enthusiasts.",
    },
    {
      icon: <MasksIcon />,
      title: "PERFORMERS & CREATIVE TALENT",
      desc: "Build your presence and captivate your audience.",
    },
  ];

  return (
    <section className="py-24 px-[6%] text-center">
      <h2 className="text-5xl font-extrabold mb-16 -tracking-wide">
        WHO WE{" "}
        <span className="bg-gradient-to-r from-un-purple to-un-blue bg-clip-text text-transparent">
          WORK WITH
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={card.title}
            className="bg-un-bg-card p-8 rounded-2xl border border-un-border text-left transition-all duration-300 hover:-translate-y-1 hover:border-un-purple hover:shadow-xl hover:shadow-un-purple/10 opacity-0 animate-fadeInUp"
            style={{ animationDelay: `${(index + 1) * 0.1}s` }}
          >
            <div className="w-16 h-16 rounded-full bg-un-purple-bg border border-un-purple-border flex items-center justify-center mb-6">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold mb-2.5">{card.title}</h3>
            <p className="text-un-text-gray leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- 4. "WHAT WE DO" COMPONENT ---
const WhatWeDo = () => {
  const services = [
    {
      title: "BRANDING & IDENTITY",
      desc: "We craft unique visual and narrative identities that make creators unforgettable.",
    },
    {
      title: "DIGITAL EXPOSURE",
      desc: "Strategic social media, PR, and content distribution to expand your reach.",
    },
    {
      title: "CREATIVE MANAGEMENT",
      desc: "End-to-end support for campaigns, collaborations, and creative direction.",
    },
  ];
  return (
    <section className="py-24 px-[6%] text-center">
      <h2 className="text-5xl font-extrabold mb-16 -tracking-wide">
        WHAT WE{" "}
        <span className="bg-gradient-to-r from-un-blue to-un-teal bg-clip-text text-transparent">
          DO
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="p-1 rounded-2xl bg-gradient-to-r from-un-blue to-un-purple transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-un-purple/15 opacity-0 animate-fadeInUp"
            style={{ animationDelay: `${(index + 1) * 0.1}s` }}
          >
            <div className="bg-un-bg-card p-8 rounded-[14px] text-left h-full">
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-un-text-gray leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- 5. "TALENT SPOTLIGHT" COMPONENT ---
const Spotlight = () => {
  const talents = [
    { name: 'ALEX RIVERS', role: 'MUSIC PRODUCER', img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=60' },
    { name: 'MAYA CHEN', role: 'VISUAL ARTIST', desc: 'Contemporary abstract painter', img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&auto=format&fit=crop&q=60' },
    { name: 'JORDAN BLAKE', role: 'POET & WRITER', img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop&q=60' },
    { name: 'SAM TORRES', role: 'PERFORMANCE ARTIST', desc: 'Stage innovator', img: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=600&auto=format&fit=crop&q=60' },
  ]
  return (
    <section className="py-24 px-[6%]">
      <h2 className="text-5xl font-extrabold mb-16 -tracking-wide text-center">
        TALENT{' '}
        <span className="bg-gradient-to-r from-un-purple via-un-blue to-un-teal bg-clip-text text-transparent">
          SPOTLIGHT
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {talents.map((talent, index) => (
          <div
            key={talent.name}
            // 1. Added 'group' class here. This lets children react when the parent is hovered.
            className="group relative min-h-[450px] rounded-2xl overflow-hidden bg-cover bg-center transition-transform duration-400 ease-in-out hover:scale-[1.02] opacity-0 animate-fadeInUp"
            style={{ 
              backgroundImage: `url('${talent.img}')`,
              animationDelay: `${(index % 2 + 1) * 0.1}s` 
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/90"></div>
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 p-8 z-10 w-full">
              <h3 className="text-3xl font-bold mb-1 text-white">{talent.name}</h3>
              <p className="text-base font-bold text-un-teal uppercase tracking-wider mb-2">{talent.role}</p>
              
              {/* Description (Optional) */}
              {talent.desc && <p className="text-un-text-gray-light text-sm mb-4 max-w-xs">{talent.desc}</p>}

              {/* 2. The Link: Hidden by default, visible on group-hover */}
              <div className="overflow-hidden h-10"> {/* Container to mask the slide up */}
                <a 
                  href="#" 
                  className="inline-block text-sm font-bold text-un-purple transform translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:text-un-blue"
                >
                  VIEW PROFILE →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// --- 6. "CALL TO ACTION" COMPONENT ---
const CallToAction = () => {
  return (
    <section className="py-24 px-[6%]">
      <div
        className="p-1 rounded-3xl bg-gradient-to-r from-un-purple to-un-teal max-w-5xl mx-auto opacity-0 animate-fadeInUp"
        style={{ animationDelay: "0.1s" }}
      >
        <div className="bg-un-bg-card rounded-2xl text-center p-12 md:p-16">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight -tracking-wider mb-6">
            <span className="block text-white">YOU CREATE.</span>
            <span className="block bg-gradient-to-r from-un-purple to-un-blue bg-clip-text text-transparent">
              WE AMPLIFY.
            </span>
          </h2>
          <p className="text-lg text-un-text-gray-light max-w-md mx-auto leading-relaxed mb-10">
            Join a community of creators who are shaping culture and building
            their legacy.
          </p>
          <a
            href="#"
            className="px-7 py-3.5 text-sm font-bold text-white rounded-full bg-gradient-to-r from-un-purple to-un-blue transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-un-purple/20"
          >
            SUBMIT YOUR WORK
          </a>
        </div>
      </div>
    </section>
  );
};

// --- 7. "MARQUEE" COMPONENT ---
const Marquee = () => {
  const items = [
    "CULTURE",
    "COMMUNITY",
    "CREATIVITY",
    "BRANDING",
    "EXPOSURE",
    "STRATEGY",
  ];

  const marqueeContent = items.map((item) => (
    <span
      key={item}
      className="mx-4 text-un-purple font-bold tracking-wider text-sm"
    >
      • {item}
    </span>
  ));

  return (
    <div className="py-8 overflow-hidden border-y border-un-border">
      <div className="flex animate-marquee whitespace-nowrap">
        <div className="flex" aria-hidden="true">
          {marqueeContent}
        </div>
        <div className="flex" aria-hidden="true">
          {marqueeContent}
        </div>
        <div className="flex" aria-hidden="true">
          {marqueeContent}
        </div>
        <div className="flex" aria-hidden="true">
          {marqueeContent}
        </div>
      </div>
    </div>
  );
};

// --- 8. "FOOTER" COMPONENT ---
const Footer = () => {
  const navLinks = ["Home", "About", "Services", "Creators", "Join", "Contact"];

  return (
    <footer className="px-[6%] pt-16 pb-8 text-un-text-gray">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <div className="text-xl font-bold tracking-wide mb-4 text-white">
            UNKNWN DISCO
          </div>
          <p>Visibility. Energy. Culture.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-white">NAVIGATE</h4>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-white">CONNECT</h4>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-un-border-ghost flex items-center justify-center hover:text-white hover:border-white transition-all"
            >
              <TwitterIcon />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-un-border-ghost flex items-center justify-center hover:text-white hover:border-white transition-all"
            >
              <InstagramIcon />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-un-border-ghost flex items-center justify-center hover:text-white hover:border-white transition-all"
            >
              <YoutubeIcon />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-un-border-ghost flex items-center justify-center hover:text-white hover:border-white transition-all"
            >
              <MusicIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-un-border pt-8 text-center text-sm">
        © {new Date().getFullYear()} UNKNWN DISCO. All rights reserved.
      </div>
    </footer>
  );
};

// --- 9. FLOATING BUTTONS ---
const FloatingButtons = () => {
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
};

// --- 10. MAIN PAGE LAYOUT ---
export default function Home() {
  return (
    <div id="top">
      <Header />
      <Hero />
      <WorkWith />
      <WhatWeDo />
      <Spotlight />
      <CallToAction />
      <Marquee />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

// --- 11. SVG ICONS ---
const MusicIcon = () => (
  <svg
    className="w-7 h-7 text-un-purple-light"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 18V5l12-2v13"
    ></path>
    <circle cx="6" cy="18" r="3"></circle>
    <circle cx="18" cy="16" r="3"></circle>
  </svg>
);
const PenIcon = () => (
  <svg
    className="w-7 h-7 text-un-purple-light"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
    ></path>
  </svg>
);
const PaintIcon = () => (
  <svg
    className="w-7 h-7 text-un-purple-light"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.37 2.63L14 7l-1.59-1.59a2.24 2.24 0 0 0-3.16 0L4 10.5V16h5.5l5.16-5.16a2.24 2.24 0 0 0 0-3.16L17 6l4-4M16 5l3 3"
    ></path>
  </svg>
);
const MasksIcon = () => (
  <svg
    className="w-7 h-7 text-un-purple-light"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 16.5c.5-1.5 1.7-3 3-3s2.5 1.5 3 3"
    ></path>
    <path d="M7 10a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 5 0z"></path>
    <path d="M17 10a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0z"></path>
    <path d="M14.5 18a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1"></path>
    <path d="M2.5 4.8c1.7 4.5 5.5 8.2 10 8.2s8.3-3.7 10-8.2"></path>
  </svg>
);
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
const TwitterIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);
const InstagramIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.227-1.669 4.771-4.919 4.919-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.227 1.669-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.62c-3.203 0-3.57.01-4.832.069-2.73.125-3.95 1.346-4.074 4.074-.06 1.262-.069 1.63-.069 4.832s.01 3.57.069 4.832c.125 2.73 1.346 3.95 4.074 4.074 1.262.06 1.63.069 4.832.069s3.57-.01 4.832-.069c2.73-.125 3.95-1.346 4.074-4.074.06-1.262.069-1.63.069-4.832s-.01-3.57-.069-4.832c-.125-2.73-1.346-3.95-4.074-4.074C15.57 3.793 15.2 3.783 12 3.783zM12 9.75a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zM12 16a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zm6.2-6.7a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
  </svg>
);
const YoutubeIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);
