import React, { useState } from 'react';


export default function Inbox() {

  const [data, setData]= useState([
      {
        _id: 'qwertyuiy',
        date: 'October, 13th 2023',
        amount: '4000',
      },
      {
        _id: 'qwertyuiop',
        date: 'October, 14th 2023',
        amount: '9000'
      },
      {
        _id: '12te645969yydg',
        date: 'October, 15th 2023',
        amount: '3000'
      }
    ])

  return (
    <div className=' absolute top-0 left-0 min-h-screen w-[100%] text-[white] bg-[#0D1321]'>
          <div className='mt-[11vh] mb-2'>
           <p className='font-serif text-[30px]'>Inbox</p>
           <hr/>
{
              (data.length !== 0) ? (
                data.map((item, i)=>{
                  return(
                    <div className='w-[100%] p-2' key={i}>
                      {item.date}
                      {item.amount}
                      {item._id}
                    </div>
                    )
                })
                ): (
                  <p> No New Messages</p>
                )
            }
          </div>
    </div>
  )
}
