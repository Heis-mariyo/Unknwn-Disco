import React from "react";

// --- 6. OUR VALUES SECTION ---
const OurValues = () => {
  const values = [
    {
      title: "AUTHENTICITY",
      desc: "We celebrate raw, genuine creativity. No filters. No pretense. Just real art from real people.",
    },
    {
      title: "VISIBILITY",
      desc: "Talent without exposure is potential unrealized. We build bridges between creators and the world.",
    },
    {
      title: "COMMUNITY",
      desc: "We foster connections between creators, collaborators, and audiences who share a passion for authentic expression.",
    },
  ];

  return (
    <section className="py-24 px-[6%] text-center">
      <h2 className="text-5xl font-bold mb-20 opacity-0 animate-fadeInUp">
        <span className="text-white">OUR</span>{" "}
        <span className="bg-gradient-to-r from-un-purple to-un-blue bg-clip-text text-transparent">
          VALUES
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <div
            key={value.title}
            className="group bg-un-bg-card border border-un-border p-10 rounded-2xl text-left transition-all duration-300 hover:-translate-y-2 hover:border-un-purple hover:shadow-xl hover:shadow-un-purple/10 opacity-0 animate-fadeInUp"
            style={{ animationDelay: `${(index + 1) * 0.1}s` }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 tracking-wide group-hover:text-un-teal transition-colors">
              {value.title}
            </h3>
            <p className="text-un-text-gray leading-relaxed">{value.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;