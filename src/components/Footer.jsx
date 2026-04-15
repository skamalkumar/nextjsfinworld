import React from "react";
import Link from "next/link";
import { FaFacebook, FaLinkedinIn, FaYoutube, FaPinterest, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-10 px-6 rounded-lg shadow-xl mx-4 my-6">
      <div className="container mx-auto max-w-6xl">
        {/* Main footer section with 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
          {/* Left Column - Blog */}
          <div className="text-center md:text-left">
            <Link href="/blog" className="group">
              <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-200 transition-colors duration-300">Blog</h3>
              <p className="text-blue-100 hidden md:block">Explore our financial insights and expert advice</p>
              <div className="hidden md:block mt-3">
                <span className="inline-block bg-blue-700 hover:bg-blue-900 rounded-md px-4 py-2 transition-colors duration-300">
                  Read Latest Articles
                </span>
              </div>
            </Link>
          </div>

          {/* Middle Column - Social Media */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="grid grid-cols-3 gap-4">
              <a href="https://www.facebook.com/thefinworldltd" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center bg-blue-700 hover:bg-blue-900 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://x.com/HelloFinworld" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center bg-blue-700 hover:bg-blue-900 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                <FaXTwitter className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/kamalsrungarapu" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center bg-blue-700 hover:bg-blue-900 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                <FaLinkedinIn className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@FinWorldLtd" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center bg-blue-700 hover:bg-blue-900 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                <FaYoutube className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/hellofinworld" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center bg-blue-700 hover:bg-blue-900 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://www.pinterest.com/hellofinworld" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center bg-blue-700 hover:bg-blue-900 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                <FaPinterest className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Column - News */}
          <div className="text-center md:text-right">
            <Link href="/newspage" className="group">
              <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-200 transition-colors duration-300">News</h3>
              <p className="text-blue-100 hidden md:block">Stay updated with the latest financial market news</p>
              <div className="hidden md:block mt-3">
                <span className="inline-block bg-blue-700 hover:bg-blue-900 rounded-md px-4 py-2 transition-colors duration-300">
                  Latest Updates
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400 my-6"></div>

        {/* Footer legal information */}
        <div className="text-center">
          <p className="font-medium">&copy; 2024 FinWorld. All rights reserved.</p>
          <p className="mt-2 text-sm text-blue-100">
            SEBI Registration No: INZ000163138 | BSE Registration No: AP01668101166717 | NSE Registration No: AP3022002931 | AMFI Registration No: ARN-102132
          </p>
          <div className="mt-4 p-4 bg-blue-700 bg-opacity-40 rounded-lg max-w-3xl mx-auto">
            <p className="font-semibold">
              <span className="text-yellow-300">Financial Disclaimer:</span> Investments are subject to market risks. Please read the offer document carefully and consult your advisor before investing. Past performance is not indicative of future returns.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;