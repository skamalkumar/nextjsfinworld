'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function FundsPage() {
  const [funds, setFunds] = useState([]); // List of funds
  const [selectedFund, setSelectedFund] = useState(''); // Selected fund code
  const [fundData, setFundData] = useState(null); // Specific fund data (meta)
  const [navHistory, setNavHistory] = useState([]); // NAV history
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch the list of mutual funds
  useEffect(() => {
    async function fetchFunds() {
      try {
        const response = await axios.get('https://api.mfapi.in/mf');
        setFunds(response.data); // Assuming response.data contains the list of funds
      } catch (error) {
        console.error('Error fetching funds:', error);
      }
    }
    fetchFunds();
  }, []);

  // Fetch data for a specific mutual fund
  const fetchFundData = async (schemeCode) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.mfapi.in/mf/${schemeCode}`);
      const { meta, data } = response.data; // Destructure meta and data
      setFundData(meta); // Set metadata of the fund
      setNavHistory(data); // Set NAV history
    } catch (error) {
      console.error('Error fetching fund data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Filter funds based on the search term
  const filteredFunds = (funds || []).filter((fund) =>
    fund.schemeName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Mutual Funds</h1>
      
      {/* Search input */}
      <input
        type="text"
        placeholder="Search funds..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      {/* Dropdown to select a fund */}
      <select
        onChange={(e) => setSelectedFund(e.target.value)}
        value={selectedFund}
      >
        <option value="">Select a Fund</option>
        {filteredFunds.map((fund, index) => (
          <option key={`${fund.schemeCode}-${index}`} value={fund.schemeCode}>
            {fund.schemeName}
          </option>
        ))}
      </select>

      {/* Button to fetch specific fund data */}
      {selectedFund && (
        <button onClick={() => fetchFundData(selectedFund)}>
          {loading ? 'Loading...' : 'Fetch Fund Data'}
        </button>
      )}

      {/* Display fund data */}
      {fundData && (
        <div>
          <h2>Fund Details</h2>
          <p>Scheme Name: {fundData.scheme_name}</p>
          <p>Scheme Type: {fundData.scheme_type}</p>
          <p>Fund House: {fundData.fund_house}</p>
        </div>
      )}

      {/* Display NAV history */}
      {navHistory.length > 0 && (
        <div>
          <h3>NAV History</h3>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>NAV</th>
              </tr>
            </thead>
            <tbody>
              {navHistory.map((navEntry, index) => (
                <tr key={index}>
                  <td>{navEntry.date}</td>
                  <td>{navEntry.nav}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* No fund data available message */}
      {!fundData && !loading && <p>No data available for the selected fund.</p>}
    </div>
  );
}
