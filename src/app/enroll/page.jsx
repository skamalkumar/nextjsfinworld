'use client';
import React, { useState } from 'react';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '../../../firebase/firebase';
import { motion } from 'framer-motion';

export default function EnrollPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'enrollments'), {
        ...formData,
        createdAt: Timestamp.now(),
      });
      setStatus('Enrollment successful! We will contact you soon.');
      setFormData({ fullName: '', email: '', phone: '', course: '', message: '' });
    } catch (error) {
      console.error('Error saving enrollment:', error);
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Enroll in a FinWorld Program</h1>

      {status ? (
        <motion.div
          className="bg-green-100 text-green-800 p-8 rounded-2xl shadow-xl text-center text-xl font-medium space-y-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p>{status}</p>
          <a
            href="https://chat.whatsapp.com/CBbHur22KwFDDKHNfcuq1G"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
          >
            👉 Join Our WhatsApp Group
          </a>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-2xl shadow-xl">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Select Course</option>
            <option value="CFP">CFP</option>
            <option value="Equity Research Analyst">Equity Research Analyst</option>
            <option value="Mutual Fund Distributor">Mutual Fund Distributor</option>
            <option value="Portfolio Management">Portfolio Management</option>
            <option value="Portfolio Derivatives">Portfolio Derivatives</option>
          </select>
          <textarea
            name="message"
            placeholder="Any additional message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 border rounded-lg"
          />

          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full transition"
          >
            Submit Enrollment
          </button>
        </form>
      )}
    </div>
  );
}
