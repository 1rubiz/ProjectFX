import React, {useContext} from 'react'
import {Link} from 'react-router-dom';
import {FaUser, FaWhatsapp} from 'react-icons/fa';
import TradingViewWidget from '../components/advanceWidget';
import WatchListWidget from '../components/watchListWidget'
import TaperWidget from '../components/taperWidget';
import NewsWidget from '../components/news'
import chart from '/img4.jpg'
import UserContext from '../contexts/auth-context'

function Dashboard() {
     const {user} = useContext(UserContext);
     console.log(user)
  return (
    <div className=' absolute top-0 left-0 min-h-screen w-[100%] text-[white] bg-[#0D1321]'>
          <div className='mt-[10vh] flex flex-col-reverse md:flex-row justify-center md:gap-[25%] mb-2'>
                <div className='text-[black] md:max-w-[47%]'>
                    <p className='text-white hover:text-[18px] font-bold'>Balance: $ 0.0</p>
                    <div className='flex justify-center gap-3 text-white'>
                      <button>Deposit</button>
                      <button>Withdraw</button>
                      <button>Stake</button>
                    </div>
                </div>
                <hr className='block md:hidden'/>
                <div className='flex flex-col justify-center items-center md:max-w-[48%] mb-3'>
                  <div className='border-[white] border-2 rounded-full p-2'>
                    <Link to='/profile'><FaUser className='text-[white] text-[25px]'/></Link>
                  </div>
                  <p>{(user !== null) && user.email}</p>
                </div>
          </div>
          <div className='h-[500px] w-[100%]'>
            <WatchListWidget/>
          </div>
    </div>
  )
}

export default Dashboard
