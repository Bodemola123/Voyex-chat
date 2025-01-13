'use client'
import React from 'react'
import { HiOutlineHome } from "react-icons/hi";
import { LuClipboardList, LuLockKeyhole, LuSettings, LuShoppingCart } from "react-icons/lu";
import { RxAvatar } from "react-icons/rx";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


const Navbar = () => {
  return (
    <div className="h-screen w-16 bg-[#131314] flex flex-col justify-between items-center py-12 text-white">
        <div className='flex flex-col gap-8 justify-center items-center'>
            <button className='bg-[#000000] border-[0.5px] rounded-[12px] w-8 flex items-center justify-center text-[20px] font-black text-[#C088fb]'>V</button>
            <div className='flex flex-col justify-center items-center gap-4'>
            <TooltipProvider>
  <Tooltip>
    <TooltipTrigger><button className='p-2 flex justify-center items-center gap-2.5 rounded-[123px] hover:bg-[#C088fb] group'><HiOutlineHome className='text-[20px] text-[#C088fb] group-hover:text-[#f4f4f4]' /></button></TooltipTrigger>
    <TooltipContent side="right" align="start" sideOffset={10}>
    <p>Home</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
                
                <button className='p-2 flex justify-center items-center gap-2.5 rounded-[123px] hover:bg-[#C088fb] group'><LuClipboardList  className='text-[20px] text-[#C088fb] group-hover:text-[#f4f4f4]'/> </button>
                <button className='p-2 flex justify-center items-center gap-2.5 rounded-[123px] hover:bg-[#C088fb] group'><LuShoppingCart  className='text-[20px] text-[#C088fb] group-hover:text-[#f4f4f4]'/></button>
                <button className='p-2 flex justify-center items-center gap-2.5 rounded-[123px] hover:bg-[#C088fb] group'><LuLockKeyhole  className='text-[20px] text-[#C088fb] group-hover:text-[#f4f4f4]'/></button>
            </div>
        </div>
        <div className='flex flex-col gap-4 justify-center items-center'>
          <button className='p-2 flex justify-center items-center gap-2.5 rounded-[123px] hover:bg-[#C088fb]'><LuSettings className='text-[20px] text-[#f4f4f4]'/></button>
          <button className='flex justify-center items-center gap-2.5'><RxAvatar className='text-[28px]'/></button>
        </div>
  </div>
  )
}

export default Navbar

