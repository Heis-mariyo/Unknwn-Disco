import React from "react";
import Link from "next/link";


// --- 2. HERO SECTION COMPONENT ---
const Hero = () => {
  return (
    <main className="flex flex-col items-center justify-center text-center py-20 px-5">
      <h1 className="text-7xl font-extrabold leading-tight -tracking-wider mb-6">
        <span className="block bg-gradient-to-r from-un-purple to-un-blue bg-clip-text text-transparent gradient-drift animate-gradientDrift">
          WE BUILD
        </span>
        <span className="block bg-gradient-to-r from-un-blue to-un-teal bg-clip-text text-transparent animate-gradientDrift animate-neonShimmer">
          VISIBILITY
        </span>
        <span className="block text-white">FOR THE UNSEEN.</span>
      </h1>
      <p className="text-lg text-un-text-gray-light max-w-lg leading-relaxed mb-10">
        UNKNWN DISCO helps creators amplify their brands, gain exposure, and
        build global presence.
      </p>
      <div className="flex gap-5 mb-8">
        <Link
          href="./join"
          className="px-7 py-3.5 text-sm font-bold rounded-full shadow-md bg-transparent border-2 transition-all duration-300 text-un-purple border-un-purple hover:text-un-purple-light hover:bg-gradient-to-r from-un-purple to-un-blue hover:scale-[1.03] hover:shadow-xl hover:shadow-un-purple/10"
        >
          WORK WITH US
        </Link>
        <Link
          href="./creators"
          className="px-7 py-3.5 text-sm font-bold rounded-full shadow-md bg-transparent border-2 transition-all duration-300 text-un-purple border-un-purple hover:text-un-purple-light hover:bg-gradient-to-r from-un-purple to-un-blue hover:scale-[1.03] hover:shadow-xl hover:shadow-un-purple/10"
        >
          DISCOVER CREATORS
        </Link>
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
            className="bg-un-bg-card p-8 rounded-2xl border border-un-border text-left transition-all duration-300 hover:-translate-y-1 hover:border-un-purple hover:shadow-2xl hover:shadow-un-purple/10  hover:text-un-purple-light hover:scale-[1.03] opacity-0 animate-fadeInUp"
            style={{ animationDelay: `${(index + 1) * 0.1}s` }}
          >
            <div className="w-16 h-16 rounded-full bg-un-purple-bg border border-un-purple-border flex items-center justify-center mb-6 hover:animate-blink">
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
            className="p-1 rounded-2xl bg-gradient-to-r from-un-blue to-un-purple transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-un-purple/15 opacity-0 animate-fadeInUp hover:animate-fadeInUp"
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


// --- 10. MAIN PAGE LAYOUT ---
export default function Home() {
  return (
    <div id="top">
      <Hero />
      <WorkWith />
      <WhatWeDo />
      <Spotlight />
      <CallToAction />
      <Marquee />
    </div>
  )
}


// --- 11. SVG ICONS ---
// (Paste these at the bottom of src/app/page.tsx)

const MusicIcon = () => (
  <svg className="w-7 h-7 text-un-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18"cy="16" r="3"></circle></svg>
)
const PenIcon = () => (
  <svg className="w-7 h-7 text-un-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
)
const PaintIcon = () => (
  <svg className="w-7 h-7 text-un-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.37 2.63L14 7l-1.59-1.59a2.24 2.24 0 0 0-3.16 0L4 10.5V16h5.5l5.16-5.16a2.24 2.24 0 0 0 0-3.16L17 6l4-4M16 5l3 3"></path></svg>
)
const MasksIcon = () => (
  <svg className="w-7 h-7 text-un-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 16.5c.5-1.5 1.7-3 3-3s2.5 1.5 3 3"></path><path d="M7 10a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 5 0z"></path><path d="M17 10a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0z"></path><path d="M14.5 18a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1"></path><path d="M2.5 4.8c1.7 4.5 5.5 8.2 10 8.2s8.3-3.7 10-8.2"></path></svg>
)
