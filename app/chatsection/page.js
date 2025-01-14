'use client'
import ChatSection from '@/components/chat-section/ChatSection'
import History from '@/components/common/History'
import React from 'react'
import '../../app/globals.css'

const page = () => {
  return (
    <main className='relative flex flex-row w-full min-h-screen overflow-y-scroll scrollbar-hide scroll-container'>
      <ChatSection/>
    </main>
  )
}

export default page
