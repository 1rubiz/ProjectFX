import React from 'react';
import globe from '/globe.jpg'
import {FaFire} from 'react-icons/fa';
import landing from '/landing3.jpg';
import fire from '/fire-logo.svg'
import About from '../components/about';
import TaperWidget from '../components/taperWidget'

export default function Landing() {
  return (
    <div className=' absolute top-0 left-0 min-h-screen w-[100%] z-[-5] text-[white] bg-[#0D1321]'>
      <div className='mt-[10vh]'>
        <div>
            <div className='flex justify-left items-center'>
              <img src={fire} className='h-[150px]'/>
              <p className='text-[60px] text-[#646cff] mt-[11vh] font-bold font-serif'>LitFX</p>
            </div>
            <p>Your Gateway to Financial Freedom </p>
        </div>
        <div className='text-[19px] p-4 mt-[5vh] text-white-900'>
          <p>Discover a world of of opportunities with LitFX.</p>
          <p className='text-[22px]'>Start trading today!</p>
          <button className='bg-[#646cff] text-[white]'>Get started</button>
        </div>
        <div className='mt-[4vh] mb-[2vh]'>
          <TaperWidget/>
        </div>
        <About/>
      </div>
      <img src={landing} className='absolute top-0 left-0 z-[-1] opacity-70 h-[600px] w-[100%]'/>
    </div>
  )
}
