"use client"
import Link from 'next/link'
import Footer from '@/components/Footer'
import UserNav from '@/components/UserNav'
import React from 'react'

const page = () => {
  return (
    <div>
        <UserNav />
        {/* Header with Back Button */}
      <header className="bg-white p-4 shadow-md flex items-center justify-between">
        <Link href="/Client/deluxe" className="text-blue-600 font-bold">
          ← Back to Deluxe Rooms
        </Link>
        <h1 className="text-2xl font-bold text-gray-800">Deluxe Room 1 Details</h1>
        <div /> {/* Placeholder for any additional header actions */}
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <img
            src="/img/TopRoom5.jpg"
            alt="Room View"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <img
            src="/img/DeluxeRoom1Image5.png"
            alt="Outdoor Lounge"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <img
            src="/img/DeluxeRoom1Image2.png"
            alt="Bedroom"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <img
            src="/img/DeluxeRoom1Image3.png"
            alt="Living Area"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <img
            src="/img/DeluxeRoom1Image4.png"
            alt="Dining Area"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <img
            src="/img/DeluxeRoom1Image1.png"
            alt="Bar Area"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Hotel Information */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Lagos Marriott Hotel Ikeja
          </h2>
          <p className="text-gray-600 mb-2">
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.334 2.835 2.835-6.5 6.5L5.165 16.932 2.327 13.668l7.334-3.668L12 .587z" />
              </svg>
              4.7 ⭐
            </span>
            (5,712 Reviews)
          </p>
          <p className="text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A9 9 0 019.143 15L3 18l6.143-6.143A9 9 0 0118 9.828zm0 0L9 15l6.143-6.143A9 9 0 0118 9.828zm-6.143 6.143a9 9 0 01-12.728 0c6.733-6.84 9.749-17.345 9.498-27.25C20.941 6.731 14.473 1.928 6.143.141c-.84.197-1.787.44-2.728.793a18.084 18.084 0 01-3.47-.335c-2.761-1.225-6.39-1.734-9.498-.304a9 9 0 01-1.41 1.513c-1.289.772-2.431 1.721-3.32 2.79a6.325 6.325 0 01-.184 1.071c-.047.242-.076.487-.076.733 0 .827.034 1.63.102 2.423.086.954.244 1.87.475 2.739C.548 11.155 0 13.04 0 15.035a9 9 0 012.143 3.857m7.936-3.141a9 9 0 002.142 3.857m0-3.857a9 9 0 01-2.143-3.857m0 3.857a9 9 0 012.143 3.857" />
            </svg>
            122 Joel Ogumnaike St, Ikeja GRA, Lagos 100273
          </p>
          <div className="flex justify-between mt-4">
            <p className="text-gray-600">Check in & Check out</p>
            <p className="text-gray-600">12:00 - 12:00</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            BOOK NOW
          </button>
        </div>

        {/* About Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">About</h2>
          <p className="text-gray-600 mb-2">
            Flanked by palm trees, this upscale hotel is 1 km from Ikeja Golf Club and 7 km from Murtala Muhammed International Airport. The chic rooms provide Wi-Fi, smart TVs, and safes, plus sofas and minibars. Some feature city views. Suites add access to a private lounge; the 1- and 2-bedroom upgraded suites have living rooms, and/or balconies with sun loungers. Room service is available 24/7.
          </p>
          <p className="text-gray-600 mb-2">
            There's a lobby bar, an informal grill, and a buffet restaurant featuring a terrace. Other amenities consist of an outdoor pool, a sundock and a fitness room, as well as breakfast, event space, and parking.
          </p>
          <p className="text-gray-600">
            Check-in time: 15:00
          </p>
        </div>

        {/* Amenities Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
  <h2 className="text-xl font-semibold text-gray-800 mb-4">Amenities</h2>

  {/* Room Amenities */}
  <div className="mb-6">
    <h3 className="text-lg font-medium text-gray-700 mb-2">Room</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
        24 hour butler service
      </button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
        Air conditioning, with temperature control units fitted in the room
      </button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
        Blackout roller blinds
      </button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
        12" pillow top mattress
      </button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
        Hypoallergenic goose down pillows and duvets
      </button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
        Pillow menu features a range to suit every sensitivity, body shape and personal preference
      </button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
        Fire rated and sound insulated single leaf room doors with door camera for security and comfort
      </button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
        Triple glazed thermal insulated windows
      </button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
        24 hour in room dining
      </button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
        Fully stocked personal bar
      </button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
        Selection of daily newspapers
      </button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
        Next day laundry service
      </button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
        Nespresso coffee machine
      </button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
        Tea and Coffee making facilities
      </button>
    </div>
  </div>

  {/* Technology Amenities */}
  <div className="mb-6">
    <h3 className="text-lg font-medium text-gray-700 mb-2">Technology</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
        Electronic safe for valuables
      </button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
        Complimentary high speed Internet for up to four devices
      </button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
        Dual telephone lines
      </button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
        49" FHD television
      </button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
        Wide range of national and international news, sports and film channels
      </button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
        Integrated lighting system
      </button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
        Bluetooth enabled speaker system
      </button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
        DeeLuck Enhance iPad interface to control room lights, blinds, air-conditioning, television channels, movies on demand, in room dining and much more
      </button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
        Radio alarm clock with iPod connectivity
      </button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
        Air-conditioning
      </button>
    </div>
  </div>

  {/* Bathroom Amenities */}
  <div>
    <h3 className="text-lg font-medium text-gray-700 mb-2">Bathroom</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
        High pressure shower with multiple settings
      </button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
        Full length enamel bathtub
      </button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
        Separate shower & toilet cubicle
      </button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
        Toiletries exclusive to DeeLuck
      </button>
      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
        Self lit magnifying shaving mirrors
      </button>
    </div>
  </div>
</div>
      </div>
        <Footer />
    </div>
  )
}

export default page