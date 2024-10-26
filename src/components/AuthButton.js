// components/AuthButton.js
"use client";
import { useState } from 'react';
import { signInWithGoogle, signInWithEmail, registerWithEmail, signOut } from '../../lib/firebaseAuth';
import { useAuth } from '../../context/AuthContext';
import { FaCaretDown, FaGoogle } from 'react-icons/fa';

export default function AuthButton() {
  const { user, verificationSent, setVerificationSent, verificationEmail, setVerificationEmail } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [showAuthOptions, setShowAuthOptions] = useState(false);
  const [message, setMessage] = useState('');

  const handleEmailSignIn = async () => {
    try {
      await signInWithEmail(email, password);
      setMessage('Successfully signed in!');
      setShowAuthOptions(false);
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleEmailRegister = async () => {
    try {
      await registerWithEmail(email, password);
      setVerificationSent(true);
      setVerificationEmail(email);
      setMessage(`A verification email has been sent to ${email}. Please check your inbox.`);
      setEmail('');
      setPassword('');
      // Close the auth options dropdown after successful registration
      setShowAuthOptions(false);
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setShowAuthOptions(false);
      setMessage('');
      setVerificationSent(false);
      setVerificationEmail('');
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleOkClick = () => {
    setVerificationSent(false);
    setVerificationEmail('');
    setMessage('');
    setShowAuthOptions(false);
  };

  return (
    <div className="relative">
      {user ? (
        <div className="flex items-center space-x-4">
          <span className="text-white">Logged in as {user.email}</span>
          <button onClick={handleSignOut} className="text-white hover:underline">
            Sign Out
          </button>
        </div>
      ) : (
        <div className="flex items-center relative">
          <button 
            onClick={() => setShowAuthOptions(!showAuthOptions)} 
            className="text-white hover:underline flex items-center"
          >
            Sign In <FaCaretDown className="ml-1" />
          </button>
          
          {showAuthOptions && !verificationSent && (
            <div className="absolute top-12 right-0 bg-white text-black p-4 shadow-lg rounded-md w-64 z-50">
              <button onClick={signInWithGoogle} className="bg-blue-500 text-white w-full py-2 px-4 rounded mb-4 flex items-center">
                <FaGoogle className="mr-2" />
                Sign In with Google
              </button>
              
              <div className="text-center my-2">OR</div>
              
              <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="border p-2 mb-2 w-full rounded"
              />
              <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="border p-2 mb-2 w-full rounded"
              />

              {isRegister ? (
                <button onClick={handleEmailRegister} className="bg-green-500 text-white w-full py-2 px-4 rounded">
                  Register
                </button>
              ) : (
                <button onClick={handleEmailSignIn} className="bg-blue-500 text-white w-full py-2 px-4 rounded">
                  Sign In
                </button>
              )}
              
              <button onClick={() => setIsRegister(!isRegister)} className="mt-2 text-blue-500 underline">
                {isRegister ? "Have an account? Sign In" : "New user? Register"}
              </button>

              {message && !verificationSent && (
                <p className="text-center text-red-600 mt-2">{message}</p>
              )}
            </div>
          )}
          
          {/* Verification Message Modal */}
          {verificationSent && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
                <p className="text-center text-gray-800 mb-4">
                  A verification email has been sent to {verificationEmail}. Please check your inbox.
                </p>
                <div className="flex justify-center">
                  <button 
                    onClick={handleOkClick}
                    className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}