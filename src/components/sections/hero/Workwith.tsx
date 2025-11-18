import React from "react";
import Link from "next/link";
import { MusicIcon, PenIcon, PaintIcon, MasksIcon } from "./Icons";

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
            className="bg-un-bg-card p-8 rounded-2xl border border-un-border text-left transition-all duration-300 hover:-translate-y-1 hover:border-un-purple hover:shadow-2xl hover:shadow-un-purple/10  hover:text-un-purple-light hover:scale-[1.03] hover:animate-blink opacity-0 animate-fadeInUp"
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

export default WorkWith;