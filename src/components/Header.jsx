'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import AuthButton from "./AuthButton";
import FinancialPlanningDropdown from "./financialplanningdropdown";
import SocialMediaDropdown from "./SocialMediaDropdown";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 5000);
      return () => clearTimeout(timer);
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
          src="/FinWorld-Logo.png"
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
      <nav className="hidden md:flex items-center space-x-4">
        <Link href="/" className="text-white hover:text-gray-300 hover:underline">
          Home
        </Link>
        {/* <Link href="/blog" className="text-white hover:text-gray-300 hover:underline">
          Blog
        </Link>
        <Link href="/newspage" className="text-white hover:text-gray-300 hover:underline">
          News
        </Link> */}
        <FinancialPlanningDropdown />
        <Link href="/aboutus" className="text-white hover:text-gray-300 hover:underline">
          About Us
        </Link>
        <Link href="/contactus" className="text-white hover:text-gray-300 hover:underline">
          Contact Us
        </Link>
        <SocialMediaDropdown />
      </nav>

      {/* Mobile Nav with Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-blue-900 bg-opacity-95 flex flex-col items-center justify-center z-50 w-3/4"
          style={{
            backdropFilter: "blur(10px)",
            left: 0,
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
            <div className="mt-4">
              <SocialMediaDropdown />
            </div>
          </nav>
        </div>
      )}

      {/* Right-side Auth Button */}
      <div className="bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-300">
        <AuthButton />
      </div>
    </header>
  );
}