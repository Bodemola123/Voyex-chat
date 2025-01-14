import Image from 'next/image'
import React from 'react'
import '../../app/globals.css'

const Herotext = () => {
  return (
    <div className='flex flex-col gap-[24px] justify-center items-center'>
<div className='flex flex-row gap-4 justify-center items-center'>
  <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#C088FB] via-[#8E3EFF] to-[#8E3EFF] text-[48px] leading-[57.6px] font-bold'>
    Hi Explorer VANSH
  </p>
  <Image src={'/Sparkle.svg'} alt='sparkles' width={40} height={40} className='message-bubble'/>
</div>

      <p className='text-[#f4f4f4] leading-[48px] text-[40px] font-bold'>How can I help you today</p>
    </div>
  )
}

export default Herotext
