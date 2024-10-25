"use client";
import React, { useState } from "react";
import { NextSeo } from "next-seo";
import Header from "@/components/Header";
import { db } from '../../firebase/firebase'
import { collection, addDoc } from "firebase/firestore";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: new Date(),
      });
      setSuccessMessage("Thank you for contacting us! We’ll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
      console.error("Error adding document: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NextSeo
        title="Contact Us - Your Website Name"
        description="Reach out to us for inquiries, support, or collaboration. We're here to help."
        canonical="https://yourwebsite.com/contact"
        openGraph={{
          url: "https://yourwebsite.com/contact",
          title: "Contact Us - Your Website Name",
          description: "Reach out to us for inquiries, support, or collaboration.",
          site_name: "Your Website Name",
        }}
      />
      <Header />
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-6 text-gray-600">Have questions? Fill out the form below to get in touch with us.</p>
        
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          {successMessage && (
            <p className="text-green-600 mt-4">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="text-red-600 mt-4">{errorMessage}</p>
          )}
        </form>
      </div>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Us",
          "description": "Get in touch with us for inquiries or support.",
          "url": "https://yourwebsite.com/contact",
        })}
      </script>
    </>
  );
};

export default ContactPage;
