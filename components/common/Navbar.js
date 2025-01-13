'use client'
import React from 'react'
import { HiOutlineHome } from "react-icons/hi";
import { LuClipboardList, LuLockKeyhole, LuSettings, LuShoppingCart } from "react-icons/lu";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="h-screen w-16 bg-[#131314] flex flex-col justify-between items-center py-12 text-white">
        <div className='flex flex-col gap-8 justify-center items-center'>
            <button className='bg-[#000000] border-[0.5px] rounded-[12px] w-8 flex items-center justify-center text-[20px] font-black text-[#C088fb]'>V</button>
            <div className='flex flex-col justify-center items-center gap-4'>
                {/* Home Button with Tooltip */}
                <div className="relative group">
                  <button className='p-2 flex justify-center items-center gap-2.5 rounded-[123px] hover:bg-[#C088fb]'>
                    <HiOutlineHome className='text-[20px] text-[#C088fb] group-hover:text-[#f4f4f4]' />
                  </button>
                  <span className="absolute top-full -mt-2 left-full  text-[#ffffff] text-center font-medium bg-[#131314] px-2.5 py-1.5 rounded-[13px] flex gap-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    Home
                  </span>
                </div>

                {/* Templates Button with Tooltip */}
                <div className="relative group">
                  <button className='p-2 flex justify-center items-center gap-2.5 rounded-[123px] hover:bg-[#C088fb]'>
                    <LuClipboardList className='text-[20px] text-[#C088fb] group-hover:text-[#f4f4f4]' />
                  </button>
                  <span className="absolute top-full -mt-2 left-full  text-[#ffffff] text-center font-medium bg-[#131314] px-2.5 py-1.5 rounded-[13px] flex gap-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    Templates
                  </span>
                </div>

                {/* Galactimart Button with Tooltip */}
                <div className="relative group">
                  <button className='p-2 flex justify-center items-center gap-2.5 rounded-[123px] hover:bg-[#C088fb]'>
                    <LuShoppingCart className='text-[20px] text-[#C088fb] group-hover:text-[#f4f4f4]' />
                  </button>
                  <span className="absolute top-full -mt-2 left-full text-[#ffffff] text-center font-medium bg-[#131314] px-2.5 py-1.5 rounded-[13px] flex gap-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    Galactimart
                  </span>
                </div>

                {/* Workspace Button with Tooltip */}
                <div className="relative group">
                  <button className='p-2 flex justify-center items-center gap-2.5 rounded-[123px] hover:bg-[#C088fb]'>
                    <LuLockKeyhole className='text-[20px] text-[#C088fb] group-hover:text-[#f4f4f4]' />
                  </button>
                  <span className="absolute top-full -mt-2 left-full  text-[#ffffff] text-center font-medium bg-[#131314] px-2.5 py-1.5 rounded-[13px] flex gap-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    Workspace
                  </span>
                </div>
            </div>
        </div>

        <div className='flex flex-col gap-4 justify-center items-center'>
          {/* Settings Button with Tooltip */}
          <div className="relative group">
            <button className='p-2 flex justify-center items-center gap-2.5 rounded-[123px] hover:bg-[#C088fb]'>
              <LuSettings className='text-[20px] text-[#f4f4f4]' />
            </button>
            <span className="absolute top-full -mt-2 left-full  text-[#ffffff] text-center font-medium bg-[#131314] px-2.5 py-1.5 rounded-[13px] flex gap-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
              Settings
            </span>
          </div>

          <button className='flex justify-center items-center gap-2.5'>
            <RxAvatar className='text-[28px]' />
          </button>
        </div>
    </div>
  )
}

export default Navbar
