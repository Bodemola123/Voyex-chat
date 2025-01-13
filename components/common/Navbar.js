import React from 'react'

const Navbar = () => {
  return (
    <div className="h-screen w-16 bg-[#131314] flex flex-col justify-between items-center py-12 text-white">
        <div className='flex flex-col gap-8 justify-center items-center'>
            <div className='bg-[#000000] border-[0.5px] rounded-[12px] w-8 flex items-center justify-center text-[20px] font-black text-[#C088fb]'>V</div>
            <div className='flex flex-col justify-center items-center gap-4'>
                <div className='p-4 flex justify-center items-center gap-2.5 rounded-[123px] hover:bg-[#C088fb] group'></div>
                <div className='p-4 flex justify-center items-center gap-2.5 rounded-[123px] hover:bg-[#C088fb]'></div>
                <div className='p-4 flex justify-center items-center gap-2.5 rounded-[123px] hover:bg-[#C088fb]'></div>
                <div className='p-4 flex justify-center items-center gap-2.5 rounded-[123px] hover:bg-[#C088fb]'></div>
            </div>
        </div>
        <div>

        </div>
  </div>
  )
}

export default Navbar
