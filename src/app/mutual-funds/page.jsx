'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaChartLine, FaHandHoldingUsd, FaUniversity } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FUND_CATEGORIES = {
  index: {
    name: 'Index Funds',
    subcategories: ['Nifty 50', 'Nifty Next 50', 'Nifty Bank', 'Sensex', 'Others'],
    icon: <FaChartLine />
  },
  equity: {
    name: 'Equity Funds',
    subcategories: ['Large Cap', 'Mid Cap', 'Small Cap', 'Multicap', 'Blue Chip', 'Focused', 'Contra', 'International', 'Flexi Cap', 'Dividend Yield', 'Others'],
    icon: <FaHandHoldingUsd />
  },
  debt: {
    name: 'Debt Funds',
    subcategories: ['Liquid', 'Corporate Bond', 'Dynamic Bond', 'Overnight', 'Ultra Short Duration', 'Short Duration', 'Low Duration', 'Credit Risk', 'Gilt', '10 Year Gilt', 'Money Market', 'Floater', 'Medium Duration', 'Others'],
    icon: <FaUniversity />
  },
  hybrid: {
    name: 'Hybrid Funds',
    subcategories: ['Conservative', 'Aggressive', 'Balanced', 'Arbitrage', 'Equity Savings', 'Multi Asset Allocation', 'Others'],
    icon: <FaChartLine />
  },
  elss: {
    name: 'ELSS Funds',
    subcategories: [],
    icon: <FaHandHoldingUsd />
  },
  etf: {
    name: 'ETF',
    subcategories: [],
    icon: <FaUniversity />
  }
};

const AnimatedButton = ({ children, onClick, className = '' }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    onClick={onClick}
  >
    {children}
  </motion.button>
);

const CategoryCard = ({ category, name, icon, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
    onClick={onClick}
  >
    <div className="flex items-center space-x-4">
      <div className="text-blue-600 text-2xl">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm mt-1">
          {FUND_CATEGORIES[category].subcategories.length 
            ? `${FUND_CATEGORIES[category].subcategories.length} subcategories`
            : 'View all funds'}
        </p>
      </div>
    </div>
  </motion.div>
);

const MutualFundsDashboard = () => {
  const router = useRouter();

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.header
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
            Explore Mutual Funds
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Discover high-performing mutual funds across different categories. 
            Compare returns, analyze performance, and make informed investment decisions.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {Object.entries(FUND_CATEGORIES).map(([category, { name, icon }]) => (
            <CategoryCard
              key={category}
              category={category}
              name={name}
              icon={icon}
              onClick={() => router.push(`/mutual-funds/${category}`)}
            />
          ))}
        </div>

        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Need Investment Advice?
          </h2>
          <p className="text-gray-600 mb-6">
            Get personalized recommendations based on your investment goals and risk profile.
          </p>
          <AnimatedButton onClick={() => router.push('/contactus')}>
            Get Expert Advice
          </AnimatedButton>
        </motion.div>

        <motion.footer
          className="text-center mt-12 text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="flex items-center justify-center gap-2">
            <FaUniversity />
            Data provided by mfapi.in
          </p>
          <p className="mt-2 text-sm">
            Returns mentioned here are holding period returns. Please read scheme related documents carefully before investing.
          </p>
        </motion.footer>
      </div>
    </div>
  );
};

export default MutualFundsDashboard;