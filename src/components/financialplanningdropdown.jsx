'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const FinancialPlanningDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [insuranceOpen, setInsuranceOpen] = useState(false);
  const dropdownRef = useRef(null);
  const insuranceRef = useRef(null);

  // Open main dropdown
  const handleMouseEnter = () => setIsOpen(true);

  // Close main dropdown when mouse leaves
  const handleMouseLeave = () => {
    setTimeout(() => {
      // Ensure dropdownRef.current is not null before calling matches
      if (dropdownRef.current && !dropdownRef.current.matches(':hover')) {
        setIsOpen(false);
        setInsuranceOpen(false);
      }
    }, 150);
  };

  // Open and close Insurance submenu without delay
  const handleInsuranceEnter = () => setInsuranceOpen(true);
  const handleInsuranceLeave = () => {
    setTimeout(() => {
      // Ensure insuranceRef.current is not null before calling matches
      if (insuranceRef.current && !insuranceRef.current.matches(':hover')) {
        setInsuranceOpen(false);
      }
    }, 150);
  };

  // Close main dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setInsuranceOpen(false);
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
        Investing & Finance
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

      {/* Main Dropdown Menu */}
      {isOpen && (
        <ul
          className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <li className="relative mb-1">
            {/* Insurance Planning with submenu and arrow icon */}
            <button
              onMouseEnter={handleInsuranceEnter}
              onMouseLeave={handleInsuranceLeave}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white rounded-md flex items-center justify-between"
            >
              Insurance Planning
              <svg
                className="h-4 w-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Nested Submenu for Insurance Planning */}
            {insuranceOpen && (
              <ul
                ref={insuranceRef}
                className="absolute left-full top-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                onMouseEnter={handleInsuranceEnter}
                onMouseLeave={handleInsuranceLeave}
              >
                <li>
                  <Link
                    href="/financialplanning/insuranceplanning/accidentinsurance"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white rounded-md"
                  >
                    Accident Insurance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/financialplanning/insuranceplanning/lifeinsurance"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white rounded-md"
                  >
                    Life Insurance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/financialplanning/insuranceplanning/healthinsurance"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white rounded-md"
                  >
                    Health Insurance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/financialplanning/insuranceplanning/propertyinsurance"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white rounded-md"
                  >
                    Property Insurance
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="mb-1">
            <Link
              href="/financialplanning/investmentplanning"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white rounded-md"
            >
              Investment Planning
            </Link>
          </li>
          <li className="mb-1">
            <Link
              href="/financialplanning/taxplanning"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white rounded-md"
            >
              Tax Planning
            </Link>
          </li>
          <li className="mb-1">
            <Link
              href="/financialplanning/willplanning"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white rounded-md"
            >
              Will Planning
            </Link>
          </li>
          <li className="mb-1">
            <Link
              href="/mutual-funds"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white rounded-md"
            >
              Mutual Funds
            </Link>
          </li>
          <li className="mb-1">
            <Link
              href="/financialhealthscore"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white rounded-md"
            >
              Financial HealthScore
            </Link>
          </li>
          <li className="mb-1">
            <Link
              href="/financialplanning/financialmilestones"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white rounded-md"
            >
              Financial Milestones
            </Link>
          </li>
          <li className="mb-1">
            <Link
              href="/financialplanning/sampleplan"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white rounded-md"
            >
              Sample Plan
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default FinancialPlanningDropdown;
