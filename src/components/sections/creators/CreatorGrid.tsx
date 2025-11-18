import React from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Creator } from "./AllCreators";
import allCreators from "./AllCreators";

// <-- 7. UPDATE PROPS to accept the click handler
const CreatorGrid = ({
  activeFilter,
  onCreatorClick,
}: {
  activeFilter: string;
  onCreatorClick: (creator: Creator) => void;
}) => {
  // <-- 8. REMOVE `allCreators` from here (it's at the top now)

  const filteredCreators = allCreators.filter(
    (creator) => activeFilter === 'ALL' || creator.category === activeFilter
  );

  const cardVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <motion.div
      layout
      className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto"
    >
      <AnimatePresence>
        {filteredCreators.map((talent) => (
          <motion.div
            key={talent.id} // <-- 9. USE THE NEW `id` for the key
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            layout
            // <-- 10. ADD ONCLICK & CURSOR-POINTER
            onClick={() => onCreatorClick(talent)}
            className="group relative min-h-[450px] rounded-2xl overflow-hidden bg-cover bg-center transition-transform duration-400 ease-in-out hover:scale-[1.02] cursor-pointer"
            style={{ backgroundImage: `url('${talent.img}')` }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/90"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-8 z-10 w-full">
              <h3 className="text-3xl font-bold mb-1 text-white">
                {talent.name}
              </h3>
              <p className="text-base font-bold text-un-teal uppercase tracking-wider mb-2">
                {talent.role}
              </p>

              {/* THE HOVER CONTENT (Description + Link) */}
              <div className="overflow-hidden h-20">
                <div className="transform translate-y-24 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {/* 1. The Description */}
                  <p className="text-un-text-gray-light text-sm mb-4 max-w-xs">
                    {talent.desc}
                  </p>

                  {/* 2. The Link - We'll make this not do anything
                     since the whole card is now the button */}
                  <div className="inline-block text-sm font-bold text-un-purple select-none">
                    VIEW PROFILE →
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default CreatorGrid;