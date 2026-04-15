"use client";
import React, { useState, useRef, useEffect } from "react";
import { signInWithGoogle, signOut } from "../../lib/firebaseAuth";
import { useAuth } from "../../context/AuthContext";
import { FaCaretDown, FaGoogle, FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function AuthButton() {
  const { user } = useAuth();
  const [showAuthOptions, setShowAuthOptions] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowAuthOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
      setShowAuthOptions(false);
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setShowAuthOptions(false);
    } catch (error) {
      console.error("Sign-Out Error:", error);
    }
  };

  const navigateTo = (path) => {
    router.push(path);
    setShowAuthOptions(false);
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

      {showAuthOptions && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 z-50">
          {user ? (
            <div className="space-y-2">
              <p className="text-sm text-gray-600 truncate">{user.email}</p>
              <button
                onClick={handleSignOut}
                className="w-full text-left text-sm text-red-600 hover:text-red-700"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <button
                onClick={handleSignIn}
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

              <button
                onClick={() => navigateTo("/register")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm"
              >
                Register
              </button>

              <button
                onClick={() => navigateTo("/login")}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-md text-sm"
              >
                Login
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
