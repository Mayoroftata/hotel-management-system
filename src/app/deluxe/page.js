"use client";
import Footer from "@/components/Footer";
import Recommendations from "@/components/Recommendations";
import Link from "next/link";
import React from "react";
import NavBar from "@/components/NavBar";

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content */}
      <div className="container mx-auto my-5 px-4 py-8">
        {/* Header Section */}
        <h1 className="text-3xl text-gray-800 font-bold mb-4">Deluxe Rooms.</h1>
        <p className="text-gray-600 mb-8">
          Choose our best deluxe rooms with spacious walk-in closets, Italian
          marble bathrooms, teak floors, and oak wood desks. Breathe easy with
          state-of-the-art air purification systems that assure air quality on
          par with global best standards.
        </p>

        {/* Deluxe Rooms Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Deluxe Room 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="../img/TopRoom5.jpg"
              alt="Deluxe Room 1"
              className="h-96 rounded-lg w-full mb-4 object-cover"
            />
            <h2 className="text-2xl text-gray-800 font-semibold mb-2">
              Deluxe Room 1
            </h2>
            <p className="text-gray-600 mb-4">
              The perfect choice for business or leisure travelers. Brightly
              lit, tastefully decorated, and comfortably furnished. This Deluxe
              Room features a large picture window that allows abundant natural
              light to drift in during the day. Lutyens-style furnishings sit
              alongside the hotel's Tree of Life leitmotif, while a king-size
              bed takes center stage.
            </p>
            <div className="flex justify-between">
              <div>
                <p className="font-medium">View</p>
                <p className="text-gray-600">
                  Humayun's Tomb or Delhi Golf Course
                </p>
              </div>
              <div>
                <p className="font-medium">Total Room Size</p>
                <p className="text-gray-600">33 square metres</p>
              </div>
            </div>
            <div className="flex mt-4 space-x-4">
              <button className="bg-blue-600 rounded-md text-white duration-300 hover:bg-blue-700 px-4 py-2 transition">
                <Link href="/deluxe/room1">EXPLORE</Link>
              </button>
              <button className="bg-yellow-500 rounded-md text-white duration-300 hover:bg-yellow-600 px-4 py-2 transition">
                <Link href="/deluxe/room1">BOOK</Link>
              </button>
            </div>
          </div>

          {/* Deluxe Room 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="../img/TopRoom2.jpg"
              alt="Deluxe Room 2"
              className="h-96 rounded-lg w-full mb-4 object-cover"
            />
            <h2 className="text-2xl text-gray-800 font-semibold mb-2">
              Deluxe Room 2
            </h2>
            <p className="text-gray-600 mb-4">
              A luxurious retreat designed for comfort and style. This Deluxe
              Room offers a serene ambiance with elegant decor and modern
              amenities. Large windows provide panoramic views of the city
              skyline, while plush bedding ensures a restful night's sleep.
              Ideal for both business and leisure stays.
            </p>
            <div className="flex justify-between">
              <div>
                <p className="font-medium">View</p>
                <p className="text-gray-600">City Skyline or Garden View</p>
              </div>
              <div>
                <p className="font-medium">Total Room Size</p>
                <p className="text-gray-600">35 square metres</p>
              </div>
            </div>
            <div className="flex mt-4 space-x-4">
              <button className="bg-blue-600 rounded-md text-white duration-300 hover:bg-blue-700 px-4 py-2 transition">
                <Link href="/deluxe/room2">EXPLORE</Link>
              </button>
              <button className="bg-yellow-500 rounded-md text-white duration-300 hover:bg-yellow-600 px-4 py-2 transition">
                <Link href="/deluxe/room2">BOOK</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Recommendations />
      <Footer />
    </div>
  );
};

export default page;
