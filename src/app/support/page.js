"use client";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import React from "react";
import { useState } from "react";

export default function Page() {
  const faqs = [
    {
      question: "Enhanced cleaning",
      answer:
        "Our properties undergo rigorous cleaning protocols to ensure a safe and hygienic environment for all guests.",
    },
    {
      question: "Personal protection",
      answer:
        "We provide complimentary hand sanitizers and encourage guests to follow health guidelines for personal safety.",
    },
    {
      question: "Physical distancing",
      answer:
        "We maintain social distancing measures in common areas and during check-in/check-out processes.",
    },
    {
      question: "Minimised contact",
      answer:
        "Our staff uses protective gear and minimizes direct contact with guests to enhance safety.",
    },
    {
      question: "Increased food safety",
      answer:
        "All food services adhere to strict hygiene standards, ensuring the highest level of food safety.",
    },
  ];

  // State to track expanded/collapsed FAQs
  const [isExpanded, setIsExpanded] = useState(
    new Array(faqs.length).fill(false)
  );

  // Function to toggle the expanded state of an FAQ
  const toggleAnswer = (index) => {
    const updatedExpanded = [...isExpanded];
    updatedExpanded[index] = !updatedExpanded[index];
    setIsExpanded(updatedExpanded);
  };

  return (
    <div className="bg-blue-900">
      <NavBar />
      <div className="bg-blue-900 min-h-screen">
        {/* Header */}
        <section
          id="sectionHero"
          className="flex bg-center bg-cover h-screen justify-center text-white items-center relative"
        >
          {/* Background Image */}
          <div className="bg-gradient-to-b absolute from-black inset-0 opacity-75 to-black via-transparent"></div>
          {/* Content Overlay */}
          <div className="lg:px-8 px-4 relative sm:px-6 z-10">
            <div className="text-center">
              <h1 className="text-6xl text-center text-white font-extrabold mb-6">
                Support
              </h1>
              <p className="text-3xl text-center text-white font-semibold mb-6">
                We are here to help
              </p>
              <p className="text-center text-lg text-white leading-relaxed max-w-3xl mb-8 mx-auto">
                <span className="text-white font-semibold">DeeLuck,&#39;</span>{" "}
                we are committed to providing exceptional customer service and
                ensuring your stay is comfortable and memorable. Whether you
                need assistance with your booking, have questions about our
                services, or need help with anything else, our support team is
                here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container bg-blue-900 mx-auto px-4 py-8">
          {/* How Can We Assist You */}
          <section className="mb-8">
            <h2 className="text-center text-xl font-bold mb-4">
              HOW CAN WE ASSIST YOU
            </h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2">
              {/* Card 1 */}
              <div className="flex bg-blue-900 p-4 rounded-lg shadow-md items-center outline outline-white space-x-4">
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
                </svg>
                <div>
                  <p className="text-sm font-medium">
                    Assistance with finding and booking the perfect
                    accommodation, transports, and attraction center.
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="flex bg-blue-900 p-4 rounded-lg shadow-md items-center outline outline-white space-x-4">
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
                    d="M9 17v-2m3 2v-4m-3 4v-6m-8 0H1a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 0h6m0 0h4a2 2 0 012 2v3M7 10h3a2 2 0 012 2v3M7 16h3a2 2 0 012 2v3m1-7h.01M7 16h.01M7 10h.01M7 17a1 1 0 11-2 0 1 1 0 012 0zM5 9a1 1 0 100-2 1 1 0 000 2z"
                  />
                </svg>
                <div>
                  <p className="text-sm font-medium">
                    Changes to your booking dates, accommodation type, transport
                    type, attraction center type and other details.
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="flex bg-blue-900 p-4 rounded-lg shadow-md items-center outline outline-white space-x-4">
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
                    d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="text-sm font-medium">
                    Help with cancelling your booking, understanding the
                    cancellation policy and other details of your booking.
                  </p>
                </div>
              </div>
              {/* Card 4 */}
              <div className="flex bg-blue-900 p-4 rounded-lg shadow-md items-center outline outline-white space-x-4">
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
                <div>
                  <p className="text-sm font-medium">
                    Arranging or customization of special amenities or services
                    for your stay according to your taste.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Us */}
          <section className="mb-8">
            <h2 className="text-center text-xl font-bold mb-4">CONTACT US</h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2">
              {/* Accommodation Support */}
              <div className="flex flex-col bg-blue-900 p-4 rounded-lg shadow-md items-center outline outline-white space-y-2">
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
                <p className="text-sm font-medium">Accommodation Support</p>
                <p className="text-sm">+1-800-123-4567</p>
              </div>
              {/* Transportation Support */}
              <div className="flex flex-col bg-blue-900 p-4 rounded-lg shadow-md items-center outline outline-white space-y-2">
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
                    d="M3 10h18M7 16H5v-2a3 3 0 013-3h10a3 3 0 013 3v2h-2"
                  />
                </svg>
                <p className="text-sm font-medium">Transportation Support</p>
                <p className="text-sm">+1-800-234-5678</p>
              </div>
              {/* Tours Support */}
              <div className="flex flex-col bg-blue-900 p-4 rounded-lg shadow-md items-center outline outline-white space-y-2">
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
                    d="M17.657 18.657L9.143 15l6.5 6.5L18 19l-6.5-6.5L12.343 12.343 7.5 17.157a1.5 1.5 0 01-2.121 0L2.843 8.843a1.5 1.5 0 012.121-2.121l5.657-5.657a1.5 1.5 0 012.121 2.121L9 10.5l6.657-6.657a1.5 1.5 0 012.121 2.121l-5.657 5.657z"
                  />
                </svg>
                <p className="text-sm font-medium">Tours Support</p>
                <p className="text-sm">+1-800-234-5678</p>
              </div>
              {/* Others */}
              <div className="flex flex-col bg-blue-900 p-4 rounded-lg shadow-md items-center outline outline-white space-y-2">
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
                <p className="text-sm font-medium">Others</p>
                <p className="text-sm">+1-800-234-5678</p>
              </div>
            </div>
          </section>

          {/* Email Support */}
          <section className="mb-8">
            <div className="flex flex-col bg-blue-900 p-4 rounded-lg shadow-md items-center outline outline-white space-y-2">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <p className="text-sm font-medium">Email Support</p>
              <p className="text-sm">
                For detailed inquiries or issues, email us at
                support@Deeluck.com, and we&#39;ll get back to you within 24 hours.
              </p>
            </div>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="text-center text-xl font-bold mb-4">FAQs</h2>
            <div>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-blue-900 p-4 rounded-lg shadow-md mb-2 outline outline-white"
                >
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium">{faq.question}</p>
                    <button
                      onClick={() => toggleAnswer(index)}
                      className="text-sm font-medium"
                    >
                      {isExpanded[index] ? "-" : "+"}
                    </button>
                  </div>
                  {isExpanded[index] && (
                    <p className="text-sm mt-2">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-blue-900 p-4 text-center text-white outline outline-white">
          Thank you for choosing Deeluck. We&#39;re dedicated to making your travel
          experience the best it can be. If you have any questions or need
          assistance, don&#39;t hesitate to reach out to us.
        </footer>
      </div>
      <Footer />
    </div>
  );
}
