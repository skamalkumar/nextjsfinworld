'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaChevronDown, FaSearch, FaTimes } from 'react-icons/fa';

const subcategoryMappings = {
  index: ['Nifty 50', 'Nifty Next 50', 'Nifty Bank', 'Sensex', 'Others'],
  equity: ['Large Cap', 'Mid Cap', 'Small Cap', 'Multicap', 'Blue Chip', 'Focused', 'Contra', 'International', 'Flexi Cap', 'Dividend Yield', 'Others'],
  debt: ['Liquid', 'Corporate Bond', 'Dynamic Bond', 'Overnight', 'Ultra Short Duration', 'Short Duration', 'Low Duration', 'Credit Risk', 'Gilt', '10 Year Gilt', 'Money Market', 'Floater', 'Medium Duration', 'Others'],
  hybrid: ['Conservative', 'Aggressive', 'Balanced', 'Arbitrage', 'Equity Savings', 'Multi Asset Allocation', 'Others'],
  elss: [],
  etf: [],
};

const FundDetails = ({ fund, onBack }) => {
  const [navHistory, setNavHistory] = useState([]);
  const [returns, setReturns] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFundDetails = async () => {
      try {
        const response = await axios.get(`https://api.mfapi.in/mf/${fund.schemeCode}`);
        const { data } = response.data;
        setNavHistory(data);

        if (data.length > 0) {
          const latestNAV = parseFloat(data[0].nav);
          const oneYearOldNAV = parseFloat(data.find((_, index) => index === 365)?.nav) || latestNAV;
          const threeYearOldNAV = parseFloat(data.find((_, index) => index === 365 * 3)?.nav) || latestNAV;
          const fiveYearOldNAV = parseFloat(data.find((_, index) => index === 365 * 5)?.nav) || latestNAV;

          setReturns({
            '1Y': (((latestNAV - oneYearOldNAV) / oneYearOldNAV) * 100).toFixed(2),
            '3Y': (((latestNAV - threeYearOldNAV) / threeYearOldNAV) * 100).toFixed(2),
            '5Y': (((latestNAV - fiveYearOldNAV) / fiveYearOldNAV) * 100).toFixed(2),
          });
        }
      } catch (error) {
        console.error('Error fetching fund details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFundDetails();
  }, [fund]);

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
      <button
        onClick={onBack}
        className="px-4 py-2 mb-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 w-full md:w-auto"
      >
        Back to Funds List
      </button>
      {loading ? (
        <div className="text-center py-8">Loading details...</div>
      ) : (
        <div>
          <h2 className="text-xl md:text-3xl font-bold text-blue-700 break-words">{fund.schemeName}</h2>
          <div className="mt-6">
            <h3 className="text-lg md:text-2xl font-bold mb-4 text-center">Fund Performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-blue-100 p-4 md:p-6 rounded-lg shadow-lg">
              <div className="text-center p-2">
                <h4 className="text-base md:text-lg font-semibold text-blue-900">1-Year Returns</h4>
                <p className="text-lg md:text-xl font-bold text-blue-700">{returns['1Y']}%</p>
              </div>
              <div className="text-center p-2">
                <h4 className="text-base md:text-lg font-semibold text-blue-900">3-Year Returns</h4>
                <p className="text-lg md:text-xl font-bold text-blue-700">{returns['3Y']}%</p>
              </div>
              <div className="text-center p-2">
                <h4 className="text-base md:text-lg font-semibold text-blue-900">5-Year Returns</h4>
                <p className="text-lg md:text-xl font-bold text-blue-700">{returns['5Y']}%</p>
              </div>
            </div>
          </div>
          {navHistory.length > 0 && (
            <div className="mt-6 overflow-x-auto">
              <h3 className="text-lg md:text-2xl font-bold mb-4 text-center">NAV History</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-blue-100 shadow-lg rounded-lg">
                  <thead>
                    <tr className="bg-blue-300">
                      <th className="px-4 py-2 text-center text-blue-900">Date</th>
                      <th className="px-4 py-2 text-center text-blue-900">NAV</th>
                    </tr>
                  </thead>
                  <tbody>
                    {navHistory.map((entry, index) => (
                      <tr
                        key={`${fund.schemeCode}-${index}`}
                        className={index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}
                      >
                        <td className="px-4 py-2 text-center text-sm">{entry.date}</td>
                        <td className="px-4 py-2 text-center text-sm">{entry.nav}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const MutualFundsDashboard = () => {
  const [activeTab, setActiveTab] = useState('index');
  const [funds, setFunds] = useState([]);
  const [filteredFunds, setFilteredFunds] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFund, setSelectedFund] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);

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

    if (activeTab === 'etfs') {
      filtered = filtered.filter((fund) =>
        fund.schemeName?.toLowerCase().includes('etf')
      );
    } else if (selectedSubcategory && selectedSubcategory !== 'Others') {
      filtered = filtered.filter((fund) =>
        fund.schemeName?.toLowerCase().includes(selectedSubcategory.toLowerCase())
      );
    } else {
      filtered = filtered.filter((fund) =>
        fund.schemeName?.toLowerCase().includes(activeTab)
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
  }, [activeTab, selectedSubcategory, searchTerm, funds]);

  if (selectedFund) {
    return <FundDetails fund={selectedFund} onBack={() => setSelectedFund(null)} />;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Mobile Tab Navigation */}
      <div className="md:hidden overflow-x-auto">
        <div className="flex whitespace-nowrap p-2 border-b">
          {Object.keys(subcategoryMappings).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setSelectedSubcategory('');
                setSearchTerm('');
              }}
              className={`px-3 py-2 text-sm ${
                activeTab === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

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

          {/* Mobile Filter Button */}
          <button
            className="md:hidden w-full px-4 py-2 mb-4 bg-blue-500 text-white rounded-lg flex justify-between items-center"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            Filter Categories
            <FaChevronDown className={`transform ${showSidebar ? 'rotate-180' : ''} transition-transform`} />
          </button>

          {/* Subcategories */}
          <div className={`${showSidebar ? 'block' : 'hidden'} md:block`}>
            {subcategoryMappings[activeTab]?.length > 0 && (
              <div className="flex flex-col gap-2">
                {subcategoryMappings[activeTab].map((subcategory) => (
                  <button
                    key={subcategory}
                    onClick={() => {
                      setSelectedSubcategory(subcategory);
                      setShowSidebar(false);
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
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4">
          {/* Desktop Tab Navigation */}
          <div className="hidden md:block mb-4">
            <div className="flex space-x-2 border-b">
              {Object.keys(subcategoryMappings).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setSelectedSubcategory('');
                    setSearchTerm('');
                  }}
                  className={`px-4 py-2 ${
                    activeTab === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)} Funds
                </button>
              ))}
            </div>
          </div>

          {/* Funds List */}
          {loading ? (
            <div className="text-center py-8">Loading funds data...</div>
          ) : filteredFunds.length > 0 ? (
            <div className="grid gap-4">
              {filteredFunds.map((fund, index) => (
                <div
                  key={`${fund.schemeCode}-${index}`}
                  onClick={() => setSelectedFund(fund)}
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
              {/* Disclaimer */}
              <div className="p-4 text-sm text-gray-500 border-t mt-4">
        <p>
          <strong>Financial Disclaimer:</strong> Mutual fund investments are subject to market risks. Please read the offer document carefully and consult your advisor before investing. Past performance is not indicative of future returns.
        </p>
      </div>
    </div>
  );
};

export default MutualFundsDashboard;