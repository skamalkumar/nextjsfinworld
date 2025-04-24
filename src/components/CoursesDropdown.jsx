'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const CoursesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => {
    setTimeout(() => {
      if (dropdownRef.current && !dropdownRef.current.matches(':hover')) {
        setIsOpen(false);
      }
    }, 150);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div
        className="inline-flex justify-center w-full rounded-md border text-sm font-medium hover:bg-blue focus:outline-none focus:ring-2 focus:ring-offset-2 text-white focus:ring-indigo-500"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="inline-flex items-center">
          Courses
          <svg
            className="ml-2 -mr-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06-.02L10 10.586l3.71-3.366a.75.75 0 111.04 1.082l-4 3.63a.75.75 0 01-1.04 0l-4-3.63a.75.75 0 01-.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <ul
          className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <li className="mb-1">
            <Link
              href="/courses/cfp"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white rounded-md"
            >
              CFP Certification
            </Link>
          </li>
          <li className="mb-1">
            <Link
              href="/courses/research-analyst"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white rounded-md"
            >
              Research Analyst
            </Link>
          </li>
         <li className="mb-1">
            <Link
              href="/courses/derivatives"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white rounded-md"
            >
              Derivatives
            </Link>
          </li>
          <li className="mb-1">
            <Link
              href="/courses/mutual-fund-distributor"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white rounded-md"
            >
              MF Distributor Module
            </Link>
          </li>
          <li className="mb-1">
            <Link
              href="/courses/portfolio-management"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white rounded-md"
            >
              Portfolio Management
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default CoursesDropdown;
