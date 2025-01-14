'use client';
import Footer from '@/components/home-page/Footer';
import GridCard from '@/components/home-page/GridCard';
import Herotext from '@/components/home-page/Herotext';
import InputBar from '@/components/home-page/searchbar';
import React from 'react';
import '../app/globals.css'

const Page = () => {
  return (
    <main className="relative flex flex-row p-10 justify-between m-auto items-center min-h-screen text-black overflow-y-scroll scrollbar-hide scroll-container">
      <Herotext />
      <InputBar />
      <GridCard />
      <Footer/>
    </main>
  );
};

export default Page;
