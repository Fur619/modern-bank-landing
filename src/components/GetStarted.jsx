import React from 'react'
import { arrowUp } from '../assets'
arrowUp

function GetStarted() {
  return (
    <div className='rounded-full bg-blue-gradient h-[140px] w-[140px] p-[2px] cursor-pointer'>
      <div className='flex items-center justify-center w-full h-full rounded-full bg-black'>
        <div className='flex items-center justify-center gap-x-2 flex-wrap text-gradient w-[84px] font-poppins font-medium text-[18px] leading-[23px]'>
          <span>Get</span>
          <img src={arrowUp} alt='ArrowUp' className='w-[23px] h-[23px]' />
          <span>Started</span>
        </div>
      </div>
    </div>
  )
}

export default GetStarted