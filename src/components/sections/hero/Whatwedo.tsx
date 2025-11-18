import React from "react";

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

export default WhatWeDo;