// src/app/mutual-funds/[category]/[fund]/page.jsx
'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const FundDetails = ({ params }) => {
  const { fund, category } = params;
   const [navHistory, setNavHistory] = useState([]);
  const [returns, setReturns] = useState({});
  const [loading, setLoading] = useState(true);
     const router = useRouter()

    const handleBack = () => {
        router.push(`/mutual-funds/${category}`)
    }
   useEffect(() => {
    const fetchFundDetails = async () => {
      try {
         const response = await axios.get('https://api.mfapi.in/mf/' + fund);
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
        onClick={handleBack}
        className="px-4 py-2 mb-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 w-full md:w-auto"
      >
        Back to Funds List
      </button>
      {loading ? (
        <div className="text-center py-8">Loading details...</div>
      ) : (
        <div>
          <h2 className="text-xl md:text-3xl font-bold text-blue-700 break-words">Scheme Code: {fund}</h2>
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
                        key={index}
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

export default FundDetails;