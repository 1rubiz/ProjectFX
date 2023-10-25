import React, { useState, useEffect} from 'react';
import CashierMsg from './cashiermsg'
import { useUser } from '@clerk/clerk-react'
import { getAccount } from '../contexts/supabase';

export default function Deposit() {
  const { user } = useUser();
  const [val, setVal] = useState(null)
  const [data, setData]= useState(null);

    useEffect(()=>{
    const getDate =async ()=>{
      await user;
      const newData = await getAccount('deposit', 'd_id', user.id);
      setData(newData);
    }
    getDate();
  }, [])

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
              (data) ? (
                data.map((item, i)=>{
                  return(
                    <div className='w-[100%] p-2 hover:opacity-50'  onClick={()=> handleDisplay(i)} key={i}>
                      <CashierMsg type='deposit' _id={item.id} date={item.created_at} customColor='text-[lightGreen]' amount={item.amount}/>
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
