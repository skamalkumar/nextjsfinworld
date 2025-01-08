'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

// Slide wrapper component
const PresentationSlide = ({ children, className = '' }) => (
  <div className={`w-full h-96 p-8 bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-lg ${className}`}>
    {children}
  </div>
);

const InvestmentPresentation = () => {
  // Data that can be moved to a separate file
  const growthInvestments = [
    { title: 'Large-Cap Funds', amount: '₹8 Lakhs', returns: '10%-12% CAGR' },
    { title: 'Mid-Cap & Small-Cap', amount: '₹8 Lakhs', returns: '12%-15% CAGR' },
    { title: 'International Equity', amount: '₹4 Lakhs', returns: null }
  ];

  return (
    <div className="space-y-8 w-full max-w-4xl mx-auto p-4">
      {/* Title Slide */}
      <PresentationSlide className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/sampleplan/capitalprotection.png" 
            alt="Investment background"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* <div className="relative bg-white/80 p-8 rounded-lg backdrop-blur-sm text-center">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">Investment Plan</h1>
          <h2 className="text-3xl text-blue-700 mb-4">Capital Protection & Legacy Building</h2>
          <p className="text-2xl text-blue-600 font-medium">Tailored Mutual Fund Portfolio for a Spirited Retiree</p>
        </div> */}
      </PresentationSlide>

      {/* Portfolio Overview Slide */}
      <PresentationSlide>
        <div className="flex flex-col md:flex-row h-full gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Portfolio Allocation Overview</h2>
            <div className="space-y-4">
              <div className="bg-blue-100 p-4 rounded-lg">
                <p className="text-xl font-semibold text-blue-800">Total Corpus</p>
                <p className="text-3xl font-bold text-blue-900">₹40 Lakhs</p>
              </div>
              <div className="flex space-x-4">
                <div className="bg-green-100 p-4 rounded-lg flex-1">
                  <p className="font-medium text-green-800">Growth-Oriented</p>
                  <p className="text-xl font-bold text-green-900">₹20 Lakhs</p>
                </div>
                <div className="bg-purple-100 p-4 rounded-lg flex-1">
                  <p className="font-medium text-purple-800">Protection-Oriented</p>
                  <p className="text-xl font-bold text-purple-900">₹20 Lakhs</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 h-64">
            <Image
            src="/images/sampleplan/growthandprotection.png" 
              alt="Portfolio pie chart"
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </div>
      </PresentationSlide>

      {/* Growth-Oriented Investments Slide */}
      <PresentationSlide>
        <div className="flex flex-col md:flex-row h-full gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Growth-Oriented Investments</h2>
            <div className="space-y-4">
              {growthInvestments.map((investment, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <ChevronRight className="text-blue-500 flex-shrink-0" />
                    <p className="font-semibold text-blue-900">{investment.title}: {investment.amount}</p>
                  </div>
                  {investment.returns && (
                    <p className="text-sm text-blue-700 ml-6">Expected Returns: {investment.returns}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full md:w-1/2 h-64">
            <Image
              src="/images/sampleplan/growthandinvestment.png" 
              alt="Growth investment chart"
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </div>
      </PresentationSlide>

      {/* Expected Growth Summary */}
      <PresentationSlide>
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Expected Growth Summary</h2>
        <div className="flex flex-col md:flex-row gap-4 md:space-x-8">
          <div className="flex-1 bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-900 mb-4">Growth Portfolio</h3>
            <p className="text-3xl font-bold text-green-700 mb-2">₹96 Lakhs</p>
            <p className="text-sm text-green-600">in 15 years at 12% CAGR</p>
          </div>
          <div className="flex-1 bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-900 mb-4">Protection Portfolio</h3>
            <p className="text-3xl font-bold text-purple-700 mb-2">₹63.4 Lakhs</p>
            <p className="text-sm text-purple-600">in 15 years at 8% CAGR</p>
          </div>
        </div>
        <div className="mt-8 bg-blue-50 p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Total Expected Corpus</h3>
          <p className="text-4xl font-bold text-blue-700">₹1.6 Crore</p>
          <p className="text-sm text-blue-600">in 15 years</p>
        </div>
      </PresentationSlide>
    </div>
  );
};

export default InvestmentPresentation;