
import Image from "next/image";
import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import { AuthProvider } from "../../context/AuthContext";
import Homepage from '@/app/home/page';

export default function Home() {
  return (
    <div>
      <AuthProvider>
      <Head>
        <title>FinWorld - Wealth Management</title>
      </Head>
      <HeroSection />
      <Homepage/>
      </AuthProvider>
    </div>
  );
}

