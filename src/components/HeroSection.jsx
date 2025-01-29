'use client';
import { useState, useEffect } from "react";
import Link from "next/link";

const imageFiles = [
  "5 Mantras for Successful Investments.jpeg",
  "Are Your Investments Working.jpeg",
  "overcome inflation with investing.jpeg",
  "sip-pill.jpg",
  "think decades not days.jpeg"
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageFiles.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + imageFiles.length) % imageFiles.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col lg:flex-row justify-between items-center bg-gray-800 text-white py-16 px-6 lg:px-12 rounded-md mx-4 my-2 relative">
      {/* Text Content */}
      <div className="max-w-lg mb-10 lg:mb-0">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-blue-300">
          Empower Your Financial Future with Experts You Can Trust
        </h1>
        <p className="mb-8 text-base md:text-lg leading-relaxed text-gray-300">
        Globally recognized with SEBI, AMFI, and UK Companies House registrations. We architect personalized financial strategies to build and protect your wealth. Your prosperity drives our purpose
        </p>
        <Link href="/contactus">
          <button className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-500 transition-all">
            Get Started
          </button>
        </Link>
      </div>

      {/* Sliding Carousel */}
      <div className="relative w-full lg:w-1/2 h-[400px] overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {imageFiles.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full">
              <div className="w-full h-full relative">
                <img
                  src={`/images/herosection/${image}`}
                  alt={image.replace(".jpg", "")}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-all"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-all"
        >
          &#10095;
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {imageFiles.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index ? 'bg-white' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}