'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ZigzagSection = ({ image, title, content, reverse = false }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className={`my-16 flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-8`}
  >
    <div className="md:w-1/2">
      <Image
        src={image}
        alt={title}
        width={800}
        height={400}
        className="rounded-2xl shadow-md"
      />
    </div>
    <div className="md:w-1/2">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">{title}</h2>
      <div className="text-gray-700 space-y-4 text-lg">{content}</div>
    </div>
  </motion.section>
);

export default function EquityResearchProgram() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
          Equity Research Analyst – Career Launchpad
        </h1>
        <p className="text-xl text-gray-600">
          Master Equity Analysis and Valuation Techniques – Tailored for Indian Markets
        </p>
      </section>

      <ZigzagSection
        image="/images/courses/why-equity.jpg"
        title="Why Choose Equity Research as a Career?"
        content={
          <ul className="list-disc ml-5">
            <li>High-demand role in investment banks, mutual funds & brokerage firms</li>
            <li>Lucrative salaries and performance bonuses</li>
            <li>Opportunities to work with top financial institutions in India</li>
          </ul>
        }
      />

      <ZigzagSection
        image="/images/courses/program-features.jpg"
        title="Program Features"
        reverse
        content={
          <ul className="list-disc ml-5">
            <li>Live Industry Expert Sessions</li>
            <li>Hands-on Financial Modeling</li>
            <li>Case Studies from Indian Markets</li>
            <li>Access to Stock Screener and Research Templates</li>
          </ul>
        }
      />

      <ZigzagSection
        image="/images/courses/eligibility-analyst.jpg"
        title="Eligibility"
        content={
          <>
            <p>Designed for individuals with:</p>
            <ul className="list-disc ml-5">
              <li>Bachelor’s Degree in Finance, Commerce, or related fields</li>
              <li>Prior market exposure or interest in investing</li>
            </ul>
          </>
        }
      />

      <ZigzagSection
        image="/images/courses/structure.jpg"
        title="Program Structure"
        reverse
        content={
          <>
            <p className="font-semibold">Module 1: Fundamentals of Equity Research</p>
            <ul className="list-disc ml-5 mb-4">
              <li>Understanding Indian Capital Markets</li>
              <li>Financial Statement Analysis</li>
            </ul>
            <p className="font-semibold">Module 2: Valuation Techniques</p>
            <ul className="list-disc ml-5 mb-4">
              <li>DCF, Relative Valuation, and Sectoral Valuation</li>
              <li>Model Building in Excel</li>
            </ul>
            <p className="font-semibold">Module 3: Research Writing & Report Presentation</p>
            <ul className="list-disc ml-5">
              <li>Report Structuring and Compliance Standards</li>
              <li>Live Practice on Indian Stocks</li>
            </ul>
          </>
        }
      />

      <ZigzagSection
        image="/images/courses/mentor.jpg"
        title="Guidance from Industry Expert"
        content={
          <p>
   <strong>S. Kamal Kumar</strong> – A seasoned financial expert with over 15 years of industry experience, including a distinguished tenure at Lloyds Banking Group, London. Specializing in equities, derivatives, mutual funds, and holistic financial planning, Kamal is also a renowned trainer who has mentored hundreds of financial professionals.
          </p>
        }
      />

      {/* <ZigzagSection
        image="/images/courses/support.jpg"
        title="FinWorld's Career Support"
        reverse
        content={
          <ul className="list-disc ml-5">
            <li>Resume & LinkedIn Profile Optimization</li>
            <li>Mock Interviews with Experts</li>
            <li>Placement Assistance with Partner Firms</li>
            <li>Ongoing Mentorship & Research Review</li>
          </ul>
        }
      /> */}

      <ZigzagSection
        image="/images/courses/enroll.jpg"
        title="Enrollment Details"
        reverse
        content={
          <>
            <ul className="list-disc ml-5 mb-4">
              <li><strong>Duration:</strong> 12 Weeks</li>
              <li><strong>Mode:</strong> Online</li>
              <li><strong>Language:</strong> English, Hindi, Telugu</li>
             </ul>
            <button className="bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition">
              Enroll Now
            </button>
          </>
        }
      />

      <ZigzagSection
        image="/images/courses/contact.jpg"
        title="Get in Touch"
        content={
          <p>
            📧 Email: support@finworldltd.online<br />
            📞 Phone: +91-7989456792<br />
          </p>
        }
      />

      <footer className="text-center text-sm text-gray-500 mt-16">
        *This program is not affiliated with SEBI or NISM. It is a private career-oriented training initiative.
      </footer>
    </div>
  );
}
