// components/HeroSection.js
import React from 'react';
import './HeroSection.css';
export default function HeroSection() {

  return (
    <section id='sectionHero' className="flex bg-center bg-cover h-screen justify-center text-white items-center relative">
      {/* Background Image */}
      <div className="bg-gradient-to-b absolute from-black inset-0 opacity-75 to-black via-transparent"></div>
      {/* <img
        src="../img/hotelimage2.jpg"
        alt="Hotel Corridor"
        className="h-full w-full absolute inset-0 object-cover"
      /> */}

      {/* Content Overlay */}
      <div className="lg:px-8 px-4 relative sm:px-6 z-10">
        <div className="text-center">
        <h1 className="text-6xl text-center text-white font-extrabold mb-6">
            Welcome to <span className="text-blue-600">DeeLuck</span>
          </h1>
          <p className="text-3xl text-center text-white font-semibold mb-6">
            Your Ultimate Home Away From Home
          </p>
          <p className="text-center text-lg text-white leading-relaxed max-w-3xl mb-8 mx-auto">
            Discover a world of comfort and convenience with a diverse selection of accommodations  
            tailored to every budget and preference. Whether you seek the elegance of a luxurious hotel,  
            the charm of a cozy bed and breakfast, or the affordability of a budget-friendly hostel,  
            <span className="text-white font-semibold"> DeeLuck</span> ensures a perfect stay for you.
          </p>

        </div>
      </div>
    </section>
  );
}