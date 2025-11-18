import React from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import CreatorModal from "./CreatorModal";
import { Creator } from "./AllCreators";
import FilterControls from "./FilterControls";
import CreatorGrid from "./CreatorGrid";

// --- 2. FILTERABLE CREATOR GRID ---
const FilterableCreatorGrid = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  // <-- 4. ADD MODAL STATE HERE
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null);

  return (
    <section className="px-[6%] pb-24">
      {/* 2a. Filter Buttons */}
      <FilterControls
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      {/* 2b. The Grid */}
      <CreatorGrid
        activeFilter={activeFilter}
        onCreatorClick={setSelectedCreator} // <-- 5. PASS THE SETTER FUNCTION DOWN
      />

      {/* 6. ADD THE MODAL RENDER LOGIC HERE */}
      <AnimatePresence>
        {selectedCreator && (
          <CreatorModal
            creator={selectedCreator}
            onClose={() => setSelectedCreator(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default FilterableCreatorGrid;