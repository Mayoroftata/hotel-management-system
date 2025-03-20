"use client"
import Footer from '@/components/Footer'
import React from 'react'
import UserNav from '@/components/UserNav'
import Link from 'next/link'
import Recommendations from '@/components/Recommendations'

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
        <UserNav />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">

        {/* Image Carousel */}
        <div className="relative mb-8">
          <img
            src="/img/TopRoom1.jpg"
            alt="Penthouse Living Room"
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
          {/* Navigation Arrows */}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-75 text-purple-600 px-4 py-2 rounded-full z-10"
            aria-label="Previous Image"
          >
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-75 text-purple-600 px-4 py-2 rounded-full z-10"
            aria-label="Next Image"
          >
          </button>
        </div>

        {/* Reservation Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Reservation</h2>
          <p className="text-lg font-medium mb-2">Premium Penthouse</p>
          <p className="text-gray-600 mb-2">
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.334 2.835 2.835-6.5 6.5L5.165 16.932 2.327 13.668l7.334-3.668L12 .587z" />
              </svg>
              4.7 ⭐
            </span>
            (5,712 Reviews)
          </p>
          <p className="text-xl font-semibold mb-4">₦400,000 per night</p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300">
            CHECK AVAILABILITY
          </button>
        </div>

        {/* Room Details */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <table className="w-full text-left">
            <tbody>
              <tr>
                <td className="pr-4">Executive Floor</td>
                <td>Free Internet</td>
              </tr>
              <tr>
                <td className="pr-4">4 adults</td>
                <td>City view</td>
              </tr>
              <tr>
                <td className="pr-4">Private Kitchen</td>
                <td>2 private lounge</td>
              </tr>
              <tr>
                <td className="pr-4">Dining</td>
                <td>Flat Screen TV</td>
              </tr>
              <tr>
                <td className="pr-4">1 Queen sized bed</td>
                <td>1 King sized bed</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Room Description */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Room Description</h2>
          <p className="text-gray-600 mb-2">
           <span className='font-bold'> The Penthouse</span> is fantastic. Designed for Presidential and VIP delegates only, this suite has two lounges. A small private lounge for the VIP security staff, and a much larger one with dining table, and a kitchen all in one.

The Penthouse has two large rooms interconnected by the big lounge and also with an inter-connecting door. The Suite has a floor to ceiling bullet proof glass window that over looks the city. Guests to the Penthouse may access the roof anytime via a private rooftop door, that opens out from the back of the suite. the view is breath taking, and may be used for a romantic candle light dinner.

The Penthouse guest are provided with fresh towels, linen, daily housekeeping, a private butler (on request), and minibar. guests may also enjoy the LED TV located in each room of the Penthouse, while sitting on the brand new furnishing.
          </p>
          <div className="mt-4 flex space-x-4">
          <img
            src="/img/Penthouse1.jpg"
            alt="Penthouse Overview"
            className="w-full h-60 object-cover rounded-lg mt-4"
          />
          <img
            src="/img/Penthouse2.jpg"
            alt="Penthouse Overview"
            className="w-full h-60 object-cover rounded-lg mt-4"
          />
          </div>
        </div>
      </div>
      <Recommendations />
      <Footer />
    </div>

  )
}

export default page