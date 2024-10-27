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
          
          {/* Show heading and form only if there is no success message */}
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
        </div>
      </div>
    </>
  );
};

export default ConsultationForm;
