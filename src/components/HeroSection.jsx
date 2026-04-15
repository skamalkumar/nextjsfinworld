'use client';
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const imageFiles = [
  "5 Mantras for Successful Investments.jpeg",
  "Are Your Investments Working.jpeg",
  "overcome inflation with investing.jpeg",
  "sip-pill.jpg",
  "think decades not days.jpeg"
];

const companies = [
  { name: "Axis Bank", logo: "https://logo.clearbit.com/axisbank.com" },
  { name: "HDFC Bank", logo: "https://logo.clearbit.com/hdfcbank.com" },
  { name: "ICICI Bank", logo: "https://logo.clearbit.com/icicibank.com" },
  { name: "SBI", logo: "https://logo.clearbit.com/sbi.co.in" },
  { name: "Edelweiss", logo: "https://logo.clearbit.com/edelweissfin.com" },
  { name: "Tata", logo: "https://logo.clearbit.com/tata.com" },
  { name: "Mirae Asset", logo: "https://logo.clearbit.com/miraeassetmf.co.in" },
  { name: "Nippon", logo: "https://logo.clearbit.com/nipponindiaim.com" },
  { name: "UTI", logo: "https://logo.clearbit.com/utimf.com" },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef(null);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageFiles.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const scroll = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 1;
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 3) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    };
    const scrollInterval = setInterval(scroll, 30);
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <>
      <section className="flex flex-col lg:flex-row justify-between items-center bg-gray-800 text-white py-16 px-6 lg:px-12 rounded-md mx-4 my-2 relative">
        <div className="max-w-lg mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-blue-300">
            Empower Your Financial Future with Experts You Can Trust
          </h1>
          <p className="mb-8 text-base md:text-lg leading-relaxed text-gray-300">
            Globally recognized with SEBI, AMFI, and UK Companies House registrations. We architect personalized financial strategies to build and protect your wealth.
          </p>
          <Link href="/contactus">
            <button className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-500 transition-all">
              Get Started
            </button>
          </Link>
        </div>
        <div className="relative w-full lg:w-1/2 h-[400px] overflow-hidden rounded-lg shadow-lg">
          <div className="flex h-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {imageFiles.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-full h-full">
                <img src={`/images/herosection/${image}`} alt={image.replace(".jpg", "")} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="my-10 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Proudly Partnered With</h2>
        <div className="relative overflow-hidden">
          <div ref={carouselRef} className="flex w-full overflow-x-auto whitespace-nowrap scrollbar-hide">
            {[...companies, ...companies, ...companies].map((company, index) => (
              <div key={index} className="flex-shrink-0 w-1/4 px-4">
                <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
                  <img src={company.logo} alt={`${company.name} Logo`} className="h-16 w-32 object-contain mb-2" onError={(e) => (e.target.style.display = 'none')} />
                  <p className="text-lg font-medium text-gray-700">{company.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
