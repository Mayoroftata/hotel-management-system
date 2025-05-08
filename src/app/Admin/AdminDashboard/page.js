"use client";
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-4">
        <h2 className="text-xl font-bold mb-6">DEELUCK ADMIN</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveSection('dashboard')}
                className={`w-full p-2 rounded ${
                  activeSection === 'dashboard' ? 'bg-blue-700' : ''
                }`}
              >
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('rooms')}
                className={`w-full p-2 rounded ${
                  activeSection === 'rooms' ? 'bg-blue-700' : ''
                }`}
              >
                Rooms
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('bookings')}
                className={`w-full p-2 rounded ${
                  activeSection === 'bookings' ? 'bg-blue-700' : ''
                }`}
              >
                Bookings
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('guests')}
                className={`w-full p-2 rounded ${
                  activeSection === 'guests' ? 'bg-blue-700' : ''
                }`}
              >
                Guests
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('reports')}
                className={`w-full p-2 rounded ${
                  activeSection === 'reports' ? 'bg-blue-700' : ''
                }`}
              >
                Reports
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h1>
          <div className="flex items-center space-x-4">
            <span>Welcome, Admin</span>
            <img
              src="/path/to/admin-avatar.png"
              alt="Admin Avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 p-4 overflow-auto">
          {activeSection === 'dashboard' && <Dashboard />}
          {activeSection === 'rooms' && <Rooms />}
          {activeSection === 'bookings' && <Bookings />}
          {activeSection === 'guests' && <Guests />}
          {activeSection === 'reports' && <Reports />}
        </div>
      </main>
    </div>
  );
}

// Dashboard Section
function Dashboard() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold">Total Rooms</h3>
          <p>50</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold">Total Bookings</h3>
          <p>120</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold">Active Guests</h3>
          <p>30</p>
        </div>
      </div>
    </div>
  );
}

// Rooms Section
function Rooms() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Manage Rooms</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">Room ID</th>
            <th className="border p-2">Type</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Availability</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">101</td>
            <td className="border p-2">Deluxe</td>
            <td className="border p-2">$150</td>
            <td className="border p-2">Available</td>
            <td className="border p-2">
              <button className="bg-green-500 text-white px-2 py-1 rounded">Edit</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>
            </td>
          </tr>
          {/* Add more rows dynamically */}
        </tbody>
      </table>
    </div>
  );
}

// Bookings Section
function Bookings() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Manage Bookings</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">Booking ID</th>
            <th className="border p-2">Guest Name</th>
            <th className="border p-2">Check-In</th>
            <th className="border p-2">Check-Out</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">B001</td>
            <td className="border p-2">John Doe</td>
            <td className="border p-2">2023-10-15</td>
            <td className="border p-2">2023-10-20</td>
            <td className="border p-2">Confirmed</td>
            <td className="border p-2">
              <button className="bg-yellow-500 text-white px-2 py-1 rounded">Update</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Cancel</button>
            </td>
          </tr>
          {/* Add more rows dynamically */}
        </tbody>
      </table>
    </div>
  );
}

// Guests Section
function Guests() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Manage Guests</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">Guest ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">G001</td>
            <td className="border p-2">Jane Smith</td>
            <td className="border p-2">jane@example.com</td>
            <td className="border p-2">+1234567890</td>
            <td className="border p-2">
              <button className="bg-green-500 text-white px-2 py-1 rounded">Edit</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>
            </td>
          </tr>
          {/* Add more rows dynamically */}
        </tbody>
      </table>
    </div>
  );
}

// Reports Section
function Reports() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Analytics</h2>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-xl font-bold">Monthly Revenue</h3>
        <p>$10,000</p>
      </div>
    </div>
  );
}