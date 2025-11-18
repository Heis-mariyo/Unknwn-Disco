'use client' // This page uses Framer Motion, so it's a client component

import React from 'react'
import { motion } from 'framer-motion'
import ContactHero from '@/components/sections/contact/ContactHero'
import ContactForm from '@/components/sections/contact/ContactForm'
import ContactInfo from '@/components/sections/contact/ContactInfo'
import LetsConnect from '@/components/sections/contact/LetsConnect'


// --- MAIN PAGE COMPONENT ---
export default function ContactPage() {
  return (
    <div id="top">
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <LetsConnect />
      {/* The Header and Footer are added automatically by layout.tsx */}
    </div>
  )
};

