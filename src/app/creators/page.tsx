// src/app/creators/page.tsx
'use client';
import React, { useState } from 'react';
import Image from 'next/image'; // <-- 1. ADD THIS IMPORT
import CreatorModal from '@/components/sections/creators/CreatorModal'; // <-- 2. ADD THIS IMPORT
import CreatorsHero from '@/components/sections/creators/CreatorsHero';
import FilterableCreatorGrid from '@/components/sections/creators/FilterCreatorGrid';

// --- MAIN PAGE COMPONENT (No changes) ---
export default function CreatorsPage() {
  return (
    <div id="top">
      <CreatorsHero />
      <FilterableCreatorGrid />
      {/* The Header and Footer are added automatically by layout.tsx */}
    </div>
  );
};

