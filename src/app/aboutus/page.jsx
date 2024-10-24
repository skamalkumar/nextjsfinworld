import React from 'react';
import Header from '@/components/Header';

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen rounded-md m-3 flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-4">
        {/* Header Section */}
        <header className="w-full bg-blue-900 p-6 text-white text-center shadow-md">
          <h1 className="text-4xl font-extrabold tracking-wide">FinWorld</h1>
          <p className="text-xl mt-2">Your partner in holistic wealth management</p>
        </header>

        {/* Main Content with Zigzag Layout */}
        <div className="text-center max-w-screen-lg leading-relaxed mt-10 p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-8 text-blue-900">About Us</h1>
          <p className="text-xl mb-6 text-gray-700">
            Welcome to <span className="font-bold text-blue-900">FinWorld</span> – your partner in holistic wealth management. Our mission is to simplify and streamline wealth management for individuals and families, ensuring their financial well-being through personalized solutions that adapt to your unique needs.
          </p>

          {/* Vision Section with Image */}
          <div className="md:flex md:items-center md:justify-between mt-12">
            <div className="md:w-1/2 md:pr-8">
              <h2 className="text-3xl font-semibold text-blue-700 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                At FinWorld, we envision a world where wealth management is accessible to everyone. Our inclusive vision offers tailored solutions for different phases of your financial journey.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/images/aboutus/path_to_vision_image.webp" 
                alt="Our Vision" 
                className="rounded-lg shadow-lg mb-6"
              />
            </div>
          </div>

          {/* Mission Section with Image on the Opposite Side */}
          <div className="md:flex md:items-center md:justify-between mt-12 md:flex-row-reverse">
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-semibold text-blue-700 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                We empower individuals with a personalized approach to wealth management. Our goal is to guide you through comprehensive financial planning, helping you manage your wealth effectively, grow your investments, and secure your future.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/images/aboutus/path_to_mission_image.jfif" 
                alt="Our Mission" 
                className="rounded-lg shadow-lg mb-6"
              />
            </div>
          </div>

          {/* What Makes Us Different Section */}
          <h2 className="text-3xl font-semibold mt-10 mb-6 text-blue-700">What Makes Us Different?</h2>

          {/* Differentiators with Zigzag Layout */}
          <div className="mt-8">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-1/2 md:pr-8">
                <h3 className="text-xl font-bold mb-3 text-blue-900">1. Personalized Financial Strategies</h3>
                <p className="text-lg text-gray-600">
                  We create custom financial strategies based on your unique goals and circumstances.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="/images/aboutus/path_to_financial_strategies_image.jfif" 
                  alt="Personalized Financial Strategies" 
                  className="rounded-lg shadow-lg mb-6"
                />
              </div>
            </div>

            <div className="md:flex md:items-center md:justify-between mt-12 md:flex-row-reverse">
              <div className="md:w-1/2 md:pl-8">
                <h3 className="text-xl font-bold mb-3 text-blue-900">2. Cutting-Edge Technology</h3>
                <p className="text-lg text-gray-600">
                  We use real-time insights, data analysis, and market trends to help you make informed decisions.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="/images/aboutus/path_to_technology_image.jfif" 
                  alt="Cutting-Edge Technology" 
                  className="rounded-lg shadow-lg mb-6"
                />
              </div>
            </div>

            {/* Continue for other differentiators */}
          </div>

          {/* Services Section */}
          <h2 className="text-3xl font-semibold mt-10 mb-6 text-blue-700">Our Services</h2>
<div className="md:flex md:items-center md:justify-between mt-12">
  <div className="md:w-1/2 md:pr-8">
    <ul className="list-disc list-inside mb-6 text-left text-gray-600">
      <li className="mb-3"><span className="font-bold">Comprehensive Financial Planning:</span> Address all aspects of your financial life.</li>
      <li className="mb-3"><span className="font-bold">Investment Management:</span> Grow your wealth while minimizing risk.</li>
      <li className="mb-3"><span className="font-bold">Tax Optimization Strategies:</span> Make the most of tax-efficient investments.</li>
      <li className="mb-3"><span className="font-bold">Retirement Planning:</span> Save efficiently and enjoy stress-free retirement.</li>
      <li className="mb-3"><span className="font-bold">Estate and Legacy Planning:</span> Ensure your legacy is preserved as per your wishes.</li>
      <li className="mb-3"><span className="font-bold">Risk Management:</span> Protect your wealth with smart risk management strategies.</li>
    </ul>
  </div>
  <div className="md:w-1/2">
    <img 
      src="/images/aboutus/path_to_services_image.jfif" 
      alt="Our Services" 
      className="rounded-lg shadow-lg mb-6"
    />
  </div>
</div>

          {/* Call to Action */}
          <h2 className="text-3xl font-semibold mt-10 mb-6 text-blue-700">Contact Us</h2>
          <p className="text-lg mb-6 text-gray-600">
            Ready to take control of your financial future? Contact us today and let us show you how FinWorld can help you achieve your financial goals.
          </p>

          <button className="px-6 py-3 mt-6 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-all">
            Get in Touch
          </button>

          <p className="text-xl font-semibold mt-10 text-gray-800">
            Welcome to FinWorld, where your wealth meets holistic management.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
