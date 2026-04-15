'use client';

import React, { useState, useEffect } from "react";
import axios from "axios";
import { NextSeo } from "next-seo";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchTerms = [
    "Indian stock market",
    "Sensex today",
    "NSE updates",
    "financial news India",
    "stock market analysis"
  ];

  const fetchNews = async () => {
    try {
      setLoading(true);
      setError(null);

      const randomSearchTerm =
        searchTerms[Math.floor(Math.random() * searchTerms.length)];

      // ✅ NEW WORKING PROXY
      const apiUrl = `https://gnews.io/api/v4/search?q=${encodeURIComponent(randomSearchTerm)}&lang=en&max=6&sortBy=publishedAt&token=17648c5fcf1ebe5e55bed016469ff355`;

      const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(apiUrl)}`;

      const response = await axios.get(proxyUrl);

      console.log("DATA:", response.data);

      if (response.data && response.data.articles) {
        setNews(response.data.articles);
      } else {
        setError("No articles available.");
      }

    } catch (err) {
      console.error("ERROR:", err);
      setError("Failed to load news. Try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      <NextSeo
        title="Latest Finance News - Indian Stock Market Updates"
        description="Stay updated with the latest finance news on the Indian stock market."
      />

      <div className="min-h-screen p-4 bg-gradient-to-r from-green-400 to-blue-500">

        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          Latest Finance News
        </h1>

        {loading && <p className="text-center text-white">Loading news...</p>}

        {error && (
          <div className="text-center text-red-200">
            <p>{error}</p>
            <button
              onClick={fetchNews}
              className="mt-3 bg-white text-black px-4 py-2 rounded"
            >
              Retry
            </button>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {news.map((article, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                {article.image && (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded mb-3"
                  />
                )}

                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-blue-800 hover:underline"
                >
                  {article.title}
                </a>

                <p className="text-gray-700 mt-2">
                  {article.description || "No description available"}
                </p>

                <p className="text-sm text-gray-500 mt-2">
                  {article.publishedAt
                    ? new Date(article.publishedAt).toLocaleString()
                    : ""}
                </p>
              </div>
            ))}

          </div>
        )}
      </div>
    </>
  );
};

export default NewsPage;