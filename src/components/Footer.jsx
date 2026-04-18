import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaLinkedinIn,
  FaYoutube,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-10 px-6 rounded-lg shadow-xl mx-4 my-6">
      <div className="container mx-auto max-w-6xl">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">

          {/* Blog Section */}
          <div className="text-center md:text-left">
            <Link href="/blog" className="group">
              <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-200 transition">
                Blog
              </h3>
              <p className="text-blue-100 hidden md:block">
                Explore financial insights and expert guidance
              </p>
              <div className="hidden md:block mt-3">
                <span className="inline-block bg-blue-700 hover:bg-blue-900 px-4 py-2 rounded-md transition">
                  Explore Articles
                </span>
              </div>
            </Link>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">
              Connect With Us
            </h3>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: <FaFacebook />, link: "https://www.facebook.com/thefinworldltd" },
                { icon: <FaXTwitter />, link: "https://x.com/HelloFinworld" },
                { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/kamalsrungarapu" },
                { icon: <FaYoutube />, link: "https://www.youtube.com/@FinWorldLtd" },
                { icon: <FaInstagram />, link: "https://www.instagram.com/hellofinworld" },
                { icon: <FaPinterest />, link: "https://www.pinterest.com/hellofinworld" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center bg-blue-700 hover:bg-blue-900 p-3 rounded-full transition transform hover:scale-110"
                >
                  <span className="w-6 h-6">{item.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400 my-6"></div>

        {/* Bottom Section */}
        <div className="text-center space-y-3">

          <p className="font-medium">
            © 2024 FinWorld. All rights reserved.
          </p>

          <p className="text-sm text-blue-100">
            AMFI Registration No: ARN-102132
          </p>

          <div className="mt-4 p-4 bg-blue-700 bg-opacity-40 rounded-lg max-w-3xl mx-auto">
            <p className="text-sm">
              <span className="text-yellow-300 font-semibold">
                Financial Disclaimer:
              </span>{" "}
              Investments are subject to market risks. Please read all related
              documents carefully and consult a qualified advisor before making
              investment decisions. Past performance is not indicative of future
              results.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;