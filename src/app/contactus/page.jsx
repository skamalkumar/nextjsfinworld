'use client';

import { useState, useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';

const ConsultationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [user, setUser] = useState(null);
  const router = useRouter();

  // In ConsultationForm component, update the useEffect:
useEffect(() => {
  const auth = getAuth();
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    
    // Check if user is verified
    if (currentUser && !currentUser.emailVerified) {
      alert('Please verify your email before submitting the form.');
    }
  });

  return () => unsubscribe();
}, []);

// Update handleSubmit to check for verification
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!user) {
    alert('You must be signed in to submit the form.');
    return;
  }

  if (!user.emailVerified) {
    alert('Please verify your email before submitting the form.');
    return;
  }

  try {
    // Add form data to Firestore
    const consultationRef = collection(db, 'consultations');
    await addDoc(consultationRef, {
      name,
      email,
      phone,
      message,
      userId: user.uid, // Optional: Associate the entry with the user
      timestamp: new Date(),
    });

    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');

    // Display success message
    setSuccessMessage('Thank you for booking a consultation. We will contact you soon.');

    // Hide success message after 5 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 5000);
  } catch (error) {
    console.error('Error submitting form: ', error);
    alert('There was an error submitting your form. Please try again later.');
  }
};


  const handleSignIn = () => {
    // Encode the current URL to handle special characters
    const returnUrl = encodeURIComponent('/contactus');
    router.push(`/login?returnUrl=${returnUrl}`);
  };

  return (
<div className="min-h-screen bg-gradient-to-b from-green-200 to-blue-100 flex items-center justify-center p-6">
  <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="grid grid-cols-1 md:grid-cols-3">
      {/* Shahdol Address Section */}
      <div className="p-8 bg-gray-50">
      <h3 className="text-2xl font-bold text-gray-700 mb-4 text-center flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" className="mr-2">
        <rect width="30" height="20" fill="#FF9933"/>
        <rect width="30" height="6.667" y="6.667" fill="white"/>
        <rect width="30" height="6.667" y="13.333" fill="#138808"/>
        <circle cx="15" cy="10" r="3.333" fill="#000080"/>
    </svg>
    Indian Office
</h3>
        <p className="text-gray-600 text-center text-lg leading-relaxed mb-6">
          Ward No 28, Behind Christian Hospital, Burhar Road, Shahdol, MP 484001
        </p>
        <div className="overflow-hidden rounded-lg shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.1887662434487!2d81.36314291541058!3d23.292824115221846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981ec8df98f4a73%3A0x523e61c658994aa0!2sChristian%20Hospital%2C%20Burhar%20Rd%2C%20Shahdol%2C%20Madhya%20Pradesh%20484001!5e0!3m2!1sen!2sin!4v1699960103915!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Indian Office Map"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="p-8 bg-gradient-to-tr from-blue-50 to-blue-100">
        {!user ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              Sign In Required
            </h2>
            <p className="text-gray-600 mb-6">
              Please sign in to your account to access the contact form and
              submit your message.
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg px-4 py-2"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </div>
        ) : (
          <>
            {!successMessage ? (
              <>
                <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">
                  Book a Consultation
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    required
                  />
                  <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    rows="4"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg py-2"
                  >
                    Submit
                  </button>
                </form>
              </>
            ) : (
              <p className="text-green-600 text-center text-lg font-medium">
                {successMessage}
              </p>
            )}
          </>
        )}
      </div>

      {/* London Address Section */}
      <div className="p-8 bg-gray-50">
      <h3 className="text-2xl font-bold text-gray-700 mb-4 text-center flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 60 30" className="mr-2">
        <clipPath id="s">
            <path d="M0,0 v30 h60 v-30 z"/>
        </clipPath>
        <clipPath id="t">
            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
        </clipPath>
        <g clipPath="url(#s)">
            <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
            <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
        </g>
        </svg>
         UK Office
        </h3>
        <p className="text-gray-600 text-center text-lg leading-relaxed mb-6">
          3rd Floor, 86-90, Paul Street, London, England, United Kingdom,
          EC2A 4NE
        </p>
        <div className="overflow-hidden rounded-lg shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.1826810162626!2d-0.08493538468359487!3d51.523263579636535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb2a5ae6e03%3A0xbef1d71b1c5b1aa!2s86-90%20Paul%20St%2C%20London%20EC2A%204NE%2C%20UK!5e0!3m2!1sen!2sus!4v1699214905823!5m2!1sen!2sus"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="London Office Map"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default ConsultationForm;