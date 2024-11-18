// components/AuthButton.js
"use client";
import React, { useState, useRef, useEffect } from 'react';
import { signInWithGoogle, signInWithEmail, registerWithEmail, signOut } from '../../lib/firebaseAuth';
import { useAuth } from '../../context/AuthContext';
import { FaCaretDown, FaGoogle, FaUser } from 'react-icons/fa';

export default function AuthButton() {
  const { user, verificationSent, setVerificationSent, verificationEmail, setVerificationEmail } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [showAuthOptions, setShowAuthOptions] = useState(false);
  const [message, setMessage] = useState('');
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowAuthOptions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleEmailSignIn = async () => {
    try {
      await signInWithEmail(email, password);
      setMessage('');
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
      setEmail('');
      setPassword('');
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

  return (
    <div className="relative" ref={dropdownRef}>
      {user ? (
        <button 
          onClick={() => setShowAuthOptions(!showAuthOptions)}
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-full text-sm"
        >
          <FaUser className="w-4 h-4" />
          <FaCaretDown className="w-3 h-3" />
        </button>
      ) : (
        <button 
          onClick={() => setShowAuthOptions(!showAuthOptions)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full text-sm"
        >
          Sign In
        </button>
      )}

      {showAuthOptions && !verificationSent && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 z-50">
          {user ? (
            <div className="space-y-2">
              <p className="text-sm text-gray-600 truncate">{user.email}</p>
              <button 
                onClick={handleSignOut}
                className="w-full text-left text-sm text-red-600 hover:text-red-700"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <button 
                onClick={signInWithGoogle}
                className="flex items-center justify-center w-full bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm"
              >
                <FaGoogle className="mr-2" />
                Sign in with Google
              </button>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">or</span>
                </div>
              </div>

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-sm border rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 text-sm border rounded-md"
              />

              <button
                onClick={isRegister ? handleEmailRegister : handleEmailSignIn}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm"
              >
                {isRegister ? 'Register' : 'Sign In'}
              </button>

              <button
                onClick={() => setIsRegister(!isRegister)}
                className="w-full text-sm text-blue-600 hover:text-blue-700"
              >
                {isRegister ? 'Have an account? Sign In' : 'New user? Register'}
              </button>

              {message && (
                <p className="text-xs text-red-600 text-center">{message}</p>
              )}
            </div>
          )}
        </div>
      )}

      {verificationSent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm w-full">
            <p className="text-sm text-center text-gray-800 mb-4">
              A verification email has been sent to {verificationEmail}. Please check your inbox.
            </p>
            <button 
              onClick={() => {
                setVerificationSent(false);
                setVerificationEmail('');
                setMessage('');
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}