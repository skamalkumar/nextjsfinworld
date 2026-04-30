"use client";

import { AuthProvider } from "../../context/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Providers({ children }) {
  return (
    <AuthProvider>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </AuthProvider>
  );
}
