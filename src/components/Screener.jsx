'use client'
import { useEffect, useState } from 'react';
import yahooFinance from 'yahoo-finance2';

export default function StockScreener() {
  const [stockData, setStockData] = useState([]);
  
  useEffect(() => {
    // Fetch data from Yahoo Finance (e.g., for the Nifty 50 stocks)
    async function fetchStockData() {
      const symbols = ['RELIANCE.NS', 'TCS.NS', 'INFY.NS'];  // Sample stock symbols for Indian stocks
      try {
        const data = await yahooFinance.quote(symbols);
        setStockData(data);
      } catch (error) {
        console.error('Error fetching stock data', error);
      }
    }
    fetchStockData();
  }, []);
  
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white p-4">
        <h2 className="text-xl font-semibold mb-4">Screeners</h2>
        <ul>
          <li className="mb-2">
            <a href="#" className="text-blue-500">Fundamental Screeners</a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-500">Technical Screeners</a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-500">Intraday Screeners</a>
          </li>
        </ul>
      </aside>
      
      {/* Main content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Stock Screener</h1>
        <div className="grid grid-cols-3 gap-4">
          {stockData.length ? stockData.map((stock, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">{stock.symbol}</h2>
              <p>Price: ₹{stock.regularMarketPrice}</p>
              <p>Day High: ₹{stock.regularMarketDayHigh}</p>
              <p>Day Low: ₹{stock.regularMarketDayLow}</p>
            </div>
          )) : (
            <p>Loading...</p>
          )}
        </div>
      </main>
    </div>
  );
}
