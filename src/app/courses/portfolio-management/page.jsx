'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ZigzagSection = ({ image, title, content, reverse = false }) => (
  <section className={`my-16 flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-8`}>
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
  </section>
);

export default function PortfolioManagementProgram() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
          Portfolio Management Certification – FinWorld Advanced Training
        </h1>
        <p className="text-xl text-gray-600">
          Master portfolio construction, risk management & performance analysis with expert-led training.
        </p>
      </section>

      <ZigzagSection
        image="/images/courses/portfolio-benefits.jpg"
        title="Why Pursue Portfolio Management?"
        content={
          <ul className="list-disc ml-5">
            <li>High-demand career path in wealth & asset management</li>
            <li>Valuable skills in risk, return, diversification, and asset allocation</li>
            <li>Ideal for career switchers, analysts, and finance graduates</li>
          </ul>
        }
      />

      <ZigzagSection
        image="/images/courses/portfolio-program.jpg"
        title="Program Highlights"
        reverse
        content={
          <ul className="list-disc ml-5">
            <li>Live mentor-led weekend sessions</li>
            <li>Practical learning with real portfolio simulations</li>
            <li>Coverage of mutual funds, stocks, bonds, ETFs, and alternatives</li>
            <li>Includes risk profiling & client reporting modules</li>
          </ul>
        }
      />

      <ZigzagSection
        image="/images/courses/portfolio-eligibility.jpg"
        title="Who Should Enroll?"
        content={
          <ul className="list-disc ml-5">
            <li>Finance students, MBA grads, CFA/CFP aspirants</li>
            <li>Professionals in broking, banking, and insurance</li>
            <li>Anyone interested in managing client or personal portfolios</li>
          </ul>
        }
      />

      <ZigzagSection
        image="/images/courses/structure.jpg"
        title="Program Structure"
        reverse
        content={
          <>
            <p className="font-semibold">Module 1: Investment Concepts</p>
            <ul className="list-disc ml-5 mb-4">
              <li>Portfolio theory, CAPM, and behavioral finance</li>
              <li>Client profiling and goal-based planning</li>
            </ul>
            <p className="font-semibold">Module 2: Practical Portfolio Management</p>
            <ul className="list-disc ml-5">
              <li>Constructing & rebalancing portfolios</li>
              <li>Using Excel & financial tools to track performance</li>
            </ul>
          </>
        }
      />

      <ZigzagSection
        image="/images/courses/mentor.jpg"
        title="Meet Your Mentor"
        content={
          <p>
  <strong>S. Kamal Kumar</strong> – A seasoned financial expert with over 15 years of industry experience, including a distinguished tenure at Lloyds Banking Group, London. Specializing in equities, derivatives, mutual funds, and holistic financial planning, Kamal is also a renowned trainer who has mentored hundreds of financial professionals.
          </p>
        }
      />

<ZigzagSection
        image="/images/courses/enroll.jpg"
        title="Enrollment Details"
        reverse
        content={
          <>
            <ul className="list-disc ml-5 mb-4">
              <li><strong>Duration:</strong> 30 Days</li>
              <li><strong>Mode:</strong> Online (Live + Self-paced)</li>
              <li><strong>Language:</strong> English, Hindi, Telugu</li>
            </ul>
            <Link href="/enroll">
              <button className="bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition">
                    Enroll Now
              </button>
            </Link>
          </>
        }
        />

      {/* <ZigzagSection
        image="/images/courses/enroll.jpg"
        title="How FinWorld Supports You"
        reverse
        content={
          <ul className="list-disc ml-5 mb-4">
            <li>Recorded sessions & doubt-solving forums</li>
            <li>Real-time portfolio tracking templates</li>
            <li>Internship & freelance opportunities</li>
            <li>Guidance for SEBI RIA/RA registration</li>
          </ul>
        }
      /> */}

      <ZigzagSection
        image="/images/courses/contact.jpg"
        title="Contact & Enrollment"
        content={
          <>
            <ul className="list-disc ml-5 mb-4">
              <li><strong>Duration:</strong> 8 Weeks (Weekends Only)</li>
              <li><strong>Mode:</strong> Live Online</li>
              <li><strong>Fee:</strong> ₹24,999 (incl. taxes)</li>
            </ul>
            <p>📧 Email: support@finworldltd.online<br />📞 Phone: +91-7989456792</p>
          </>
        }
      />

      <footer className="text-center text-sm text-gray-500 mt-16">
        *FinWorld programs are independent learning courses. Industry registration support provided as mentorship.
      </footer>
    </div>
  );
}
