"use client";

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
      const consultationRef = collection(db, 'consultations');
      await addDoc(consultationRef, {
        name,
        email,
        phone,
        message,
        userId: user.uid, // Optional: Associate the entry with the user
        timestamp: new Date(),
      });

      setName('');
      setEmail('');
      setPhone('');
      setMessage('');

      setSuccessMessage('Thank you for booking a consultation. We will contact you soon.');

      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form: ', error);
      alert('There was an error submitting your form. Please try again later.');
    }
  };

  const handleSignIn = () => {
    const returnUrl = encodeURIComponent('/contactus');
    router.push(`/login?returnUrl=${returnUrl}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-200 to-blue-100 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Hyderabad Address Section */}
          <div className="p-8 bg-gray-50">
            <h3 className="text-2xl font-bold text-gray-700 mb-4 text-center flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" className="mr-2">
                <rect width="30" height="20" fill="#FF9933" />
                <rect width="30" height="6.667" y="6.667" fill="white" />
                <rect width="30" height="6.667" y="13.333" fill="#138808" />
                <circle cx="15" cy="10" r="3.333" fill="#000080" />
              </svg>
              India Office
            </h3>
            <p className="text-gray-600 text-center text-lg leading-relaxed mb-6">
              3rd floor, Phoenix Towers, Genpact Rd, Uppal, Hyderabad, Telangana 500007
            </p>
            <div className="overflow-hidden rounded-lg shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.881554795347!2d78.5616726!3d17.4105076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d0b301dc47%3A0x529c1f9b96c6b663!2sPhoenix%20Towers%2C%20Genpact%20Rd%2C%20Uppal%2C%20Hyderabad%2C%20Telangana%20500007!5e0!3m2!1sen!2sin!4v1699980193405!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Hyderabad Office Map"
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
                  Please sign in to your account to access the contact form and submit your message.
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

          {/* UK Address Section */}
          <div className="p-8 bg-gray-50">
            <h3 className="text-2xl font-bold text-gray-700 mb-4 text-center flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 60 30">
                <clipPath id="flag-clip">
                  <rect width="60" height="30"/>
                </clipPath>

                <g clipPath="url(#flag-clip)">
                  {/* Blue background */}
                  <rect width="60" height="30" fill="#012169"/>
                  {/* White saltire (diagonal cross) */}
                  <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6"/>
                  {/* Red saltire (diagonal cross) */}
                  <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4"/>
                  {/* White St. George's Cross */}
                  <path d="M30,0 V30 M0,15 H60" stroke="#FFFFFF" strokeWidth="10"/>
                  {/* Red St. George's Cross */}
                  <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6"/>
                </g>
              </svg>
              UK Office
            </h3>
            <p className="text-gray-600 text-center text-lg leading-relaxed mb-6">
              3rd Floor, 86-90, Paul Street, London, England, United Kingdom, EC2A 4NE
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
