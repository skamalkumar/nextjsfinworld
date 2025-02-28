import React, { useState, useRef, useEffect } from 'react';
import { FaFacebook, FaYoutube, FaLinkedin, FaShareAlt, FaInstagram } from 'react-icons/fa';
import { FaPinterest } from "react-icons/fa";
import {FaXTwitter} from 'react-icons/fa6';

const SocialMediaDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <FaFacebook className="w-5 h-5" />,
      url: 'https://www.facebook.com/thefinworldltd',
      color: 'hover:text-blue-500'
    },
    {
      name: 'YouTube',
      icon: <FaYoutube className="w-5 h-5" />,
      url: 'https://www.youtube.com/@FinWorldLtd',
      color: 'hover:text-red-500'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/kamalsrungarapu/',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: <FaXTwitter className="w-5 h-5" />,
      url: 'https://x.com/HelloFinworld',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="w-5 h-5" />,
      url: 'https://www.instagram.com/hellofinworld',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Pinterest',
      icon: <FaPinterest className="w-5 h-5" />,
      url: 'https://www.pinterest.com/hellofinworld',
      color: 'hover:text-blue-600'
    }
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-white px-3 py-2 rounded-lg transition-all duration-300 hover:bg-blue-800"
      >
        <FaShareAlt className="w-5 h-5" />
        <span className="hidden md:inline">Social Media</span>
      </button>

      {isOpen && (
        <div className="absolute mt-2 right-0 w-48 bg-white rounded-lg shadow-lg py-2 z-50 transform transition-all duration-300 ease-in-out">
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                flex items-center space-x-3 px-4 py-3
                text-gray-700 hover:bg-gray-50
                transition-all duration-300
                ${social.color}
                ${index !== socialLinks.length - 1 ? 'border-b border-gray-100' : ''}
              `}
            >
              {social.icon}
              <span className="font-medium">{social.name}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default SocialMediaDropdown;