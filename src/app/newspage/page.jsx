'use client';

import React, { useState, useEffect } from "react";
import axios from "axios";
import { NextSeo } from "next-seo";

const fallbackNews = [
  {
    title: "Market Volatility Continues Amid Global Uncertainty",
    description: "Stock markets remain volatile as global economic conditions shift.",
    url: "#",
    image: "https://via.placeholder.com/400x200",
    publishedAt: new Date().toISOString()
  },
  {
    title: "Nifty and Sensex Show Mixed Trends",
    description: "Indian indices show mixed performance with sector rotation.",
    url: "#",
    image: "https://via.placeholder.com/400x200",
    publishedAt: new Date().toISOString()
  }
];

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    try {
      const apiUrl = `https://gnews.io/api/v4/search?q=stock%20market&lang=en&max=6&token=17648c5fcf1ebe5e55bed016469ff355`;

      const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(apiUrl)}`;

      const response = await axios.get(proxyUrl);

      if (response.data && response.data.articles) {
        setNews(response.data.articles);
      } else {
        throw new Error("No data");
      }

    } catch (error) {
      console.error("Using fallback news due to error:", error);

      // ✅ FALLBACK (VERY IMPORTANT)
      setNews(fallbackNews);
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
        title="Latest Finance News"
        description="Stay updated with the latest financial news."
      />

      <div className="min-h-screen p-4 bg-gradient-to-r from-green-400 to-blue-500">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          Latest Finance News
        </h1>

        {loading ? (
          <p className="text-center text-white">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded mb-3"
                />
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-blue-800"
                >
                  {article.title}
                </a>
                <p className="text-gray-700 mt-2">{article.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default NewsPage;