import React, { useEffect, useState} from 'react';
import { getTrade, checkUser } from '../contexts/supabase'
import { useUser } from "@clerk/clerk-react";
import fire from '/fire-logo.svg'

export default function TradeHistory() {

    const [data, setData]= useState(null);
    const { user } = useUser()
useEffect(()=>{
// 
  const getData =async ()=>{
      await user;
      const verified = await checkUser(user.id);
      // console.log(verified);
      if(verified === 2){
        console.log('user does not exists.. pls signUp');
        // const userStatus = createUser(user.email, user.id, user.fullname)
        // console.log(userStatus);
      }else if(verified === 1){
       const newData = await getTrade(user.id);
       if(newData.length > 0){
        setData(newData)
      }
      }
    }
      getData();
}, [])

  return (
    <div className=''>
          <div>
           <hr/>
      
           {
                data ? (
                data.map((item, i)=>{
                  return(
                    <div key={i} className='text-black m-4 flex flex-col gap-2 justify-center items-center'>
                       <div class="bg-[#748CAB] rounded-lg shadow-md p-6  w-[80%]">
                        <div class="flex items-center justify-between">
                          <div class="flex items-center">
                            <div class="h-8 w-8 p-1 bg-white rounded-full flex items-center justify-center text-sm font-semibold mr-2">
                              <img src={fire} className='h-[30px]'/>
                            </div>
                            <div>
                              <p class="text-black font-semibold text-lg">{item.id} </p>
                              <p class="text-white text-sm">Trade Type : {item.type} </p>
                            </div>
                          </div>
                          <div class="text-right">
                            <p class="text-gray-800 text-2xl font-semibold">Amount : {item.amount} </p>
                            <p class="text-white"> {item.exchange_rate} - Exchange Rate</p>
                            <p class="text-white"> {item.previous_close} - Previous Exchange Rate</p>
                          </div>
                        </div>
                        <div class="mt-4">
                          <p class="text-white"> {item.from}  to  {item.to} </p>
                          <p class="text-white">Account Balance:  {item.balance} </p>
                        </div>
                      </div>
                </div>
                  )
                })
                ) : (
                  <p> No Trade History</p>
                )
              }
          </div>
    </div>
  )
}
