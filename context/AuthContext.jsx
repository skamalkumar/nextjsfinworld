"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../lib/firebase';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [verificationSent, setVerificationSent] = useState(false);
  const [verificationEmail, setVerificationEmail] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && !user.emailVerified && !verificationSent) {
        setUser(null);
      } else if (user && user.emailVerified) {
        setUser({ uid: user.uid, email: user.email });
        setVerificationSent(false);
        setVerificationEmail('');
      } else if (!user) {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [verificationSent]);

  const value = {
    user,
    setUser,
    verificationSent,
    setVerificationSent,
    verificationEmail,
    setVerificationEmail
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}