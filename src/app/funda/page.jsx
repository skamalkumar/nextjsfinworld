'use client'
import { useState } from 'react';

const StockPage = () => {
  const [symbol, setSymbol] = useState('');
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchStockData = async () => {
    if (!symbol) {
      setError('Please enter a stock symbol');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(`/api/scrapeData?symbol=${symbol}`);
      const data = await response.json();
      
      if (response.ok) {
        setStockData(data);
      } else {
        setError(data.error || 'Failed to fetch data');
      }
    } catch (err) {
      setError('An error occurred while fetching the data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Stock Data Scraper</h1>
      
      <div>
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          placeholder="Enter Stock Symbol (e.g. RELIANCE)"
        />
        <button onClick={fetchStockData} disabled={loading}>
          {loading ? 'Loading...' : 'Get Stock Data'}
        </button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {stockData && (
        <div>
          <h2>{stockData.symbol} Stock Information</h2>
          <p>Stock Price: {stockData.stockPrice}</p>
          <p>Market Cap: {stockData.marketCap}</p>
        </div>
      )}
    </div>
  );
};

export default StockPage;
