import Image from 'next/image'
import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { PiLightbulb } from "react-icons/pi";

const History = () => {
  return (
    <nav className='flex flex-col w-[320px] bg-[#131314] items-center justify-between h-screen pt-12'>
      <div className='flex flex-col gap-6 justify-center'>
        <div className='flex px-6 gap-4 flex-row items-start'>
          <Image src={'/Crown.svg'} alt='crown' width={32} height={32}/>
          <p className='font-extrabold text-3xl text-[#f4f4f4]'>Voyex</p>
        </div>
        <div className='flex flex-col border-b border-[#3A3A40] justify-center'>
          <button className='rounded-[66px] mx-auto bg-[#1d1d1f] flex flex-row gap-3 py-3 px-20 items-center justify-center'>
            <FaPlus className='text-[10px] text-white/40'/>
            <p className='text-xs text-white/60'>New chat</p>
          </button>
          <button className='py-4 px-3 flex flex-row gap-2.5 bg-transparent items-center'>
            <FiShoppingCart className='text-[18px] text-[#94a3b8]'/>
            <p className='font-bold text-lg text-[#f4f4f4]'>Galactimart</p>
          </button>
          <button className='py-4 px-3 flex flex-row gap-2.5 bg-transparent items-center'>
            <PiLightbulb className='text-[18px] text-[#94a3b8]'/>
            <p className='font-bold text-lg text-[#f4f4f4]'>Custom Instructions</p>
          </button>
        </div>
      </div>
      <div className=''></div>
      <div></div>
      <button className='flex flex-row py-4 px-6 gap-4 items-start justify-start'>
        <Image src={'/IconContainer.svg'} alt='icon' width={40} height={40}/>
        <div className='flex flex-col gap-2 items-start'>
          <p className='text-base text-[#f4f4f4] '>Upgrade Plan</p>
          <p className='text-sm text-[#475569]'>Get GPT-8 and more</p>
        </div>
      </button>
    </nav>
  )
}

export default History
