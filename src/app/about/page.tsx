import React from "react";
import Link from "next/link"; // <-- This is what links the pages!


// --- 2. HERO SECTION (Text Only) ---
const AboutHero = () => {
  return (
    <section className="pt-32 pb-20 px-[6%] text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight opacity-0 animate-fadeInUp">
        <span className="text-white">OUR MISSION</span>
        <br />
        <span className="bg-gradient-to-r from-un-purple to-un-purple-light bg-clip-text text-transparent">
          TO
        </span>
        <br />
        <span className="bg-gradient-to-r from-un-purple to-un-blue bg-clip-text text-transparent animate-gradientDrift animate-neonShimmer">
          TURN THE
        </span>
        <br />
        <span className="bg-gradient-to-r from-un-blue to-un-teal bg-clip-text text-transparent animate-gradientDrift animate-neonShimmer">
          UNKNOWN INTO
        </span>
        <br />
        <span className="bg-gradient-to-r from-un-teal to-white bg-clip-text text-transparent">
          ICONS
        </span>
      </h1>
    </section>
  );
};

// --- 3. OUR STORY SECTION ---
const OurStory = () => {
  return (
    <section className="py-20 px-[6%]">
      <h2
        className="text-4xl font-bold mb-10 tracking-wide text-white opacity-0 animate-fadeInUp"
        style={{ animationDelay: "0.1s" }}
      >
        OUR STORY
      </h2>

      <div
        className="max-w-4xl space-y-6 text-un-text-gray-light text-lg leading-relaxed opacity-0 animate-fadeInUp"
        style={{ animationDelay: "0.2s" }}
      >
        <p>
          UNKNWN DISCO was born from a simple truth: the world's most powerful
          creators often remain invisible. Not because they lack talent, but
          because they lack the infrastructure to be seen.
        </p>
        <p>
          We exist at the intersection of art, culture, and strategic
          visibility. Our mission is to give voice to the voiceless, light to
          the unknown, and a platform to those who dare to create authentically.
        </p>
        <p>
          From underground musicians to emerging visual artists, from poets to
          performers...we transform creative passion into cultural impact.
        </p>
      </div>

      {/* The Gradient Block Visual */}
      <div
        className="mt-16 w-full h-64 rounded-3xl bg-gradient-to-br from-un-purple via-[#1a103c] to-un-teal opacity-0 animate-fadeInUp"
        style={{ animationDelay: "0.3s" }}
      ></div>
    </section>
  );
};

// --- 4. OUR MISSION (List) ---
const OurMission = () => {
  return (
    <section className="py-20 px-[6%]">
      <h2 className="text-4xl font-bold mb-10 tracking-wide text-white opacity-0 animate-fadeInUp">
        OUR MISSION
      </h2>

      <div
        className="max-w-4xl text-un-text-gray-light text-lg leading-relaxed space-y-8 opacity-0 animate-fadeInUp"
        style={{ animationDelay: "0.1s" }}
      >
        <p>
          We believe every creator deserves an audience. Every artist deserves
          recognition. Every voice deserves to be heard.
        </p>

        <p>Our mission is threefold:</p>

        <ul className="list-disc pl-6 space-y-3 text-white font-medium">
          <li>Build powerful, authentic brand identities for creators</li>
          <li>Create strategic pathways to global exposure</li>
          <li>Foster a community where creativity and visibility collide</li>
        </ul>

        <p className="pt-4">
          We don't just market talent. We amplify movements. We shape culture.
          We turn the unknown into the unforgettable.
        </p>
      </div>
    </section>
  );
};

// --- 5. "THE NAME" SECTION (Gradient Border Card) ---
const TheName = () => {
  return (
    <section className="py-20 px-[6%]">
      {/* Gradient Border Wrapper */}
      <div
        className="p-[2px] rounded-3xl bg-gradient-to-r from-un-purple via-un-blue to-un-teal opacity-0 hover:border-un-purple hover:shadow-xl hover:shadow-un-purple/10 opacity-0 animate-fadeInUp"
        style={{ animationDelay: "0.2s" }}
      >
        {/* Inner Dark Card */}
        <div className="bg-un-bg-card rounded-[22px] p-12 md:p-20 text-center">
          <h2 className="text-4xl font-bold mb-12 tracking-widest">
            <span className="text-un-purple">THE</span>{" "}
            <span className="text-un-teal">NAME</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-10 text-lg md:text-xl text-white leading-relaxed">
            <p>
              <strong className="text-white">UNKNWN</strong> represents the
              undiscovered talent, the emerging voices, the creators who exist
              in the shadows waiting to be seen.
            </p>
            <p>
              <strong className="text-white">DISCO</strong> captures the
              electric energy of creative expression — the lights, the movement,
              the culture, the celebration of artistry in its purest form.
            </p>
            <p>
              Together, <strong className="text-white">UNKNWN DISCO</strong> is
              the space where the unseen becomes luminous. Where underground
              meets mainstream. Where mystery meets celebration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

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


// --- MAIN PAGE COMPONENT ---
export default function AboutPage() {
  return (
    <div id="top" className="bg-un-bg min-h-screen">
      {/* The layout.tsx file adds the Header, Footer, 
          and Buttons for us now! */}
      <AboutHero />
      <OurStory />
      <OurMission />
      <TheName />
      <OurValues />
    </div>
  )
}
