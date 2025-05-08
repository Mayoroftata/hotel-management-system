"use client";
import Link from "next/link";
import Footer from "@/components/Footer";
import React from "react";
import NavBar from "@/components/NavBar";
import Image from "next/image"; // Import Image component

const Page = () => {
  return (
    <div>
      <NavBar />

      {/* Header with Back Button */}
      <header className="flex bg-white justify-between p-4 shadow-md items-center">
        <Link href="/deluxe" className="text-blue-600 font-bold">
          ← Back to Deluxe Rooms
        </Link>
        <h1 className="text-2xl text-gray-800 font-bold">
          Deluxe Room 1 Details
        </h1>
        <div /> {/* Placeholder for any additional header actions */}
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Image Gallery */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 mb-8 md:grid-cols-2">
          <Image
            src="/img/TopRoom5.jpg"
            alt="Room View"
            width={800}
            height={600}
            className="h-64 rounded-lg shadow-md w-full object-cover"
          />
          <Image
            src="/img/DeluxeRoom1Image5.png"
            alt="Outdoor Lounge"
            width={800}
            height={600}
            className="h-64 rounded-lg shadow-md w-full object-cover"
          />
          <Image
            src="/img/DeluxeRoom1Image2.png"
            alt="Bedroom"
            width={800}
            height={600}
            className="h-64 rounded-lg shadow-md w-full object-cover"
          />
          <Image
            src="/img/DeluxeRoom1Image3.png"
            alt="Living Area"
            width={800}
            height={600}
            className="h-64 rounded-lg shadow-md w-full object-cover"
          />
          <Image
            src="/img/DeluxeRoom1Image4.png"
            alt="Dining Area"
            width={800}
            height={600}
            className="h-64 rounded-lg shadow-md w-full object-cover"
          />
          <Image
            src="/img/DeluxeRoom1Image1.png"
            alt="Bar Area"
            width={800}
            height={600}
            className="h-64 rounded-lg shadow-md w-full object-cover"
          />
        </div>

        {/* Hotel Information */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-gray-800 text-xl font-semibold mb-2">
            Lagos Marriott Hotel Ikeja
          </h2>
          <p className="text-gray-600 mb-2">
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline-block mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.334 2.835 2.835-6.5 6.5L5.165 16.932 2.327 13.668l7.334-3.668L12 .587z" />
              </svg>
              4.7 ⭐
            </span>
            (5,712 Reviews)
          </p>
          <p className="text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 inline-block mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 18.657A9 9 0 019.143 15L3 18l6.143-6.143A9 9 0 0118 9.828zm0 0L9 15l6.143-6.143A9 9 0 0118 9.828zm-6.143 6.143a9 9 0 01-12.728 0c6.733-6.84 9.749-17.345 9.498-27.25C20.941 6.731 14.473 1.928 6.143.141c-.84.197-1.787.44-2.728.793a18.084 18.084 0 01-3.47-.335c-2.761-1.225-6.39-1.734-9.498-.304a9 9 0 01-1.41 1.513c-1.289.772-2.431 1.721-3.32 2.79a6.325 6.325 0 01-.184 1.071c-.047.242-.076.487-.076.733 0 .827.034 1.63.102 2.423.086.954.244 1.87.475 2.739C.548 11.155 0 13.04 0 15.035a9 9 0 012.143 3.857m7.936-3.141a9 9 0 002.142 3.857m0-3.857a9 9 0 01-2.143-3.857m0 3.857a9 9 0 012.143 3.857"
              />
            </svg>
            122 Joel Ogumnaike St, Ikeja GRA, Lagos 100273
          </p>
          <div className="flex justify-between mt-4">
            <p className="text-gray-600">Check in & Check out</p>
            <p className="text-gray-600">12:00 - 12:00</p>
          </div>
          <button className="bg-blue-600 rounded-md text-white duration-300 hover:bg-blue-700 px-4 py-2 transition">
            <Link href="/booking">Book Now</Link>
          </button>
        </div>

        {/* About Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-gray-800 text-xl font-semibold mb-4">About</h2>
          <p className="text-gray-600 mb-2">
            Flanked by palm trees, this upscale hotel is 1 km from Ikeja Golf
            Club and 7 km from Murtala Muhammed International Airport. The chic
            rooms provide Wi-Fi, smart TVs, and safes, plus sofas and minibars.
          </p>
          <p className="text-gray-600 mb-2">
            There&apos;s a lobby bar, an informal grill, and a buffet restaurant
            featuring a terrace. Other amenities consist of an outdoor pool, a
            sundock and a fitness room, as well as breakfast, event space, and
            parking.
          </p>
          <p className="text-gray-600">Check-in time: 15:00</p>
        </div>

        {/* Amenities Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-gray-800 text-xl font-semibold mb-4">
            Amenities
          </h2>

          {/* Room Amenities */}
          <div className="mb-6">
            <h3 className="text-gray-700 text-lg font-medium mb-2">Room</h3>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
              <button className="bg-gray-200 rounded-md text-gray-800 duration-300 hover:bg-gray-300 px-4 py-2 transition">
                24 hour butler service
              </button>
              <button className="bg-gray-200 rounded-md text-gray-800 duration-300 hover:bg-gray-300 px-4 py-2 transition">
                Air conditioning, with temperature control units fitted in the
                room
              </button>
              <button className="bg-gray-200 rounded-md text-gray-800 duration-300 hover:bg-gray-300 px-4 py-2 transition">
                Blackout roller blinds
              </button>
              <button className="bg-gray-200 rounded-md text-gray-800 duration-300 hover:bg-gray-300 px-4 py-2 transition">
                12&quot; pillow top mattress
              </button>
              <button className="bg-gray-200 rounded-md text-gray-800 duration-300 hover:bg-gray-300 px-4 py-2 transition">
                Hypoallergenic goose down pillows and duvets
              </button>
              <button className="bg-gray-200 rounded-md text-gray-800 duration-300 hover:bg-gray-300 px-4 py-2 transition">
                Pillow menu features a range to suit every sensitivity, body
                shape and personal preference
              </button>
              <button className="bg-gray-200 rounded-md text-gray-800 duration-300 hover:bg-gray-300 px-4 py-2 transition">
                Fire rated and sound insulated single leaf room doors with door
                camera for security and comfort
              </button>
              <button className="bg-gray-200 rounded-md text-gray-800 duration-300 hover:bg-gray-300 px-4 py-2 transition">
                Triple glazed thermal insulated windows
              </button>
              <button className="bg-gray-200 rounded-md text-gray-800 duration-300 hover:bg-gray-300 px-4 py-2 transition">
                In-room safe (laptop size)
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
