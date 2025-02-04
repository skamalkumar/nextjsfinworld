// src/app/mutual-funds/page.jsx
'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaChartLine, FaHandHoldingUsd, FaUniversity } from 'react-icons/fa'; // Add icons
import { motion } from 'framer-motion'; // For animations

const subcategoryMappings = {
  index: ['Nifty 50', 'Nifty Next 50', 'Nifty Bank', 'Sensex', 'Others'],
  equity: ['Large Cap', 'Mid Cap', 'Small Cap', 'Multicap', 'Blue Chip', 'Focused', 'Contra', 'International', 'Flexi Cap', 'Dividend Yield', 'Others'],
  debt: ['Liquid', 'Corporate Bond', 'Dynamic Bond', 'Overnight', 'Ultra Short Duration', 'Short Duration', 'Low Duration', 'Credit Risk', 'Gilt', '10 Year Gilt', 'Money Market', 'Floater', 'Medium Duration', 'Others'],
  hybrid: ['Conservative', 'Aggressive', 'Balanced', 'Arbitrage', 'Equity Savings', 'Multi Asset Allocation', 'Others'],
  elss: [],
  etf: [],
};

const AnimatedButton = ({ children, onClick }) => (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={onClick}
    >
      {children}
    </motion.button>
  );

const MutualFundsDashboard = () => {
  const router = useRouter();

  const handleCategoryClick = (category) => {
    router.push(`/mutual-funds/${category}`);
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 to-purple-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Title and Description */}
        <header className="text-center mb-8">
          <motion.h1
            className="text-4xl font-extrabold text-blue-700 mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            Explore a Universe of Mutual Funds
          </motion.h1>
          <motion.p
            className="text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Discover the best investment opportunities tailored to your financial goals. Start exploring different categories and find the perfect mutual fund for you.
          </motion.p>
        </header>

        {/* Main Content Area */}
        <motion.div
          className="flex flex-col md:flex-row bg-white shadow-xl rounded-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.75, duration: 0.6 }}
        >
          {/* Tab Navigation */}
          <nav className="md:w-1/4 p-4 bg-gray-100">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Categories</h3>
            <ul className="space-y-2">
              {Object.entries(subcategoryMappings).map(([tab, _]) => (
                 <motion.li
                  key={tab}
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className="bg-white rounded-md shadow-sm hover:shadow-md transition-transform"
                   >
                  <Link href={`/mutual-funds/${tab}`} className="block py-2 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600" >
                    <button
                      onClick={() => handleCategoryClick(tab)}
                      className="flex items-center justify-between w-full"
                      style={{ textAlign: 'left' }}  // Override Tailwind's center alignment for buttons
                    >
                      <span>{tab.charAt(0).toUpperCase() + tab.slice(1)} Funds</span>
                      <FaChartLine className="text-gray-400" />
                    </button>
                  </Link>
                 </motion.li>
              ))}
            </ul>
          </nav>

          {/* Call to Action Section */}
          <div className="p-8 flex flex-col justify-center items-center text-center">
            <motion.h2
              className="text-2xl font-semibold text-blue-600 mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.4 }}
            >
              Ready to Start Investing?
            </motion.h2>
            <motion.p
              className="text-gray-600 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.4 }}
            >
              Explore our curated selection of mutual funds and take control of your financial future.
            </motion.p>

              <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 1.4, duration: 0.4 }}
              >
              <AnimatedButton onClick={() => router.push('/contactus')}>
               Get Personalized Advice <FaHandHoldingUsd className="ml-2 inline" />
               </AnimatedButton>
              </motion.div>
              <div className="mt-3">
          <p>
        <strong>Financial Disclaimer:</strong> Returns mentioned in mutual funds are holding period returns. Please cross check the data or consult your advisor before investing. 
        </p>
      </div>

          </div>
        </motion.div>

        {/* Footer/Credits */}
        <motion.footer
          className="text-center mt-8 text-gray-500"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          Data provided by <FaUniversity className="inline mr-1" /> mfapi.in
        </motion.footer>
      </div>
    </div>
  );
};

export default MutualFundsDashboard;