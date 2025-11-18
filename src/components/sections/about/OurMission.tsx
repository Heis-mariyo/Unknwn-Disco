import React  from "react";


 // --- 4. OUR MISSION  ---
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

export default OurMission;