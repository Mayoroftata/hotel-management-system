// components/Footer.js
import { useState } from 'react';
import Link from 'next/link';


export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <footer className="bg-white text-blue-900 py-8">
      <div className="container mx-auto px-4 md:flex md:items-center md:justify-between">
        {/* Left Section */}
        <div className="mb-6 md:mb-0 md:w-1/3">
          <h2 className="text-xl font-bold mb-4">DEELUCK</h2>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-yellow-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-yellow-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-yellow-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-yellow-500">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <p>
            Support: +23480 227 00 482<br />
            Email: deeluck@gmail.com
          </p>
        </div>

         {/* Middle Section */}
         <div className="md:w-1/3">
          <nav className="space-y-2">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <Link href="/rooms" passHref legacyBehavior>
              <a className="block text-blue-900 hover:text-yellow-500">ROOMS & SUITS</a>
            </Link>
            <Link href="/events" passHref legacyBehavior>
              <a className="block text-blue-900 hover:text-yellow-500">MEETINGS & EVENTS</a>
            </Link>
            <Link href="/dining" passHref legacyBehavior>
              <a className="block text-blue-900 hover:text-yellow-500">DINING</a>
            </Link>
            <Link href="/recreation" passHref legacyBehavior>
              <a className="block text-blue-900 hover:text-yellow-500">RECREATION CENTER</a>
            </Link>
            <Link href="/support" passHref legacyBehavior>
              <a className="block text-blue-900 hover:text-yellow-500">SUPPORT</a>
            </Link>
          </nav>
        </div>

        {/* Right Section */}
        <div className="md:w-1/3">
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 mb-2 border rounded"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full p-2 mb-2 border rounded"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>Thank you for choosing DEELUCK, your Home Away from Home. Happy Staying!</p>
      </div>
    </footer>
  );
}