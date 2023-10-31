import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useAuth, useUser } from '@clerk/clerk-react';
import {fetchData, findRecordById} from '../contexts/supabase'
import { inbox, createInbox } from '../contexts/supabase'
import Loading from '../components/loading'

export default function Inbox() {
  const { user } = useUser();
  // console.log(user);
  const [data, setData]= useState(null);
  const [loading, setLoading] = useState(false)
useEffect(()=>{
// 
  const getData =async ()=>{
      setLoading(true)
      // await user;
      const response = await inbox();
      setData(response)
      setLoading(false)
      // createInbox('Join the LitFX community today and unlock your potential in the financial markets. Your future starts here!', user.id)
    }
      getData();
}, [])


  return (
    <div className=' absolute top-0 left-0 min-h-screen w-[100%] text-[white] bg-[#0D1321]'>
        {
          loading && <Loading/>
        }
          <div className='mt-[11vh] mb-2'>
           <p className='font-serif text-[30px]'>Inbox</p>
           <hr/>
           <div className='w-[100%] p-2 flex flex-col justify-center items-center gap-2 pt-2'>
            {data &&
              (data.length !== 0) ? (
                data.map((item, i)=>{
                  const mydate = (item.created_at).split('T');
                  return(
                    <div id={item.id} className='w-[100%] p-2 rounded-[5px] border-2 border-white' key={i}>
                      <div>ANNOUNCING : {item.msg}</div>
                      <div>Date : {mydate[0]}</div>
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


  
// function App() {
  
 
//   return (
    
//   );
// }