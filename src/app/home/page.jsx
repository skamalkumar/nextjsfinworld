'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";


const YOUTUBE_API_KEY = 'AIzaSyBb2CXSFB4DVIbtY3KLLOPU_5mIGdS5g4g';
const CHANNEL_ID = 'UC4WbdkC-Nn0svTmXhUir0DQ'; // Replace with your YouTube channel ID

const fetchYoutubeVideos = async () => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=6`
    );
    return response.data.items;
  } catch (error) {
    console.error("Error fetching YouTube videos", error);
    return [];
  }
};

function Homepage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const videoData = await fetchYoutubeVideos();
      setVideos(videoData);
    };
    getVideos();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        

        {/* New section for YouTube videos */}
        <section className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-20 flex items-center justify-center rounded-lg mx-4 my-2 shadow-lg">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
              Latest Videos
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
          </div>
          </section>
      </main>
    </div>
  );
}

export default Homepage;