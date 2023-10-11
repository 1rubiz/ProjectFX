import React from 'react';
import NewsWidget from '../components/news'

export default function Landing() {
  return (
    <div className=' absolute top-0 left-0 min-h-screen w-[100%] text-[white] bg-[#0D1321]'>
          <div className='mt-[10vh] mb-2 text-[29px]'>
          <div className='text-[#F0EBD8] mb-6 font-serif text-[20px] md:text-[28px] lg:text-[33px] underline'>
            News Updates
          </div>
            <div className='w-[100%]'>
              <NewsWidget/>
            </div>
          </div>
    </div>
  )
}
