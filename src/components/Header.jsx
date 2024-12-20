"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa"; // Import icons
import AuthButton from "./AuthButton"; // Import the AuthButton component
import FinancialPlanningDropdown from "./financialplanningdropdown";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Timer to close the menu after 3 seconds
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 5000);
      return () => clearTimeout(timer); // Cleanup timer when component unmounts or state changes
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="flex justify-between items-center p-6 bg-blue-900 rounded-md mx-4 my-2">
      <div className="flex items-center space-x-4">
        <img
          src="/finworld-logo.webp"
          alt="Finworld Logo"
          className="h-12 w-12 object-cover rounded-full border-2 border-white"
        />
        <div
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-white to-green-600"
          style={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            fontFamily: '"Montserrat", sans-serif',
            letterSpacing: "1px",
            filter: "brightness(1.2) contrast(1.1)",
          }}
        >
          FinWorld
        </div>
      </div>

      {/* Hamburger Menu Icon */}
      <div
        className="md:hidden text-white text-2xl cursor-pointer transition-colors duration-200 hover:text-orange-300"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-4">
        <Link href="/" className="text-white hover:text-gray-300 hover:underline">
          Home
        </Link>
        <Link href="/blog" className="text-white hover:text-gray-300 hover:underline">
          Blog
        </Link>
        <Link href="/newspage" className="text-white hover:text-gray-300 hover:underline">
          News
        </Link>
        <FinancialPlanningDropdown />
        <Link href="/aboutus" className="text-white hover:text-gray-300 hover:underline">
          About Us
        </Link>
        <Link href="/contactus" className="text-white hover:text-gray-300 hover:underline">
          Contact Us
        </Link>
      </nav>

      {/* Mobile Nav with Overlay (Half Screen) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-blue-900 bg-opacity-95 flex flex-col items-center justify-center z-50 w-3/4"
          style={{
            backdropFilter: "blur(10px)",
            left: 0, // Positions the menu on the left side of the screen
          }}
        >
          <nav className="flex flex-col items-center space-y-4">
            <Link href="/" className="text-white hover:text-gray-300 text-lg" onClick={closeMenu}>
              Home
            </Link>
            <Link href="/blog" className="text-white hover:text-gray-300 text-lg" onClick={closeMenu}>
              Blog
            </Link>
            <Link href="/newspage" className="text-white hover:text-gray-300 text-lg" onClick={closeMenu}>
              News
            </Link>
            <FinancialPlanningDropdown />
            <Link href="/aboutus" className="text-white hover:text-gray-300 text-lg" onClick={closeMenu}>
              About Us
            </Link>
            <Link href="/contactus" className="text-white hover:text-gray-300 text-lg" onClick={closeMenu}>
              Contact Us
            </Link>
          </nav>
        </div>
      )}

      {/* Right-side Auth Button with Icons */}
      <div className="flex items-center space-x-4">
        <a href="https://www.facebook.com/thefinworldltd" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-500">
          <FaFacebook />
        </a>
        <a href="https://www.youtube.com/@FinWorldLtd" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-red-500">
          <FaYoutube />
        </a>
        <a href="https://www.linkedin.com/in/kamalsrungarapu/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-400">
          <FaLinkedin />
        </a>
        <div className="bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-300">
          <AuthButton /> {/* Replace Log In link with AuthButton */}
        </div>
      </div>
    </header>
  );
}
