'use client';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from 'next/link';

const YOUTUBE_API_KEY = 'AIzaSyBb2CXSFB4DVIbtY3KLLOPU_5mIGdS5g4g';
const CHANNEL_ID = 'UC4WbdkC-Nn0svTmXhUir0DQ'; // Replace with your YouTube channel ID

const fetchYoutubeVideos = async (maxResults) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${maxResults}`
    );
    return response.data.items;
  } catch (error) {
    console.error("Error fetching YouTube videos", error);
    return [];
  }
};

function Homepage() {
  const [videos, setVideos] = useState([]);
  const [displayCount, setDisplayCount] = useState(6); // Initial videos to display

  useEffect(() => {
    const getVideos = async () => {
      const videoData = await fetchYoutubeVideos(displayCount);
      setVideos(videoData);
    };
    getVideos();
  }, [displayCount]);

  const handleShowMore = async () => {
    const newDisplayCount = displayCount + 6; // Increment by 6 videos
    setDisplayCount(newDisplayCount);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Section for Financial Planning Cards */}
        <section className="py-12 bg-gray-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
              Financial Planning for All Ages
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  title: "Family Guard", 
                  description: "A safety net for you and your family in times of need, offering financial protection and security. ",
                  image: "/images/financialplanning/family_guard.webp", 
                  link: "/financialplanning/insuranceplanning/lifeinsurance"
                },
                { 
                  title: "Dream Builders", 
                  description: "Invest today to make your dreams come true tomorrow, from education to retirement goals.",
                  image: "/images/financialplanning/Dream_Builders.webp", 
                  link: "/financialplanning/investmentplanning"
                },
                { 
                  title: "Clever Saving", 
                  description: "Optimize your finances by saving wisely and planning tax to keep more of what you earn.",
                  image: "/images/financialplanning/Clever_Saving.webp", 
                  link: "/financialplanning/taxplanning"
                },
                { 
                  title: "Future Plans", 
                  description: "Ensure your family’s future is secure by planning for tomorrow’s needs today.",
                  image: "/images/financialplanning/future_plans.jpg", 
                  link: "/financialplanning/willplanning"
                }
              ].map((card, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                  <img src={card.image} alt={card.title} className="w-full h-32 object-cover rounded-lg mb-4" />
                  <h3 className="text-xl font-semibold mb-4 text-blue-700">{card.title}</h3>
                  <p className="text-gray-600 mb-4">{card.description}<a href={card.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold hover:underline">Know More</a></p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Existing section for YouTube videos */}
        <section className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-20 flex items-center justify-center rounded-lg mx-4 my-2 shadow-lg">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
              Latest Stock Market Videos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video) => (
                <div key={video.id.videoId} className="bg-gray-100 rounded-lg shadow-md p-4">
                  <img
                    src={video.snippet.thumbnails.high.url}
                    alt={video.snippet.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      {video.snippet.title}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {video.snippet.description}
                    </p>
                    <a
                      href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 font-bold hover:underline"
                    >
                      Watch Video
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <button 
                onClick={handleShowMore} 
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Show More
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Homepage;
