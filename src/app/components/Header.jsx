'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Hamburger and close icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center p-6 bg-blue-900">
      <div className="flex items-center space-x-4">
        <img 
          src="/finworld-logo.webp" 
          alt="Finworld Logo" 
          className="h-12 w-12 object-cover rounded-full border-2 border-white"
        />
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-white to-green-600"
          style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            fontFamily: '"Montserrat", sans-serif',
            letterSpacing: '1px',
            filter: 'brightness(1.2) contrast(1.1)',
          }}
        >
          FinWorld
        </div>
      </div>
      
      {/* Hamburger Menu Icon */}
      <div className="md:hidden text-white text-2xl" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-4">
        <Link href="/" className="text-white hover:text-gray-300">Our Service</Link>
        <Link href="/" className="text-white hover:text-gray-300">Products</Link>
        <Link href="/" className="text-white hover:text-gray-300">Financial Planning</Link>
        {/* <Link href="/" className="text-white hover:text-gray-300">Help Hub</Link> */}
        <Link href="/" className="text-white hover:text-gray-300">Our Views</Link>
        <Link href="/" className="text-white hover:text-gray-300">About Us</Link>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="flex flex-col items-center absolute top-20 left-0 w-full bg-blue-900 text-white space-y-4 md:hidden">
          <Link href="/" className="text-white hover:text-gray-300" onClick={toggleMenu}>Our Service</Link>
          <Link href="/" className="text-white hover:text-gray-300" onClick={toggleMenu}>Products</Link>
          <Link href="/" className="text-white hover:text-gray-300" onClick={toggleMenu}>Financial Planning</Link>
          <Link href="/" className="text-white hover:text-gray-300" onClick={toggleMenu}>Help Hub</Link>
          <Link href="/" className="text-white hover:text-gray-300" onClick={toggleMenu}>Our Views</Link>
          <Link href="/" className="text-white hover:text-gray-300" onClick={toggleMenu}>About Us</Link>
        </nav>
      )}

      <div className="hidden md:flex items-center space-x-4">
        <Link href="/" className="text-white hover:text-gray-300">Log In</Link>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400">
          Start Now
        </button>
      </div>
    </header>
  );
}
