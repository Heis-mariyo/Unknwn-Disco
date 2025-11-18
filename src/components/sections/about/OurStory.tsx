import React from "react";

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

export default OurStory;