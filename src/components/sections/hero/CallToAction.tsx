import React from "react";

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
            className="px-7 py-3.5 text-sm font-bold rounded-full bg-transparent border-2 transition-all duration-300 text-un-purple border-un-purple hover:text-white hover:bg-gradient-to-r from-un-purple to-un-blue hover:scale-[1.03] hover:shadow-xl hover:shadow-un-purple/20"
          >
            SUBMIT YOUR WORK
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;