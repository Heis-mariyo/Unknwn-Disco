import React from "react";
import { MusicIcon, PenIcon, PaintIcon, MasksIcon } from "./CreatorIcons";

// --- 2a. Filter Buttons (No changes) ---
const FilterControls = ({
  activeFilter,
  setActiveFilter,
}: {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}) => {
  const filters = [
    { label: 'ALL CREATORS', value: 'ALL', icon: null },
    { label: 'MUSIC', value: 'MUSIC', icon: <MusicIcon /> },
    { label: 'WRITING', value: 'WRITING', icon: <PenIcon /> },
    { label: 'VISUAL ART', value: 'VISUAL', icon: <PaintIcon /> },
    { label: 'PERFORMANCE', value: 'PERFORMANCE', icon: <MasksIcon /> },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-16">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.value;
        return (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`
              px-6 py-3 text-sm font-bold rounded-full transition-all duration-300
              flex items-center gap-2.5
              ${
                isActive
                  ? 'bg-transparent border-2 border-un-border-ghost text-un-text-gray hover:text-white hover:bg-gradient-to-r from-un-purple to-un-blue hover:scale-[1.03] hover:shadow-md hover:shadow-un-purple/20'
                  : 'bg-transparent border-2 border-un-border-ghost text-un-text-gray hover:text-white hover:bg-gradient-to-r from-un-purple to-un-blue hover:scale-[1.03] hover:shadow-md hover:shadow-un-purple/20'
              }
            `}
          >
            {filter.icon}
            {filter.label}
          </button>
        );
      })}
    </div>
  );
};

export default FilterControls;