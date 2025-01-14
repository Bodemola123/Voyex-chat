import React from 'react'
import { MdOutlineRestartAlt } from "react-icons/md";

const ChatSection = () => {
  return (
    <div className='flex flex-col w-[100%] p-6 gap-6'>
      <div className='py-1 px-2 border-b border-[#3A3A40] flex items-start justify-end'>
        <button className='flex flex-row items-center justify-center gap-1'>
          <MdOutlineRestartAlt className='text-[16px] text-white/60'/>
          <p className='text-white/60 text-sm'>Clear Chat</p>
        </button>
      </div>
      {/* Chat Section */}
    </div>
  )
}

export default ChatSection
