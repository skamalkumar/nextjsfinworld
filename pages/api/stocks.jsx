// pages/api/stocks.js

import yahooFinance from 'yahoo-finance2';

export default async function handler(req, res) {
  const { method } = req;

  if (method === 'GET') {
    try {
      // List of some popular Indian stocks
      const symbols = ['RELIANCE.NS', 'TCS.NS', 'HDFCBANK.NS', 'INFY.NS', 'ICICIBANK.NS', 'HINDUNILVR.NS', 'ITC.NS', 'SBIN.NS', 'BAJFINANCE.NS', 'BHARTIARTL.NS'];
      
      const stocksData = await Promise.all(
        symbols.map(async (symbol) => {
          const quote = await yahooFinance.quote(symbol);
          return {
            symbol: quote.symbol,
            name: quote.longName,
            sector: quote.sector,
            marketCap: quote.marketCap,
            pe: quote.trailingPE,
            dividend: quote.dividendYield ? quote.dividendYield * 100 : 0,
          };
        })
      );

      res.status(200).json(stocksData);
    } catch (error) {
      console.error('Error fetching stock data:', error);
      res.status(500).json({ error: 'Error fetching stock data' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}