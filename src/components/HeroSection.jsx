'use client';
import { useState, useEffect } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [carouselItems, setCarouselItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/skamalkumar/finworldarticles/contents/content/articles"
        );
        const data = await response.json();

        if (Array.isArray(data)) {
          const postFiles = data.filter((item) => item.name.endsWith(".html"));

          const items = await Promise.all(
            postFiles.map(async (post) => {
              const baseSlug = post.name.replace(".html", "");
              const title = baseSlug.split("-").join(" ");
              const extensions = [".webp", ".jpg", ".png"];
              let imageUrl = null;

              for (const ext of extensions) {
                const encodedImageFileName = encodeURIComponent(baseSlug + ext);
                const potentialUrl = `https://raw.githubusercontent.com/skamalkumar/finworldarticles/main/content/images/${encodedImageFileName}`;

                try {
                  const imageResponse = await fetch(potentialUrl);
                  if (imageResponse.ok) {
                    imageUrl = potentialUrl;
                    break;
                  }
                } catch (error) {
                  console.error(`Error checking image at: ${potentialUrl}`, error);
                }
              }

              return {
                slug: baseSlug,
                imageUrl,
                title
              };
            })
          );

          setCarouselItems(items.filter((item) => item.imageUrl));
        }
      } catch (error) {
        console.error("Error fetching carousel data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCarouselData();
  }, []);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  if (loading) {
    return <div>Loading carousel...</div>;
  }

  return (
    <section className="flex flex-col lg:flex-row justify-between items-center bg-blue-600 text-white py-12 px-4 lg:px-8 rounded-md mx-4 my-2">
      {/* Text Content */}
      <div className="max-w-lg mb-8 lg:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">The Future of Wealth Management</h1>
        <p className="mb-6 text-sm md:text-base">
        Amplify your financial potential with elite investment intelligence, powered by state-of-the-art technology – zero barriers, zero cost, maximum impact.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 md:py-3 md:px-6 rounded hover:bg-blue-400">
          Find Out More
        </button>
      </div>

      {/* Sliding Container */}
      <div className="relative w-full lg:w-1/2 aspect-video overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {carouselItems.map((item) => (
            <div key={item.slug} className="flex-shrink-0 w-full">
              <Link
                href={`/blog/${item.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-video"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={item.imageUrl}
                    alt={`Image for ${item.slug}`}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                  />
                </div>
                
                {/* Title Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <h3 className="text-white text-base md:text-lg font-semibold capitalize">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 md:p-3 rounded-full hover:bg-black/70 transition-colors"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 md:p-3 rounded-full hover:bg-black/70 transition-colors"
        >
          &#10095;
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }
              }}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                currentIndex === index ? 'bg-white w-4' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
