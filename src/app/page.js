import Image from "next/image";
import Head from 'next/head';
import Header from "./components/Header";
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>FinWorld - Wealth Management</title>
      </Head>
      <Header />
      <HeroSection />
    </div>
  );
}

