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

//herosection should be used if there is a problem with github

'use client'
import { useState, useEffect } from "react";

export default function HeroSection() {
  const images = [
    "/images/financialplanning/wealth_management_dashboard.jpg",
    "/images/financialplanning/investment_analysis_dashboard.jpg",
    "/images/financialplanning/retirement_planning_dashboard.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto-swipe effect
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <section className="flex justify-between items-center bg-blue-600 text-white py-16 px-8 rounded-md mx-4 my-2">
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold mb-4">The future of wealth management</h1>
        <p className="mb-6">
          Access expert financial advice and investment solutions, powered by cutting-edge technology, at a fraction of the cost.
        </p>
        <button className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-400">
          Find Out More
        </button>
      </div>

      <div className="w-1/2 rounded-md relative">
        <div className="rounded-lg shadow-lg overflow-hidden">
          <img
            src={images[currentIndex]}
            alt="Carousel Image"
            className="w-full h-full object-cover"
          />
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r-md"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l-md"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}