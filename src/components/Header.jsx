"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import AuthButton from './AuthButton'; // Import the AuthButton component
import FinancialPlanningDropdown from './financialplanningdropdown';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center p-6 bg-blue-900 rounded-md mx-4 my-2">
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
        <Link href="/" className="text-white hover:text-gray-300 hover:underline">Home</Link>
        <Link href="/blogpostgit" className="text-white hover:text-gray-300 hover:underline">Rephrase</Link>
        <FinancialPlanningDropdown/>
        {/* <Link href="/FinancialPlanningDropdown" className="text-white hover:text-gray-300 hover:underline">Financial Planning</Link> */}
        <Link href="/newspage" className="text-white hover:text-gray-300 hover:underline">News</Link>
        <Link href="/aboutus" className="text-white hover:text-gray-300 hover:underline">About Us</Link>
        <Link href="/contactus" className="text-white hover:text-gray-300 hover:underline">Contact Us</Link>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="flex flex-col items-center absolute top-20 left-0 w-full bg-blue-900 text-white space-y-4 md:hidden">
          <Link href="/" className="text-white hover:text-gray-300 hover:underline" onClick={toggleMenu}>Home</Link>
          <Link href="/" className="text-white hover:text-gray-300 hover:underline" onClick={toggleMenu}>Screeners</Link>
          <Link href="/" className="text-white hover:text-gray-300 hover:underline" onClick={toggleMenu}>Financial Planning</Link>
          <Link href="/newspage" className="text-white hover:text-gray-300 hover:underline" onClick={toggleMenu}>News</Link>
          <Link href="/aboutus" className="text-white hover:text-gray-300 hover:underline" onClick={toggleMenu}>About Us</Link>
          <Link href="/contactus" className="text-white hover:text-gray-300 hover:underline" onClick={toggleMenu}>Contact Us</Link>
        </nav>
      )}

      {/* Right-side Auth Button */}
      <div className="bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-300">
        <AuthButton /> {/* Replace Log In link with AuthButton */}
        {/* <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400">
          Start Now
        </button> */}
      </div>
    </header>
  );
}
