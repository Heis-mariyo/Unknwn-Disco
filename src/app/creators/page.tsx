// src/app/creators/page.tsx
'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image'; // <-- 1. ADD THIS IMPORT
import CreatorModal from './components/CreatorModal'; // <-- 2. ADD THIS IMPORT

// --- 3. DEFINE YOUR TYPE & DATA HERE ---
// By exporting this type, our CreatorModal.tsx can import it
export type Creator = {
  id: string;
  name: string;
  role: string;
  img: string;
  category: string;
  desc: string;
  bio: string; // The new field for the modal
};

// Your updated data array with 'id' and 'bio'
const allCreators: Creator[] = [
  {
    id: 'alex-rivers',
    name: 'ALEX RIVERS',
    role: 'MUSIC PRODUCER',
    img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=60',
    category: 'MUSIC',
    desc: 'Producing chart-topping hits from the underground.',
    bio: 'Alex Rivers is a genre-bending music producer known for blending lo-fi beats with orchestral soundscapes. With over 10 million streams, Alex is a defining voice for the unseen generation of artists.',
  },
  {
    id: 'maya-chen',
    name: 'MAYA CHEN',
    role: 'VISUAL ARTIST',
    img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&auto=format&fit=crop&q=60',
    category: 'VISUAL',
    desc: 'Contemporary abstract painter exploring color theory.',
    bio: "Maya Chen's work explores the intersection of digital and physical realities. Her abstract paintings have been featured in galleries from Tokyo to New York, captivating audiences with their vibrant energy.",
  },
  {
    id: 'jordan-blake',
    name: 'JORDAN BLAKE',
    role: 'POET & WRITER',
    img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop&q=60',
    category: 'WRITING',
    desc: 'Weaving words that capture the soul of the city.',
    bio: "Jordan Blake's poetry speaks to the soul. Their latest collection, \"Echoes in the Static,\" sold over 50,000 copies, connecting with readers on a deeply personal level.",
  },
  {
    id: 'sam-torres',
    name: 'SAM TORRES',
    role: 'PERFORMANCE ARTIST',
    img: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=600&auto=format&fit=crop&q=60',
    category: 'PERFORMANCE',
    desc: 'Stage innovator blending dance and technology.',
    bio: 'Sam Torres transforms spaces with their immersive performance art. Each piece is a unique, unrepeatable experience that challenges perceptions and invites audience participation.',
  },
  {
    id: 'kai-anderson',
    name: 'KAI ANDERSON',
    role: 'DJ & PRODUCER',
    img: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&auto=format&fit=crop&q=60',
    category: 'MUSIC',
    desc: 'Live sets that define the rhythm of the night.',
    bio: "From underground clubs to massive festivals, Kai's infectious energy and seamless mixes create an unforgettable atmosphere. A true master of the craft.",
  },
  {
    id: 'zara-malik',
    name: 'ZARA MALIK',
    role: 'MIXED MEDIA ARTIST',
    img: '/zara-malik.jpg',
    category: 'VISUAL',
    desc: 'Using discarded materials to create stunning visuals.',
    bio: 'Zara Malik challenges consumerism by transforming discarded materials into breathtaking sculptures. Her work is a powerful statement on sustainability and beauty.',
  },
  {
    id: 'river-stone',
    name: 'RIVER STONE',
    role: 'NOVELIST',
    img: '/river-stone.png',
    category: 'WRITING',
    desc: 'Crafting narratives that transcend reality.',
    bio: 'River Stone is the bestselling author of the "Cinder" trilogy. Their world-building and complex characters have earned them a dedicated global following.',
  },
  {
    id: 'phoenix-ray',
    name: 'PHOENIX RAY',
    role: 'DANCER & CHOREOGRAPHER',
    img: '/phoenix-ray.png',
    category: 'PERFORMANCE',
    desc: 'Movement that speaks louder than words.',
    bio: "Phoenix Ray's choreography has been featured in music videos and stage productions worldwide. Their unique style combines classical forms with modern street dance.",
  },
];

// --- 1. HERO SECTION (No changes) ---
const CreatorsHero = () => {
  return (
    <motion.section
      className="py-20 px-5 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-5xl md:text-7xl font-extrabold -tracking-wide">
        <span className="text-white">OUR</span>{' '}
        <span className="bg-gradient-to-r from-un-purple to-un-teal bg-clip-text text-transparent gradient-drift animate-gradientDrift animate-neonShimmer">
          CREATORS
        </span>
      </h1>
      <p className="text-lg text-un-text-gray-light max-w-2xl mx-auto mt-6">
        Meet the talented artists, musicians, writers, and performers we're proud
        to support.
      </p>
    </motion.section>
  );
};

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
                  ? 'bg-transparent border-2 border-un-border-ghost text-un-text-gray hover:text-un-purple-light hover:bg-gradient-to-r from-un-purple to-un-blue hover:scale-[1.03] hover:shadow-md hover:shadow-un-purple/20'
                  : 'bg-transparent border-2 border-un-border-ghost text-un-text-gray hover:text-un-purple-light hover:bg-gradient-to-r from-un-purple to-un-blue hover:scale-[1.03] hover:shadow-md hover:shadow-un-purple/20'
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

// --- 2b. The Grid Component ---
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

// --- MAIN PAGE COMPONENT (No changes) ---
export default function CreatorsPage() {
  return (
    <div id="top">
      <CreatorsHero />
      <FilterableCreatorGrid />
      {/* The Header and Footer are added automatically by layout.tsx */}
    </div>
  );
}

// --- ICON COMPONENTS (No changes) ---
const MusicIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M9 18V5l12-2v13"
    ></path>
    <circle cx="6" cy="18" r="3"></circle>
    <circle cx="18" cy="16" r="3"></circle>
  </svg>
);
const PenIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
    ></path>
  </svg>
);
const PaintIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M18.37 2.63L14 7l-1.59-1.59a2.24 2.24 0 0 0-3.16 0L4 10.5V16h5.5l5.16-5.16a2.24 2.24 0 0 0 0-3.16L17 6l4-4M16 5l3 3"
    ></path>
  </svg>
);
const MasksIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M10 16.5c.5-1.5 1.7-3 3-3s2.5 1.5 3 3"
    ></path>
    <path d="M7 10a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 5 0z"></path>
    <path d="M17 10a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0z"></path>
    <path d="M14.5 18a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1"></path>
    <path d="M2.5 4.8c1.7 4.5 5.5 8.2 10 8.2s8.3-3.7 10-8.2"></path>
  </svg>
);