'use client' // This page needs to be a Client Component for Framer Motion

import React from 'react'
import { motion } from 'framer-motion'
import JoinHero from '@/components/sections/join/JoinHero'
import JoinForm from '@/components/sections/join/JoinForm'
import WhyJoin from '@/components/sections/join/WhyJoin'

// --- MAIN PAGE COMPONENT ---
export default function JoinPage() {
  return (
    <div id="top">
      <JoinHero />
      <JoinForm />
      <WhyJoin />
      {/* The Header and Footer are added automatically by layout.tsx */}
    </div>
  )
};