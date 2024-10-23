// pages/api/candlestick-pattern.js
import yahooFinance from 'yahoo-finance2';
import { Doji, Hammer, BullishEngulfingPattern } from 'technicalindicators';

const NIFTY_100_SYMBOLS = [
    "ABB.NS",
    "ADANIENSOL.NS",
    // ... rest of your symbols ...
];

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { pattern } = req.body;
    const endDate = new Date();
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 1);

    const results = [];

    // Process symbols in smaller batches to avoid rate limiting
    for (const symbol of NIFTY_100_SYMBOLS) {
      try {
        const stockData = await yahooFinance.historical(symbol, {
          period1: startDate,
          period2: endDate,
          interval: '1d'
        });

        if (!stockData || stockData.length < 2) continue;

        const input = {
          open: stockData.map(d => d.open),
          high: stockData.map(d => d.high),
          low: stockData.map(d => d.low),
          close: stockData.map(d => d.close)
        };

        let patternMatch = false;

        switch (pattern) {
          case 'Doji':
            patternMatch = new Doji().hasPattern(input);
            break;
          case 'Hammer':
            patternMatch = new Hammer().hasPattern(input);
            break;
          case 'Engulfing':
            patternMatch = new BullishEngulfingPattern().hasPattern(input);
            break;
        }

        if (patternMatch) {
          const lastPrice = stockData[stockData.length - 1].close;
          results.push({
            symbol,
            lastPrice: lastPrice.toFixed(2),
            date: stockData[stockData.length - 1].date
          });
        }

        // Add a small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100));

      } catch (symbolError) {
        console.error(`Error processing ${symbol}:`, symbolError);
        continue;
      }
    }

    return res.status(200).json({
      pattern,
      results,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}