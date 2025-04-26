'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ZigzagSection = ({ image, title, content, reverse = false }) => (
  <motion.section
    className={`my-20 flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-8`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
  >
    <motion.div className="md:w-1/2" variants={fadeUp}>
      <Image
        src={image}
        alt={title}
        width={800}
        height={400}
        className="rounded-2xl shadow-lg"
      />
    </motion.div>
    <motion.div className="md:w-1/2 space-y-4" variants={fadeUp}>
      <h2 className="text-3xl font-bold text-blue-700 mb-2">{title}</h2>
      <div className="text-gray-700 text-lg leading-relaxed">{content}</div>
    </motion.div>
  </motion.section>
);

export default function CFPFastTrackProgram() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
          Certified Financial Planner (CFP) – Fast Track Program
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your gateway to a globally recognized financial planning career. Our 90-day fast-track, trainer-led program is crafted to shape professionals into confident, certified advisors.
        </p>
      </section>

      <ZigzagSection
        image="/images/courses/why-cfp.jpg"
        title="Why Choose Our CFP Program?"
        content={
          <ul className="list-disc ml-5 space-y-2">
            <li>Globally acclaimed designation accepted in over 27 countries.</li>
            <li>Highly sought-after by banks, investment houses, and insurers.</li>
            <li>Become part of a network of over 240,000 certified professionals worldwide.</li>
            <li>Elevate your credibility, open doors to high-paying roles and build client trust effortlessly.</li>
          </ul>
        }
      />

      <ZigzagSection
        image="/images/courses/program-highlights.jpg"
        title="Program Highlights"
        reverse
        content={
          <ul className="list-disc ml-5 space-y-2">
            <li>Live, interactive trainer-led sessions tailored for professionals.</li>
            <li>Practical curriculum covering real-life financial planning cases.</li>
            <li>Hands-on use of tools like Excel planners, financial calculators, and mock test platforms.</li>
            <li>Recorded sessions & mentor support for flexible self-paced revision.</li>
          </ul>
        }
      />

      <ZigzagSection
        image="/images/courses/eligibility.jpg"
        title="Eligibility Criteria"
        content={
          <>
            <p>Our fast-track program is ideally suited for mid-level professionals aiming to become certified planners, including:</p>
            <ul className="list-disc ml-5 space-y-2">
              <li>Finance professionals with degrees like CA, CFA, MBA Finance.</li>
              <li>Bankers, insurance advisors, mutual fund distributors with 3+ years of experience.</li>
              <li>Entrepreneurs and consultants looking to diversify into advisory roles.</li>
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
            <p className="font-semibold">Stage 1: Financial Plan Assessment</p>
            <ul className="list-disc ml-5 mb-4 space-y-2">
              <li>Work on client scenarios using Excel-based tools and planning frameworks.</li>
              <li>Learn taxation, retirement, risk management and estate planning modules.</li>
            </ul>
            <p className="font-semibold">Stage 2: Final CFP Certification Exam</p>
            <ul className="list-disc ml-5 space-y-2">
              <li>Attempt a 3-hour MCQ-based exam aligned with global CFP standards.</li>
              <li>Access to mock tests, mentor feedback, and exam-taking strategies.</li>
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
            <ul className="list-disc ml-5 mb-4 space-y-2">
              <li><strong>Duration:</strong> 90 Days</li>
              <li><strong>Mode:</strong> 100% Online – Live Sessions with Mentor</li>
              <li><strong>Language:</strong> English (Regional mentoring support available)</li>
              <li><strong>Program Fee:</strong> ₹29,999 (including taxes & learning materials)</li>
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
            Have queries? Reach out to us.<br />
            📧 Email: <a href="mailto:support@finworldltd.online" className="text-blue-600 hover:underline">support@finworldltd.online</a><br />
            📞 Phone: <a href="tel:+917989456792" className="text-blue-600 hover:underline">+91-7989456792</a><br />
          </p>
        }
      />

      <footer className="text-center text-sm text-gray-500 mt-20">
        *Please verify your eligibility with FPSB before enrolling in the certification exam.
      </footer>
    </div>
  );
}
