// components/LandingNavBar.js
import Link from 'next/link';
import { useState } from 'react';

export default function LandingNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle dropdown
  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <nav className="bg-white p-4">
      <div className="container flex justify-between items-center mx-auto">
        {/* Logo */}
        <Link href="/" className="text-2xl text-blue-900 font-bold">
          DEELUCK
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="focus:outline-none md:hidden"
        >
          <svg
            className="h-6 text-blue-900 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`md:flex space-x-6 absolute md:relative top-full left-0 right-0 bg-gray-200 md:bg-transparent cursor-pointer p-4 md:p-0 mt-2 md:mt-0 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          {/* Rooms & Suits Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('rooms')}
              className="text-blue-900 block focus:outline-none hover:text-yellow-500 md:inline"
            >
              ROOMS & SUITES
            </button>
            {activeDropdown === 'rooms' && (
              <div className="md:absolute md:bg-white md:mt-2 md:overflow-hidden md:rounded-md md:shadow-lg md:w-48 md:z-10">
                <Link
                  href="/Client/deluxe"
                  className="text-gray-800 block cursor-pointer hover:bg-gray-100 md:border-t md:first:border-t-0 px-4 py-2"
                >
                  Deluxe Rooms
                </Link>
                <Link
                  href="/rooms/suites"
                  className="text-gray-800 block cursor-pointer hover:bg-gray-100 px-4 py-2"
                >
                  Suites
                </Link>
                <Link
                  href="/rooms/premium"
                  className="text-gray-800 block cursor-pointer hover:bg-gray-100 px-4 py-2"
                >
                  Premium Rooms
                </Link>
              </div>
            )}
          </div>

          {/* Meetings & Events Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('meetings')}
              className="text-blue-900 block focus:outline-none hover:text-yellow-500 md:inline"
            >
              MEETINGS & EVENTS
            </button>
            {activeDropdown === 'meetings' && (
              <div className="md:absolute md:bg-white md:mt-2 md:overflow-hidden md:rounded-md md:shadow-lg md:w-48 md:z-10">
                <Link
                  href="/events/conference"
                  className="text-gray-800 block cursor-pointer hover:bg-gray-100 md:border-t md:first:border-t-0 px-4 py-2"
                >
                  Conferences
                </Link>
                <Link
                  href="/events/weddings"
                  className="text-gray-800 block cursor-pointer hover:bg-gray-100 px-4 py-2"
                >
                  Weddings
                </Link>
                <Link
                  href="/events/corporate"
                  className="text-gray-800 block cursor-pointer hover:bg-gray-100 px-4 py-2"
                >
                  Corporate Events
                </Link>
              </div>
            )}
          </div>

          {/* Other Links */}
          <Link
            href="/dining"
            className="text-blue-900 block cursor-pointer hover:text-yellow-500 md:inline"
          >
            DINING
          </Link>
          <Link
            href="/recreation"
            className="text-blue-900 block cursor-pointer hover:text-yellow-500 md:inline"
          >
            RECREATION CENTER
          </Link>
          <Link
            href="/support"
            className="text-blue-900 block cursor-pointer hover:text-yellow-500 md:inline"
          >
            SUPPORT
          </Link>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="bg-white border border-blue-900 rounded text-blue-900 cursor-pointer hover:bg-blue-900 hover:text-white px-4 py-2">
            <Link
              href="/login">
              LOG-IN
            </Link>
          </button>
          <button className="bg-blue-900 rounded text-white cursor-pointer hover:bg-white hover:text-blue-900 px-4 py-2">
            <Link
              href="/signup">
              SIGN-UP
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
}