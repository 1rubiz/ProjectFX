import React, { useEffect, useState} from 'react';
import { getTrade, checkUser } from '../contexts/supabase'
import { useUser } from "@clerk/clerk-react";
import fire from '/fire-logo.svg'
import Loading from './loading';

export default function TradeHistory() {

    const [data, setData]= useState(null);
    const { user } = useUser()
    const cells = 'border-2 border-white p-1 md:p-2';
    const [loading, setLoading] = useState(false);

useEffect(()=>{
  const getData =async ()=>{
    setLoading(true)
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
      setLoading(false)
    }
      getData();
}, [])

  return (
    <div className=''>
    {
      loading && <Loading/>
    }
          <div>
           <hr/>
           <div className='mt-3 flex justify-center items-center'>
          <table className='border-[6px] border-white text-[1.2vh] md:text-[1.3vh] w-full lg:w-5/6 xl:w-4/5'>
            <thead>
                  <tr className='bg-black border-2 border-white bg-[#3E5C76] text-white'>
                      <th className={cells}>ID</th>
                      <th className={cells}>TYPE</th>
                      <th className={`${cells} hidden md:block`}>FROM</th>
                      <th className={cells}>TO</th>
                      <th className={cells}>COST</th>
                      <th className={cells}>Exchange Rate</th>
                      <th className={`${cells} hidden md:block`}>BALANCE</th>
                      <th className={cells}>Last updated</th>
                  </tr>
               </thead>
              <tbody>
                  {
                      data ? (
                      data.map((item, i)=>{
                        const time = (item.created_at).split('T')[0];
                        return(
                          <tr key={i}>
                            <td className={cells}>{item.id}</td>
                            <td className={cells}>{item.type}</td>
                            <td className={`${cells} hidden md:block`}>USD</td>
                            <td className={cells}>{item.to}</td>
                            <td className={cells}>{item.cost}</td>
                            <td className={cells}>{item.exchange_rate}</td>
                            <td className={`${cells} hidden md:block`}>{item.balance}</td>
                            <td className={cells}>{time}</td>
                        </tr>
                        )
                      })
                      ) : (
                        <p> No Trade History</p>
                      )
                  }
                  
               </tbody>
            </table>
        </div>
       </div>
    </div>
  )
}
