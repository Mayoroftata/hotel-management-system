"use client";
import React from 'react'
import LandingNavBar from '@/components/LandingNavBar';
import HeroSection from '@/components/HeroSection';
import WhyBookWithUs from '@/components/WhyBookWithUs';
import TopRoom from '@/components/TopRoom';
import Footer from '@/components/Footer';
import DiscoverExplore from '@/components/DiscoverExplore';


const page = () => {
  return (
    <div>
      <LandingNavBar />
      <HeroSection />
      <WhyBookWithUs />
      <TopRoom />
      <DiscoverExplore />
      <Footer />
    </div>
  )
}

export default page
