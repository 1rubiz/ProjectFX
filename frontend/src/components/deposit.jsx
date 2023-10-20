import React, { useState } from 'react';
import CashierMsg from './cashiermsg'

export default function Deposit() {
  const [val, setVal] = useState(null)
  const [data, setData]= useState([
      {
        _id: 'qwertyuiy',
        date: 'October, 13th 2023',
        amount: '4000',
        account_num: '1290********'
      },
      {
        _id: 'qwertyuiop',
        date: 'October, 14th 2023',
        amount: '9000',
        account_num: '5768********'
      },
      {
        _id: '12te645969yydg',
        date: 'October, 15th 2023',
        amount: '3000',
        account_num: '1038********'
      }
    ])

  const handleDisplay = (item)=>{
    setVal(item);
  }
  const handleClose = ()=>{
    setVal(null);
  }

  return (
    <div className='flex justify-center items-center'>
          <div className='w-[100%] md:w-[80%]'>
           <hr/>
            {
              (data.length !== 0) ? (
                data.map((item, i)=>{
                  return(
                    <div className='w-[100%] p-2 hover:opacity-50'  onClick={()=> handleDisplay(i)} key={i}>
                      <CashierMsg type='deposit' _id={item._id} date={item.date} customColor='text-[lightGreen]' amount={item.amount}/>
                    </div>
                    )
                })
                ): (
                  <p> No Recent Deposits</p>
                )
            }
          </div>
          {
            (val || val === 0) && (
                <div className='w-[100%] md:w-[80%] list-none pt-[12vh] text-[3vh] font-bold absolute text-black top-[10vh] h-[70vh] bg-white'>
            <li>Transaction ID : {data[val]._id}</li>
            <hr className='border-black border-dotted'/>
            <li>Transaction Type : Credit</li>
            <hr className='border-black border-dotted'/>
            <li>Date : {data[val].date}</li>
            <hr className='border-black border-dotted'/>
            <li>Amount : ${data[val].amount}</li>
            <hr className='border-black border-dotted'/>
            <li>Account number: {data[val].account_num}</li>
            <hr className='border-black border-dotted'/>
            <button onClick={handleClose} className='bg-[#0D1321] text-white mt-3'>Close </button>
          </div>
              )
          }
    </div>
  )
}
