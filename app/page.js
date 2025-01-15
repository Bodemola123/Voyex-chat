'use client';
import Footer from '@/components/home-page/Footer';
import GridCard from '@/components/home-page/GridCard';
import Herotext from '@/components/home-page/Herotext';
import InputBar from '@/components/home-page/searchbar';
import React, { useState } from 'react';
import '../app/globals.css';
import Navbar from '@/components/common/Navbar';
import History from '@/components/common/History';

const Page = () => {
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);

  const toggleHistoryVisibility = () => {
    setIsHistoryVisible((prev) => !prev);
  };

  return (
    <main className="relative flex flex-row h-screen">
      {/* Navbar */}
      <Navbar
        toggleHistoryVisibility={toggleHistoryVisibility}
        isHistoryVisible={isHistoryVisible}
      />

      {/* History with Smooth Transition */}
      <div
        className={`transition-all duration-300 ${
          isHistoryVisible ? 'w-[420px]' : 'w-0'
        } bg-[#131314] overflow-hidden`}
      >
        {isHistoryVisible && <History/>}
      </div>

      {/* Main Content */}
      <div className="flex-grow relative flex h-full w-full flex-col gap-10 p-10 justify-between items-center overflow-y-scroll scrollbar-hide scroll-container">
        <Herotext />
        <InputBar />
        <GridCard />
        <Footer />
      </div>
    </main>
  );
};

export default Page;
