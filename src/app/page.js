import Image from "next/image";
import Head from 'next/head';
import Header from '@/components/Header';
import HeroSection from '../components/HeroSection';
import { AuthProvider } from "../../context/AuthContext";

export default function Home() {
  return (
    <div>
      <AuthProvider>
      <Head>
        <title>FinWorld - Wealth Management</title>
      </Head>
      <Header />
      <HeroSection />
      </AuthProvider>
    </div>
  );
}

