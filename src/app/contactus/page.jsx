'use client';

import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase/firebase';

const ConsultationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await addDoc(collection(db, 'consultations'), {
        name,
        email,
        phone,
        message,
        timestamp: new Date(),
      });

      setSuccessMessage('Thank you for your message. You will be contacted shortly.');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      console.error('Error saving consultation:', error);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-4 flex flex-col items-center justify-center rounded-md mx-4 my-2">
        <div className="max-w-[960px] mx-auto bg-white rounded-lg shadow-md p-6 sm:p-10 md:p-16">
          
          {!successMessage ? (
            <>
              <h2 className="text-3xl font-bold mb-6 text-center">Book a Consultation</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  className="border border-gray-300 rounded-lg p-2"
                  required 
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className="border border-gray-300 rounded-lg p-2"
                  required 
                />
                <input 
                  type="tel" 
                  placeholder="Your Phone Number"  
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                  className="border border-gray-300 rounded-lg p-2"
                  required 
                />
                <textarea 
                  placeholder="Your Message" 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                  className="border border-gray-300 rounded-lg p-2" 
                  rows="5"
                  required 
                />
                <button 
                  type="submit" 
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-2 font-bold"
                >
                  Submit
                </button>
              </form>
            </>
          ) : (
            <p className="text-green-600 mt-4 text-center">{successMessage}</p>
          )}

          {/* Address Section with Google Maps Embed */}
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-semibold">Our Address</h3>
            <p className="text-gray-600 mt-2">
              3rd Floor, 86-90, Paul Street, London, England, United Kingdom, EC2A 4NE
            </p>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.1826810162626!2d-0.08493538468359487!3d51.523263579636535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb2a5ae6e03%3A0xbef1d71b1c5b1aa!2s86-90%20Paul%20St%2C%20London%20EC2A%204NE%2C%20UK!5e0!3m2!1sen!2sus!4v1699214905823!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps Location"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultationForm;
