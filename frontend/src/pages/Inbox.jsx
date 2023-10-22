import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function Inbox() {

  const [data, setData]= useState([
      {
        _id: 'qwertyuiy',
        date: 'October, 13th 2023',
        message: 'Join the LitFX community today and unlock your potential in the financial markets. Your future starts here!'
      },
      {
        _id: 'qwertyuiop',
        date: 'October, 14th 2023',
        message: 'Get started now and experience the LitFX advantage.'
      },
      {
        _id: '12te645969yydg',
        date: 'October, 15th 2023',
        message: 'Get started now and experience the LitFX advantage.'
      }
    ])

useEffect(()=>{

  const getData =async ()=>{
    const cookies = document.cookie;
    const response =await axios.post('http://localhost:3000/verify', {withCredentials: true})
    //const response =  await axios.get("https://projectfx-server.onrender.com/api/users/login",form)
 // const response =  await axios.post("http://localhost:3000/verify-clerk-token", {withCredentials: true})
  console.log(response)
  }
getData();
}, [])

  return (
    <div className=' absolute top-0 left-0 min-h-screen w-[100%] text-[white] bg-[#0D1321]'>
          <div className='mt-[11vh] mb-2'>
           <p className='font-serif text-[30px]'>Inbox</p>
           <hr/>
           <div className='w-[100%] p-2 flex flex-col justify-center items-center gap-2 pt-2'>
            {
              (data.length !== 0) ? (
                data.map((item, i)=>{
                  return(
                    <div className='w-[100%] p-2 rounded-[5px] border-2 border-white' key={i}>
                      {item.message}
                      
                    </div>
                    )
                })
                ): (
                  <p> No New Messages</p>
                )
            }
          </div>
          </div>
    </div>
  )
}
