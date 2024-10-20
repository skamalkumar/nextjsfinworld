'use client'
import React, { useState, useEffect } from 'react';
import Header from './Header';

const IndianStockScreener = () => {
  const [filters, setFilters] = useState({
    sector: '',
    marketCap: '',
    pe: '',
    dividend: '',
  });
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await fetch('/api/stocks');
        if (!response.ok) {
          throw new Error('Failed to fetch stocks');
        }
        const data = await response.json();
        setStocks(data);
      } catch (error) {
        console.error('Error fetching stocks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    const filteredStocks = stocks.filter(stock => 
      (!filters.sector || stock.sector === filters.sector) &&
      (!filters.marketCap || stock.marketCap >= parseInt(filters.marketCap) * 10000000) &&
      (!filters.pe || stock.pe <= parseFloat(filters.pe)) &&
      (!filters.dividend || stock.dividend >= parseFloat(filters.dividend))
    );
    setStocks(filteredStocks);
  };

  if (loading) {
    return <div className="text-center p-4">Loading stocks data...</div>;
  }

  return (
    <>
    <Header/>

    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Indian Stock Screener</h2>
      <div className="flex flex-wrap gap-4 mb-4">
        <select
          name="sector"
          onChange={handleFilterChange}
          className="p-2 border rounded"
        >
          <option value="">All Sectors</option>
          {[...new Set(stocks.map(stock => stock.sector))].map(sector => (
            <option key={sector} value={sector}>{sector}</option>
          ))}
        </select>
        <input
          type="number"
          name="marketCap"
          placeholder="Min Market Cap (Cr)"
          onChange={handleFilterChange}
          className="p-2 border rounded"
        />
        <input
          type="number"
          name="pe"
          placeholder="Max P/E Ratio"
          onChange={handleFilterChange}
          className="p-2 border rounded"
        />
        <input
          type="number"
          name="dividend"
          placeholder="Min Dividend Yield (%)"
          onChange={handleFilterChange}
          className="p-2 border rounded"
        />
        <button
          onClick={applyFilters}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Apply Filters
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">Symbol</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Sector</th>
              <th className="p-2 text-left">Market Cap (Cr)</th>
              <th className="p-2 text-left">P/E Ratio</th>
              <th className="p-2 text-left">Dividend Yield (%)</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock) => (
              <tr key={stock.symbol} className="border-b">
                <td className="p-2">{stock.symbol}</td>
                <td className="p-2">{stock.name}</td>
                <td className="p-2">{stock.sector}</td>
                <td className="p-2">{(stock.marketCap / 10000000).toFixed(2)}</td>
                <td className="p-2">{stock.pe ? stock.pe.toFixed(2) : 'N/A'}</td>
                <td className="p-2">{stock.dividend.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default IndianStockScreener;