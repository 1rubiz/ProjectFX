import React from 'react';
import globe from '/globe.jpg'

export default function Landing() {
  return (
    <div className=' absolute top-0 left-0 min-h-screen w-[100%] text-[white] bg-[#0D1321]'>
          <div className='mt-[10vh] mb-2 text-[29px]'>
           Landing
           <img src={globe} className='h-[300px]' />
          </div>
    </div>
  )
}
