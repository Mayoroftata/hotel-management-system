import Link from "next/link";
import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa"; // Default user icon

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [userImage, setUserImage] = useState(null); // Stores user profile image
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks user login status

  // ✅ Fix: Toggle Mobile Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // ✅ Fix: Toggle Dropdown for Navigation Items
  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // ✅ Fix: Toggle User Dropdown
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

  // ✅ Fix: Check for User Token and Set Login Status
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      // Simulate token validation (e.g., check expiration)
      // For simplicity, assume the token is valid
      setIsLoggedIn(true);
      setUserImage(
        localStorage.getItem("userImage") || null
      ); // Load user image from localStorage if available
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <nav className="bg-white p-4">
      <div className="container flex justify-between items-center mx-auto">
        {/* Logo */}
        <Link href="/" className="text-2xl text-blue-900 font-bold">
          DEELUCK
        </Link>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="focus:outline-none md:hidden">
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
          className={`md:flex space-x-6 absolute md:relative top-full left-0 right-0 bg-gray-200 md:bg-transparent cursor-pointer p-4 md:p-0 mt-2 md:mt-0 ${isMenuOpen ? "block" : "hidden"
            }`}
        >
          {/* Rooms & Suites Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("rooms")}
              className="text-blue-900 block focus:outline-none hover:text-yellow-500 md:inline"
            >
              ROOMS & SUITES
            </button>
            {activeDropdown === "rooms" && (
              <div className="md:absolute md:bg-white md:mt-2 md:overflow-hidden md:rounded-md md:shadow-lg md:w-48 md:z-10">
                <Link
                  href="/deluxe"
                  className="text-gray-800 block hover:bg-gray-100 px-4 py-2"
                >
                  Deluxe Rooms
                </Link>
                <Link
                  href="/suites"
                  className="text-gray-800 block hover:bg-gray-100 px-4 py-2"
                >
                  Suites
                </Link>
                <Link
                  href="/premium"
                  className="text-gray-800 block hover:bg-gray-100 px-4 py-2"
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
              className="text-blue-900 block focus:outline-none hover:text-yellow-500 md:inline"
            >
              MEETINGS & EVENTS
            </button>
            {activeDropdown === "meetings" && (
              <div className="md:absolute md:bg-white md:mt-2 md:overflow-hidden md:rounded-md md:shadow-lg md:w-48 md:z-10">
                <Link
                  href="/events/conference"
                  className="text-gray-800 block hover:bg-gray-100 px-4 py-2"
                >
                  Conferences
                </Link>
                <Link
                  href="/events/weddings"
                  className="text-gray-800 block hover:bg-gray-100 px-4 py-2"
                >
                  Weddings
                </Link>
                <Link
                  href="/events/corporate"
                  className="text-gray-800 block hover:bg-gray-100 px-4 py-2"
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

        {/* User Profile Section */}
        {isLoggedIn ? (
          <div className="relative user-dropdown">
            <button
              onClick={toggleUserDropdown}
              className="flex cursor-pointer focus:outline-none items-center"
            >
              {userImage ? (
                <img
                  src={userImage}
                  alt="User Profile"
                  className="border border-gray-300 h-10 rounded-full w-10"
                />
              ) : (
                <FaUserCircle className="h-10 text-gray-500 w-10" />
              )}
            </button>

            {/* User Dropdown Menu */}
            {isUserDropdownOpen && (
              <div className="bg-white rounded-md shadow-md w-48 absolute mt-2 overflow-hidden right-0">
                <Link
                  href="/profile"
                  className="text-gray-800 block hover:bg-gray-100 px-4 py-2"
                >
                  Profile
                </Link>
                <Link
                  href="/settings"
                  className="text-gray-800 block hover:bg-gray-100 px-4 py-2"
                >
                  Settings
                </Link>
                <button
                  onClick={() => {
                    localStorage.removeItem("authToken"); // Remove token on logout
                    localStorage.removeItem("userImage"); // Remove user image
                    setUserImage(null); // Reset user image
                    setIsLoggedIn(false); // Update login status
                    setIsUserDropdownOpen(false); // Close dropdown
                    console.log("User logged out");
                  }}
                  className="text-left text-red-600 w-full block hover:bg-gray-100 px-4 py-2"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <button className="bg-white border border-blue-900 rounded text-blue-900 cursor-pointer hover:bg-blue-900 hover:text-white px-4 py-2">
              <Link
                href="/signin">
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
        )}
      </div>
    </nav>
  );
}