import React from 'react';
import globe from '/globe.jpg'
import {FaFire} from 'react-icons/fa';
import landing from '/landing3.jpg';


export default function Landing() {
  return (
    <div className=' absolute top-0 left-0 min-h-screen w-[100%] z-[-5] text-[white] bg-[#0D1321]'>
           <img src={landing} className='absolute top-0 left-0 z-[-1] opacity-40 h-[600px] w-[100%]'/>
          <div className='mt-[10vh] mb-2 text-[29px] flex'>
           <FaFire className='text-[40vh]' /> LITFX
          </div>
    </div>
  )
}
