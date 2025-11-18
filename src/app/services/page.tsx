'use client' // This page uses Framer Motion, so it's a client component
import React from 'react'
import ServicesHero from '@/components/sections/services/ServicesHero'
import ServicesList from '@/components/sections/services/ServicesList'
import HowWeWork from '@/components/sections/services/HowWeWork'
import CallToAction from '@/components/sections/hero/CallToAction'

// --- MAIN PAGE COMPONENT ---
export default function ServicesPage() {
  return (
    <div id="top">
      <ServicesHero />
      <ServicesList />
      <HowWeWork />
      <CallToAction />
    </div>
  )
};
