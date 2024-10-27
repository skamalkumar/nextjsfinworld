'use client';

import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "@/components/Header";
import { NextSeo } from "next-seo";

const NewsPage = () => {
  const [news, setNews] = useState([]); // Stores the articles
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // Tracks the page number for pagination
  const [hasMore, setHasMore] = useState(true); // Whether there are more articles to load

  // Rate limit delay (e.g., 1 second between requests)
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const fetchNews = async (pageNumber = 1) => {
    try {
      await delay(1000);

      const response = await axios.get("https://newsapi.org/v2/everything", {
        params: {
          q: 'Indian stock market OR Sensex OR Nifty OR BSE OR NSE',
          apiKey: 'fa50276286ca40b9811738b00915c7a2',
          language: 'en',
          sortBy: 'publishedAt',
          pageSize: 6,
          page: pageNumber,
          sources: 'the-hindu,livemint,times-of-india,business-standard,financial-express,cnbc,financial-times,bloomberg,news18,the-economic-times,reuters,moneycontrol,ndtv',
          domains: 'economictimes.indiatimes.com,livemint.com,business-standard.com,financialexpress.com,cnbc.com,moneycontrol.com,bloomberg.com,ndtv.com,reuters.com'
        },
      });

      const articles = response.data.articles;

      if (articles.length > 0) {
        setNews((prevNews) => {
          if (pageNumber === 1) {
            return articles;
          }
          return [...prevNews, ...articles];
        });
        setHasMore(articles.length === 6);
      } else {
        setError("No articles found.");
        setHasMore(false);
      }

      setLoading(false);
    } catch (error) {
      setError("Error fetching data.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(page);
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <NextSeo
        title="Latest Finance News - Indian Stock Market Updates"
        description="Stay updated with the latest finance news on the Indian stock market, Sensex, Nifty, and other major financial topics."
        canonical="https://webkraft.netlify.app/blog"
        openGraph={{
          url: "https://webkraft.netlify.app/blog",
          title: "Latest Finance News - Indian Stock Market Updates",
          description: "Stay updated with the latest finance news on the Indian stock market, Sensex, Nifty, and other major financial topics.",
          images: news[0] && news[0].urlToImage ? [{ url: news[0].urlToImage }] : [],
          site_name: "WebKraft"
        }}
      />
      <div className="min-h-screen rounded-md m-3 flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Latest Finance News</h1>

        {loading ? (
          <p className="text-center">Loading news...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article, index) => (
              <div
                key={index}
                className="bg-green-300 bg-opacity-80 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <NextSeo
                  openGraph={{
                    url: article.url,
                    title: article.title,
                    description: article.description,
                    images: article.urlToImage ? [{ url: article.urlToImage }] : [],
                    site_name: article.source.name
                  }}
                  canonical={article.url}
                />
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-t-lg mb-4"
                  />
                )}
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xl font-semibold text-blue-900 hover:underline mb-2"
                >
                  {article.title}
                </a>
                <p className="text-gray-700 mb-2">{article.description}</p>
                <p className="text-sm text-gray-600">
                  {new Date(article.publishedAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}

        {hasMore && (
          <div className="text-center mt-6">
            <button
              onClick={handleLoadMore}
              className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-400"
            >
              Display More
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default NewsPage;
