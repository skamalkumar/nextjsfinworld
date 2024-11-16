// pages/fundData.js
'use client'
import { useState } from 'react';
import axios from 'axios';

export default function FundDataPage() {
  const [schemeCode, setSchemeCode] = useState('');
  const [fundData, setFundData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchFundData = async () => {
    setLoading(true);
    setError('');
    setFundData(null); // Reset previous data
    try {
      const response = await axios.get(`https://api.mfapi.in/mf/${schemeCode}`);
      setFundData(response.data.data);
    } catch (err) {
      setError('Could not fetch data. Please check the scheme code.');
    }
    setLoading(false);
  };

  const handleInputChange = (e) => setSchemeCode(e.target.value);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Mutual Fund NAV Data</h1>
      <input
        type="text"
        placeholder="Enter Scheme Code"
        value={schemeCode}
        onChange={handleInputChange}
        style={{ padding: '8px', marginRight: '10px' }}
      />
      <button onClick={fetchFundData} style={{ padding: '8px' }}>
        Get Data
      </button>

      {loading && <p>Loading data...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {fundData && fundData.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3>Data for Scheme Code: {schemeCode}</h3>
          <table border="1" cellPadding="8" cellSpacing="0" style={{ marginTop: '10px', width: '100%' }}>
            <thead>
              <tr>
                <th>Date</th>
                <th>NAV</th>
              </tr>
            </thead>
            <tbody>
              {fundData.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.date}</td>
                  <td>{entry.nav}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {fundData && fundData.length === 0 && !loading && <p>No data available for this scheme code.</p>}
    </div>
  );
}
