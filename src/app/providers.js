'use client';

import { AuthProvider } from "../../context/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

export default function Providers({ children }) {
  const pathname = usePathname();
  const isBlogPost = pathname?.startsWith('/blog/');

  if (isBlogPost) {
    return (
      <>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </>
    );
  }

  return (
    <AuthProvider>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </AuthProvider>
  );
}