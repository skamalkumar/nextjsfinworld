'use client'
import { useState, useEffect } from "react";

export default function HeroSection() {
  const images = [
    "/images/financialplanning/wealth_management_dashboard.jpg",
    "/images/financialplanning/investment_analysis_dashboard.jpg",
    "/images/financialplanning/retirement_planning_dashboard.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto-swipe effect
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <section className="flex justify-between items-center bg-blue-600 text-white py-16 px-8 rounded-md mx-4 my-2">
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold mb-4">The future of wealth management</h1>
        <p className="mb-6">
          Access expert financial advice and investment solutions, powered by cutting-edge technology, at a fraction of the cost.
        </p>
        <button className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-400">
          Find Out More
        </button>
      </div>

      <div className="w-1/2 rounded-md relative">
        <div className="rounded-lg shadow-lg overflow-hidden">
          <img
            src={images[currentIndex]}
            alt="Carousel Image"
            className="w-full h-full object-cover"
          />
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r-md"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l-md"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}