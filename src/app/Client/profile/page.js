"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

export default function ProfilePage() {
  return (
    <div>
      <NavBar />
      <div className="bg-blue-900 text-white min-h-screen space-y-40">
        {/* Header */}
        <header className="bg-blue-900 p-6 text-center ">
          <h1 className="text-4xl font-bold pt-10">MANAGE YOUR ACCOUNT</h1>
          <p className="text-xl mt-2">Manage your TravelEase experience</p>
        </header>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          {/* Assistance Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-center mb-6">
              HOW CAN WE ASSIST YOU
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Personal Details */}
              <div className="bg-blue-900 outline outline-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM3.859 11.859a4 4 0 015.657-5.657l2.127 2.127c.199.199.474.296.74.296s.542-.097.74-.296l2.127-2.127a4 4 0 11-5.657-5.657l-2.127 2.127a1.5 1.5 0 01-2.121 0l-2.127-2.127A6 6 0 103.859 11.859z"
                  />
                </svg>
                <p className="text-sm font-medium">PERSONAL DETAILS</p>
                <p className="text-sm">Manage personal details</p>
              </div>

              {/* Security */}
              <div className="bg-blue-900 outline outline-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4"
                  />
                </svg>
                <p className="text-sm font-medium">SECURITY</p>
                <p className="text-sm">Manage account security</p>
              </div>

              {/* Bookings */}
              <div className="bg-blue-900 outline outline-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-sm font-medium">BOOKINGS</p>
                <p className="text-sm">Manage booking and history</p>
              </div>

              {/* Payment Details */}
              <div className="bg-blue-900 outline outline-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h18M7 16h4M3 7l13-5 3 1l-13 5-3-1z"
                  />
                </svg>
                <p className="text-sm font-medium">PAYMENT DETAILS</p>
                <p className="text-sm">Manage payment details</p>
              </div>

              {/* Privacy */}
              <div className="bg-blue-900 outline outline-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h6l2 2h8a2 2 0 002-2v-2a2 2 0 00-2-2z"
                  />
                </svg>
                <p className="text-sm font-medium">PRIVACY</p>
                <p className="text-sm">Manage privacy</p>
              </div>

              {/* Notifications */}
              <div className="bg-blue-900 outline outline-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a2 2 0 00-2-2h-5V6a2 2 0 012-2h5v2a2 2 0 012 2v2.158A2.032 2.032 0 0118 14z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a2 2 0 00-2-2h-5V6a2 2 0 012-2h5v2a2 2 0 012 2v2.158A2.032 2.032 0 0118 14z"
                  />
                </svg>
                <p className="text-sm font-medium">NOTIFICATIONS</p>
                <p className="text-sm">Manage notifications</p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-8 text-center text-gray-400">
            <p>
              Thank you for choosing TravelEase. We&apos;re dedicated to making your
              travel experience the best it can be. If you have any questions or
              need assistance, don&apos;t hesitate to reach out to us.
            </p>
          </footer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
