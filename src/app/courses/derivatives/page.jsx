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

export default function PortfolioDerivativesProgram() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
          Portfolio Derivatives – Mastering the Art of Hedging & Leverage
        </h1>
        <p className="text-xl text-gray-600">
          Advanced program to sharpen your skills in derivatives strategies for portfolio enhancement.
        </p>
      </section>

      <ZigzagSection
        image="/images/courses/why-derivatives.jpg"
        title="Why Learn Portfolio Derivatives?"
        content={
          <ul className="list-disc ml-5">
            <li>Enhance returns with strategic options and futures usage</li>
            <li>Minimize portfolio risk through hedging techniques</li>
            <li>Essential knowledge for traders, investors, and advisors</li>
          </ul>
        }
      />

      <ZigzagSection
        image="/images/courses/program-highlights.jpg"
        title="Program Highlights"
        reverse
        content={
          <ul className="list-disc ml-5">
            <li>Real-time analysis of index and stock derivatives</li>
            <li>Live simulations and strategy building</li>
            <li>In-depth coverage of options greeks and pricing</li>
            <li>Insights into margin management and risk controls</li>
          </ul>
        }
      />

      <ZigzagSection
        image="/images/courses/eligibility.jpg"
        title="Eligibility Criteria"
        content={
          <>
            <p>Perfect for:</p>
            <ul className="list-disc ml-5">
              <li>Equity Traders & Analysts</li>
              <li>Portfolio Managers and Financial Planners</li>
              <li>Finance students with derivatives basics</li>
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
            <p className="font-semibold">Module 1: Derivative Instruments Overview</p>
            <ul className="list-disc ml-5 mb-4">
              <li>Futures, Options, Swaps, and Structured Products</li>
              <li>Role of derivatives in modern portfolios</li>
            </ul>
            <p className="font-semibold">Module 2: Practical Derivative Strategies</p>
            <ul className="list-disc ml-5">
              <li>Covered Calls, Protective Puts, Spreads & Straddles</li>
              <li>Volatility and Event-based Trading Techniques</li>
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

      {/* <ZigzagSection
        image="/images/derivatives/support.jpg"
        title="What FinWorld Offers"
        reverse
        content={
          <ul className="list-disc ml-5">
            <li>Live practical sessions with real market examples</li>
            <li>Strategy simulations on trading platforms</li>
            <li>PDF guides and Excel tools for hands-on practice</li>
            <li>Telegram community for continuous support</li>
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
              <li><strong>Duration:</strong> 6 Weeks</li>
              <li><strong>Mode:</strong> Online (Live + Recorded)</li>
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

      <ZigzagSection
        image="/images/courses/contact.jpg"
        title="Contact Us"
        content={
          <p>
            📧 Email: support@finworldltd.online<br />
            📞 Phone: +91-7989456792<br />
          </p>
        }
      />

      <footer className="text-center text-sm text-gray-500 mt-16">
        *Participants must ensure regulatory compliance before engaging in derivative trading.
      </footer>
    </div>
  );
}
