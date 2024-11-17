'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const subcategoryMappings = {
  index: ['Nifty 50', 'Nifty Next 50', 'Nifty Small Cap', 'Nifty Mid Cap', 'Nifty Bank', 'Sensex', 'Others'],
  equity: ['Large Cap', 'Mid Cap', 'Small Cap', 'Multicap', 'Blue Chip', 'Focused', 'Contra', 'International', 'Flexi Cap', 'Sectoral', 'Dividend Yield', 'Others'],
  debt: ['Liquid', 'Banking PSU', 'Corporate Bond', 'Dynamic Bond', 'Overnight', 'Ultra Short Duration', 'Short Duration', 'Low Duration', 'Credit Risk', 'Gilt', '10 Year Gilt', 'Money Market', 'Floater', 'Medium Duration', 'Others'],
  hybrid: ['Conservative', 'Aggressive', 'Balanced', 'Arbitrage', 'Equity Savings', 'Multi Asset Allocation', 'Others'],
  elss: [],
  etfs: [], // ETFs won't have subcategories, so this is empty
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

        // NAV History
        setNavHistory(data);

        // Calculate Returns
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
    <div className="p-6 bg-gray-50 min-h-screen">
      <button
        onClick={onBack}
        className="px-4 py-2 mb-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
      >
        Back to Funds List
      </button>
      {loading ? (
        <div>Loading details...</div>
      ) : (
        <div>
          <h2 className="text-3xl font-bold text-blue-700">{fund.schemeName}</h2>
          <div className="mt-6">
            <h3 className="text-2xl font-bold mb-4 text-center">Fund Performance</h3>
            <div className="grid grid-cols-3 gap-4 bg-blue-100 p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-blue-900">1-Year Returns</h4>
                <p className="text-xl font-bold text-blue-700">{returns['1Y']}%</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-blue-900">3-Year Returns</h4>
                <p className="text-xl font-bold text-blue-700">{returns['3Y']}%</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-blue-900">5-Year Returns</h4>
                <p className="text-xl font-bold text-blue-700">{returns['5Y']}%</p>
              </div>
            </div>
          </div>
          {navHistory.length > 0 && (
            <div className="mt-6">
              <h3 className="text-2xl font-bold mb-4 text-center">NAV History</h3>
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
                      <td className="px-4 py-2 text-center">{entry.date}</td>
                      <td className="px-4 py-2 text-center">{entry.nav}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
    <div className="p-6 flex bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <div className="w-1/4 pr-4">
        <input
          type="text"
          placeholder="Search funds..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-lg"
        />
        {subcategoryMappings[activeTab]?.length > 0 && (
          <div className="flex flex-col gap-2">
            {subcategoryMappings[activeTab].map((subcategory) => (
              <button
                key={subcategory}
                onClick={() => setSelectedSubcategory(subcategory)}
                className={`px-4 py-2 ${
                  selectedSubcategory === subcategory ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
              >
                {subcategory}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="w-3/4">
        <div className="mb-4">
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
        {loading ? (
          <div>Loading funds data...</div>
        ) : filteredFunds.length > 0 ? (
          <div>
            {filteredFunds.map((fund, index) => (
              <div
                key={`${fund.schemeCode}-${index}`}
                onClick={() => setSelectedFund(fund)}
                className="cursor-pointer bg-white shadow-lg rounded-lg mb-4 p-4 hover:bg-gray-100"
              >
                <h2 className="text-lg font-bold">{fund.schemeName}</h2>
                <p>Code: {fund.schemeCode}</p>
              </div>
            ))}
          </div>
        ) : (
          <div>No funds available for the selected category.</div>
        )}
      </div>
    </div>
  );
};

export default MutualFundsDashboard;
