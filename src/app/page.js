"use client";
import React from 'react'
import HeroSection from '@/components/HeroSection';
import WhyBookWithUs from '@/components/WhyBookWithUs';
import TopRoom from '@/components/TopRoom';
import Footer from '@/components/Footer';
import DiscoverExplore from '@/components/DiscoverExplore';
import NavBar from '@/components/NavBar';


const page = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <WhyBookWithUs />
      <TopRoom />
      <DiscoverExplore />
      <Footer />
    </div>
  )
}

export default page
