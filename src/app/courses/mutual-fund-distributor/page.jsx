'use client';
import React from 'react';
import Image from 'next/image';

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

export default function MutualFundDistributorProgram() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
          Mutual Fund Distributor – Fast Track Certification
        </h1>
        <p className="text-xl text-gray-600">
          Become a Certified Mutual Fund Distributor in 30 Days – Powered by FinWorld
        </p>
      </section>

      <ZigzagSection
        image="/images/courses/why-mfd.jpg"
        title="Why Become a Mutual Fund Distributor?"
        content={
          <ul className="list-disc ml-5">
            <li>Be your own boss and start your financial services practice</li>
            <li>Tap into the ₹40 Lakh Crore+ Indian mutual fund industry</li>
            <li>Earn regular trail income and grow with your clients</li>
          </ul>
        }
      />

      <ZigzagSection
        image="/images/courses/program-highlights.jpg"
        title="Program Highlights"
        reverse
        content={
          <ul className="list-disc ml-5">
            <li>SEBI/NISM compliant module (Series V-A)</li>
            <li>Guidance on cracking NISM V-A exam</li>
            <li>Tools to build and scale your MFD practice</li>
            <li>Marketing kits, onboarding templates, and investor education tools</li>
          </ul>
        }
      />

      <ZigzagSection
        image="/images/courses/eligibility.jpg"
        title="Eligibility Criteria"
        content={
          <>
            <p>Anyone can apply, especially if you are:</p>
            <ul className="list-disc ml-5">
              <li>Aspiring entrepreneurs in finance</li>
              <li>Insurance agents or financial advisors</li>
              <li>Recent graduates or homemakers</li>
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
            <p className="font-semibold">Module 1: Mutual Fund Basics & Products</p>
            <ul className="list-disc ml-5 mb-4">
              <li>Understanding schemes, NAV, returns, risks</li>
              <li>Structure of AMCs, RTAs, and roles</li>
            </ul>
            <p className="font-semibold">Module 2: Certification & Practice Building</p>
            <ul className="list-disc ml-5">
              <li>Exam training & mock tests</li>
              <li>Client onboarding and digital tools</li>
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
              <li><strong>Language:</strong> English & Hindi</li>
              <li><strong>Fee:</strong> ₹9,999 (incl. taxes)</li>
            </ul>
            <button className="bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition">
              Enroll Now
            </button>
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
        *Please verify registration requirements with AMFI/NISM before appearing for exams.
      </footer>
    </div>
  );
}
