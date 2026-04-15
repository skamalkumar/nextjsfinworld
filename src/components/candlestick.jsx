'use client';
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

export default function CandlestickScreener() {
  const [pattern, setPattern] = useState('Doji');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePatternScreen = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/candlestick-pattern', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pattern }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch results');
      }

      setResults(data);
    } catch (err) {
      setError(err.message || 'Error fetching candlestick patterns');
      console.error('Screen error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto mt-6">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Candlestick Pattern Screener
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex flex-col gap-4">
            <label className="text-sm font-medium">Select Pattern</label>
            <Select 
              value={pattern} 
              onValueChange={setPattern}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a pattern" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Doji">Doji</SelectItem>
                <SelectItem value="Hammer">Hammer</SelectItem>
                <SelectItem value="Engulfing">Bullish Engulfing</SelectItem>
              </SelectContent>
            </Select>
            
            <Button 
              onClick={handlePatternScreen}
              disabled={loading}
              className="w-full"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Scanning Stocks...
                </>
              ) : (
                'Screen Stocks'
              )}
            </Button>
          </div>

          {error && (
            <div className="p-4 text-red-500 bg-red-50 rounded-md">
              {error}
            </div>
          )}

          {results && results.results && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">
                Found {results.results.length} matches for {results.pattern} pattern
              </h3>
              <div className="grid gap-2">
                {results.results.map((result, index) => (
                  <div 
                    key={`${result.symbol}-${index}`}
                    className="p-3 bg-gray-50 rounded-lg flex justify-between items-center"
                  >
                    <span className="font-medium">{result.symbol}</span>
                    <span className="text-gray-600">₹{result.lastPrice}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {results && results.results && results.results.length === 0 && (
            <div className="text-center text-gray-500 mt-6">
              No stocks matching the {pattern} pattern were found.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}