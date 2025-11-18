import React from "react";

// --- 5. "THE NAME" SECTION (Gradient Border Card) ---
const TheName = () => {
  return (
    <section className="py-20 px-[6%]">
      {/* Gradient Border Wrapper */}
      <div
        className="p-[2px] rounded-3xl bg-gradient-to-r from-un-purple via-un-blue to-un-teal hover:border-un-purple hover:shadow-xl hover:shadow-un-purple/10 opacity-0 animate-fadeInUp"
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

export default TheName;