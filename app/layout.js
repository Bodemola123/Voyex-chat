'use client'
import { useState } from "react";
import Footer from "@/components/home-page/Footer";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import History from "@/components/common/History";


export default function RootLayout({ children }) {
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);

  const toggleHistoryVisibility = () => {
    setIsHistoryVisible((prev) => !prev);
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased bg-black bg-[url('/stars.svg.svg')] w-full bg-cover bg-no-repeat bg-fixed h-full bg-center relative items-center justify-center"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="flex w-full h-full items-center">
          {/* Pass toggle function and state to Navbar */}
          <Navbar
            toggleHistoryVisibility={toggleHistoryVisibility}
            isHistoryVisible={isHistoryVisible}
          />
          {/* Conditionally render History */}
          {isHistoryVisible && <History />}
          <main className="relative h-full w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
