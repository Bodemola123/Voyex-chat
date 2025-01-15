'use client'
import ChatSection from '@/components/chat-section/ChatSection'
import React, { useState } from 'react'
import '../../app/globals.css'
import Navbar from '@/components/common/Navbar'
import History from '@/components/common/History'

const page = () => {

    const [isHistoryVisible, setIsHistoryVisible] = useState(false);
  
    const toggleHistoryVisibility = () => {
      setIsHistoryVisible((prev) => !prev);
    };
  return (
    <main className='relative flex flex-row w-full h-screen'>
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
      <div className='flex-grow relative flex h-full w-full flex-col items-center overflow-y-scroll scrollbar-hide scroll-container'>
      <ChatSection/>
      </div>

    </main>
  )
}

export default page
