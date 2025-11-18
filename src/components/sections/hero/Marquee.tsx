import React from "react";

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

export default Marquee;