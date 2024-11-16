'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FundDetails = ({ fund, onBack }) => {
  const [navHistory, setNavHistory] = useState([]);
  const [returns, setReturns] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFundDetails = async () => {
      try {
        const response = await axios.get(`https://api.mfapi.in/mf/${fund.schemeCode}`);
        const { meta, data } = response.data;

        // NAV History
        setNavHistory(data);

        // Calculate Returns
        if (data.length > 0) {
          const latestNAV = parseFloat(data[0].nav);
          const oneYearOldNAV = parseFloat(data.find((entry, index) => index === 365)?.nav) || latestNAV;
          const threeYearOldNAV = parseFloat(data.find((entry, index) => index === 365 * 3)?.nav) || latestNAV;
          const fiveYearOldNAV = parseFloat(data.find((entry, index) => index === 365 * 5)?.nav) || latestNAV;

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
    <div className="p-4">
      <button
        onClick={onBack}
        className="px-4 py-2 mb-4 text-white bg-blue-500 rounded-lg"
      >
        Back to Funds List
      </button>
      {loading ? (
        <div>Loading details...</div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold">{fund.schemeName}</h2>
          <div className="mt-6">
  <h3 className="text-2xl font-bold mb-4 text-center">Fund Performance</h3>
  <div className="flex justify-evenly items-center bg-lightblue-100 p-4 rounded-lg shadow-md">
    <div className="text-center">
      <h4 className="text-lg font-semibold text-blue-800">1-Year Returns</h4>
      <p className="text-xl font-bold text-blue-600">{returns['1Y']}%</p>
    </div>
    <div className="text-center">
      <h4 className="text-lg font-semibold text-blue-800">3-Year Returns</h4>
      <p className="text-xl font-bold text-blue-600">{returns['3Y']}%</p>
    </div>
    <div className="text-center">
      <h4 className="text-lg font-semibold text-blue-800">5-Year Returns</h4>
      <p className="text-xl font-bold text-blue-600">{returns['5Y']}%</p>
    </div>
  </div>
</div>
          {navHistory.length > 0 && (
  <div className="mt-6">
    <h3 className="text-2xl font-bold mb-4 text-center">NAV History</h3>
    <table className="w-full border-collapse bg-lightblue-100 shadow-md rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-blue-200">
          <th className="px-4 py-2 text-center text-blue-800">Date</th>
          <th className="px-4 py-2 text-center text-blue-800">NAV</th>
        </tr>
      </thead>
      <tbody>
        {navHistory.map((navEntry, index) => (
          <tr
            key={index}
            className={index % 2 === 0 ? 'bg-white' : 'bg-lightblue-50'}
          >
            <td className="px-4 py-2 text-center">{navEntry.date}</td>
            <td className="px-4 py-2 text-center">{navEntry.nav}</td>
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
  const [funds, setFunds] = useState({
    index: [],
    equity: [],
    debt: [],
    hybrid: [],
    elss: [],
  });
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFund, setSelectedFund] = useState(null);

  useEffect(() => {
    const fetchFundsData = async () => {
      try {
        const response = await axios.get('https://api.mfapi.in/mf');
        const categorizedFunds = categorizeFunds(response.data || []);
        setFunds(categorizedFunds);
      } catch (error) {
        console.error('Error fetching funds:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFundsData();
  }, []);

  const categorizeFunds = (rawFunds) => {
    return {
      index: rawFunds.filter(fund => fund.schemeName?.toLowerCase().includes('index')),
      equity: rawFunds.filter(fund => fund.schemeName?.toLowerCase().includes('equity')),
      debt: rawFunds.filter(fund => fund.schemeName?.toLowerCase().includes('debt')),
      hybrid: rawFunds.filter(fund => fund.schemeName?.toLowerCase().includes('hybrid')),
      elss: rawFunds.filter(fund => fund.schemeName?.toLowerCase().includes('elss')),
    };
  };

  const filterFunds = (funds) => {
    return funds.filter(fund =>
      fund.schemeName?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  if (selectedFund) {
    return <FundDetails fund={selectedFund} onBack={() => setSelectedFund(null)} />;
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search funds..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded-lg"
        />
      </div>

      <div className="mb-4">
        <div className="flex space-x-2 border-b">
          {['index', 'equity', 'debt', 'hybrid', 'elss'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 ${
                activeTab === tab
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-500'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Funds
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="text-center py-8">Loading funds data...</div>
      ) : (
        <div>
         {filterFunds(funds[activeTab]).map((fund, index) => (
  <div
    key={`${fund.schemeCode}-${index}`} // Combine schemeCode with index for uniqueness
    onClick={() => setSelectedFund(fund)}
    className="cursor-pointer bg-white shadow-lg rounded-lg mb-4 p-4"
  >
    <h2 className="text-lg font-bold">{fund.schemeName}</h2>
    <p>Code: {fund.schemeCode}</p>
  </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MutualFundsDashboard;
