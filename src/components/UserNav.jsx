import Link from "next/link";
import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa"; // Default user icon

export default function UserNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [userImage, setUserImage] = useState(null); // Stores user profile image
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle dropdown for navigation items
  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // ✅ Fix: Toggle User Dropdown properly
  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  // ✅ Fix: Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".user-dropdown")) {
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/Client/ClientDashboard" className="text-2xl font-bold text-blue-900">
          DEELUCK
        </Link>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <svg
            className="h-6 w-6 text-blue-900"
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
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {/* Rooms & Suites Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("rooms")}
              className="text-blue-900 hover:text-yellow-500 block md:inline focus:outline-none"
            >
              ROOMS & SUITES
            </button>
            {activeDropdown === "rooms" && (
              <div className="md:absolute md:z-10 md:mt-2 md:w-48 md:bg-white md:shadow-lg md:rounded-md md:overflow-hidden">
                <Link
                  href="/Client/deluxe"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Deluxe Rooms
                </Link>
                <Link
                  href="/Client/suites"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Suites
                </Link>
                <Link
                  href="/Client/premium"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Premium Penthouse
                </Link>
              </div>
            )}
          </div>

          {/* Meetings & Events Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("meetings")}
              className="text-blue-900 hover:text-yellow-500 block md:inline focus:outline-none"
            >
              MEETINGS & EVENTS
            </button>
            {activeDropdown === "meetings" && (
              <div className="md:absolute md:z-10 md:mt-2 md:w-48 md:bg-white md:shadow-lg md:rounded-md md:overflow-hidden">
                <Link
                  href="/events/conference"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Conferences
                </Link>
                <Link
                  href="/events/weddings"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Weddings
                </Link>
                <Link
                  href="/events/corporate"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Corporate Events
                </Link>
              </div>
            )}
          </div>

          {/* Other Links */}
          <Link
            href="/dining"
            className="text-blue-900 hover:text-yellow-500 block md:inline cursor-pointer"
          >
            DINING
          </Link>
          <Link
            href="/recreation"
            className="text-blue-900 hover:text-yellow-500 block md:inline cursor-pointer"
          >
            RECREATION CENTER
          </Link>
          <Link
            href="/support"
            className="text-blue-900 hover:text-yellow-500 block md:inline cursor-pointer"
          >
            SUPPORT
          </Link>
        </div>

        {/* User Profile Section */}
        <div className="relative user-dropdown">
          <button
            onClick={toggleUserDropdown}
            className="focus:outline-none flex items-center cursor-pointer"
          >
            {userImage ? (
              <img
                src={userImage}
                alt="User Profile"
                className="h-10 w-10 rounded-full border border-gray-300"
              />
            ) : (
              <FaUserCircle className="h-10 w-10 text-gray-500" />
            )}
          </button>

          {/* User Dropdown Menu */}
          {isUserDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md overflow-hidden">
              <Link
                href="/profile"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Profile
              </Link>
              <Link
                href="/settings"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Settings
              </Link>
              <button
                onClick={() => {
                  setUserImage(null); // Reset user image on logout
                  setIsUserDropdownOpen(false); // Close dropdown
                  console.log("User logged out");
                }}
                className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
