import React, {useContext, useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {FaUser, FaWhatsapp} from 'react-icons/fa';
import TradingViewWidget from '../components/advanceWidget';
import WatchListWidget from '../components/watchListWidget'
import TaperWidget from '../components/taperWidget';
import NewsWidget from '../components/news'
import chart from '/img4.jpg'
import UserContext from '../contexts/auth-context'
import toast, { Toaster } from 'react-hot-toast';
import Loading from '../components/loading';

function Dashboard() {
    const navigate = useNavigate()
     // const {user} = useContext(UserContext);
     const [user, setUser] = useState('')
     const [loading, setLoading] = useState(false)
     useEffect(() => {
   setLoading(true);
  //Runs only on the first render
      const verifyUser = async()=>{
              const newUser =await localStorage.getItem('name')
                if(newUser){
                  setUser(newUser)
                  toast.success('Welcome ' + newUser);

                }
                console.log('no user')
                // navigate('/Onboard')
      }
      verifyUser()
      setLoading(false)
}, []);
  return (
    <div className=' absolute top-0 left-0 min-h-screen w-[100%] text-[white] bg-[#0D1321]'>
    <div className={`${loading ? 'block' : 'hidden'}`}>
    <Loading/>
    </div>
          <div className='mt-[10vh] flex flex-col-reverse md:flex-row justify-center md:gap-[25%] mb-2'>
                <div className='text-[black] md:max-w-[47%]'>
                    <p className='text-white hover:text-[18px] font-bold'>Balance: $ 0.0</p>
                    <div className='flex justify-center gap-3 text-[black]'>
                      <button className="bg-white">Deposit</button>
                      <button className="bg-white" >Withdraw</button>
                      <button className="bg-white" >Stake</button>
                    </div>
                </div>
                <Toaster/>
                <hr className='block md:hidden'/>
                <div className='flex flex-col justify-center items-center md:max-w-[48%] mb-3'>
                  <div className='border-[white] border-2 rounded-full p-2'>
                    <Link to='/profile'><FaUser className='text-[white] text-[25px]'/></Link>
                  </div>
                  <p>{(user) && user}</p>
                </div>
          </div>
          <div className='h-[500px] w-[100%]'>
            <WatchListWidget/>
          </div>
    </div>
  )
}

export default Dashboard
