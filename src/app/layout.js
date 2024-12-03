import localFont from "next/font/local";
import Script from "next/script"; // Import Script for adding analytics
import "./globals.css";
import { AuthProvider } from "../../context/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "FinWorld",
  description: "We specialize in investment planning and insurance management, ensuring that your financial portfolio is not only optimized for growth but also safeguarded against uncertainties. From selecting the right investment avenues to securing your future with personalized insurance solutions, FinWorld offers a holistic approach to wealth management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add the favicon */}
        <link rel="icon" href="/finworld-logo.webp" />

        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TD29YBP18H" // Replace G-XXXXXXXXXX with your Measurement ID
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TD29YBP18H'); // Replace G-XXXXXXXXXX with your Measurement ID
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <AuthProvider>
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex-grow">{children}</main>

          {/* Footer */}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
