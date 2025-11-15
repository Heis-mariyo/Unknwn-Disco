// src/app/creators/components/CreatorModal.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
// We will export the 'Creator' type from your page.tsx file
import { Creator } from '../page';

interface CreatorModalProps {
  creator: Creator;
  onClose: () => void;
}

// Animation variants for the modal
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { delay: 0.1 } },
  exit: { opacity: 0, scale: 0.9 },
};

export default function CreatorModal({ creator, onClose }: CreatorModalProps) {
  return (
    // The full-screen backdrop
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose} // Click backdrop to close
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {/* The modal panel */}
      <motion.div
        className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-[#111] shadow-xl border border-un-border-ghost"
        onClick={(e) => e.stopPropagation()} // Click modal to NOT close
        variants={modalVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* --- LEFT SIDE: IMAGE --- */}
          <div className="relative h-64 w-full md:h-[500px]">
            <Image
              src={creator.img}
              alt={creator.name}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* --- RIGHT SIDE: CONTENT --- */}
          <div className="flex flex-col p-8">
            <h2 className="mb-2 text-3xl font-bold uppercase text-white">
              {creator.name}
            </h2>
            <p className="mb-6 font-semibold uppercase text-un-teal tracking-wider">
              {creator.role}
            </p>
            <p className="flex-grow text-un-text-gray-light leading-relaxed">
              {creator.bio}
            </p>

            {/* Your "Close" button, styled to match your site */}
            <button
              onClick={onClose}
              className="mt-8 self-start rounded-full px-6 py-3 bg-transparent border-2 border-un-border-ghost text-un-text-gray hover:text-un-purple-light hover:bg-gradient-to-r from-un-purple to-un-blue hover:scale-[1.03] hover:shadow-md hover:shadow-un-purple/20"
            >
              CLOSE
            </button>
          </div>
        </div>

        {/* 'X' close button in the corner */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-500 transition-colors hover:text-white"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
}