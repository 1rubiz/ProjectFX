import React from 'react';


export default function Loading() {
  return (
    <div className=' absolute top-0 z-10 left-0 min-h-screen w-[100%] text-[white] bg-[#0D1321]'>
          <div className='mt-[10vh] mb-2 text-[29px] flex justify-center items-center'>
           <div className='mt-[30vh] w-28 h-28 border-t-4 border-blue-500 border-solid rounded-full animate-spin'/>
          </div>
    </div>
  )
}
