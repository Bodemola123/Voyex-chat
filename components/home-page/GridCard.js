import React from 'react'
import '../../app/globals.css'
import { MdImageSearch } from "react-icons/md";
import { GoLightBulb } from "react-icons/go";
import { LuEye } from "react-icons/lu";

const GridCard = () => {
  return (
    <div className='grid grid-cols-3 gap-6'>
         <div className="relative max-w-[270px] max-h-[213px] bg-[#0a0a0b] text-[#bfbdbd] flex rounded-3xl py-20 px-6 border-custom">
      {/* Text */}
      <p className="text-lg">Create an image for my presentation</p>

      {/* Button/Icon */}
      <div className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg cursor-pointer">
        <MdImageSearch className='text-[24px] text-[#2f82ef]'/>
      </div>
    </div>
    <div className="relative max-w-[270px] max-h-[213px] bg-[#0a0a0b] text-[#bfbdbd] flex rounded-3xl py-20 px-6 border-custom2">
      {/* Text */}
      <p className="text-lg">What to do with kid's art</p>

      {/* Button/Icon */}
      <div className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg cursor-pointer">
        <GoLightBulb className='text-[24px] text-[#f1a62d]'/>
      </div>
    </div>
    <div className="relative max-w-[270px] max-h-[213px] bg-[#0a0a0b] text-[#bfbdbd] flex rounded-3xl py-20 px-6 border-custom3">
      {/* Text */}
      <p className="text-lg">Find the decade that a photo is from</p>

      {/* Button/Icon */}
      <div className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg cursor-pointer">
        <LuEye className='text-[24px] text-[#3fc390]'/>
      </div>
    </div>
      
    </div>
  )
}

export default GridCard
