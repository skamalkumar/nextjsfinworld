// src/app/mutual-funds/[category]/page.jsx
'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { FaChevronDown, FaSearch } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const subcategoryMappings = {
    index: ['Nifty 50', 'Nifty Next 50', 'Nifty Bank', 'Sensex', 'Others'],
    equity: ['Large Cap', 'Mid Cap', 'Small Cap', 'Multicap', 'Blue Chip', 'Focused', 'Contra', 'International', 'Flexi Cap', 'Dividend Yield', 'Others'],
    debt: ['Liquid', 'Corporate Bond', 'Dynamic Bond', 'Overnight', 'Ultra Short Duration', 'Short Duration', 'Low Duration', 'Credit Risk', 'Gilt', '10 Year Gilt', 'Money Market', 'Floater', 'Medium Duration', 'Others'],
    hybrid: ['Conservative', 'Aggressive', 'Balanced', 'Arbitrage', 'Equity Savings', 'Multi Asset Allocation', 'Others'],
    elss: [],
    etf: [],
};

const MutualFundsCategoryPage = ({ params }) => {
  const { category } = params;
  const [funds, setFunds] = useState([]);
  const [filteredFunds, setFilteredFunds] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
   const [loading, setLoading] = useState(true);
  const router = useRouter()
    const handleFundClick = (fund) => {
          router.push(`/mutual-funds/${category}/${fund.schemeCode}`);
    };
    const handleBack = () => {
         router.push(`/mutual-funds`)
    }
   useEffect(() => {
    const fetchFundsData = async () => {
      try {
        const response = await axios.get('https://api.mfapi.in/mf');
        setFunds(response.data || []);
      } catch (error) {
        console.error('Error fetching funds:', error);
      } finally {
         setLoading(false);
      }
    };

    fetchFundsData();
  }, []);

  const filterFundsByCategoryAndSubcategory = () => {
    let filtered = funds;
     if (category === 'etf') {
      filtered = filtered.filter((fund) =>
        fund.schemeName?.toLowerCase().includes('etf')
      );
    } else if (selectedSubcategory && selectedSubcategory !== 'Others') {
      filtered = filtered.filter((fund) =>
        fund.schemeName?.toLowerCase().includes(selectedSubcategory.toLowerCase())
      );
    } else {
      filtered = filtered.filter((fund) =>
        fund.schemeName?.toLowerCase().includes(category)
      );
    }

    if (searchTerm) {
      filtered = filtered.filter((fund) =>
        fund.schemeName?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  };

  useEffect(() => {
    setFilteredFunds(filterFundsByCategoryAndSubcategory());
  }, [category, selectedSubcategory, searchTerm, funds]);

  return (
     <div className="bg-gray-50 min-h-screen">
      <button
        onClick={handleBack}
        className="px-4 py-2 mb-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 w-full md:w-auto"
      >
        Back to Categories
      </button>
      <div className="flex flex-col md:flex-row p-4">
        {/* Sidebar / Filter Section */}
        <div className="w-full md:w-1/4 md:pr-4 mb-4 md:mb-0">
          <div className="relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search funds..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 mb-4 border rounded-lg"
            />
          </div>

          {/* Subcategories */}
           {subcategoryMappings[category]?.length > 0 && (
              <div className="flex flex-col gap-2">
                {subcategoryMappings[category].map((subcategory) => (
                  <button
                    key={subcategory}
                    onClick={() => {
                      setSelectedSubcategory(subcategory);

                    }}
                   className={`px-4 py-2 text-sm md:text-base rounded-lg transition-colors ${
                      selectedSubcategory === subcategory
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    {subcategory}
                  </button>
                ))}
              </div>
            )}
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4">

          {/* Funds List */}
          {loading ? (
           <div className="text-center py-8">Loading funds data...</div>
          ) : filteredFunds.length > 0 ? (
            <div className="grid gap-4">
              {filteredFunds.map((fund, index) => (
                 <div
                  key={`${fund.schemeCode}-${index}`}
                  onClick={() => handleFundClick(fund)}
                 className="cursor-pointer bg-white shadow-lg rounded-lg p-4 hover:bg-gray-100 transition-colors"
               >
                 <h2 className="text-base md:text-lg font-bold break-words">{fund.schemeName}</h2>
                    <p className="text-sm text-gray-600 mt-2">Code: {fund.schemeCode}</p>
               </div>
              ))}
            </div>
          ) : (
           <div className="text-center py-8">No funds available for the selected category.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MutualFundsCategoryPage;