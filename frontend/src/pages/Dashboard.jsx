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
import { useUser, UserButton } from "@clerk/clerk-react";
import { useAuth } from '@clerk/clerk-react';
import { createClient } from "@supabase/supabase-js";
import { checkUser, createUser, createwithdrawal, createdeposit, createBalance, checkBalance, updateBalance } from '../contexts/supabase'

function Dashboard() {
    const [amount, setAmount] = useState(0)
    const [bal, setBal] = useState(0)
    const [errs, setErrs] = useState('');
    const [stat, setStat] = useState(null);
    const navigate = useNavigate()
    const { user } = useUser()
     const [users, setUser] = useState('')
     const [loading, setLoading] = useState(false)

          const { getToken } = useAuth();

     useEffect(() => {
       setLoading(true);
        const verifyUser = async()=>{
        await user;
        if(user){
            setUser(user.fullName)
            toast.success('Welcome ' + user.firstName);
        }
      const verified = await checkUser(user.id);
      if(verified === 2){
        const userStatus =await createUser(user.emailAddresses[0].emailAddress, user.id, user.fullName)
        createBalance(user.id, 0.00);
      }
      const bals =await checkBalance(user.id);
      if(bals.length > 0){
        setBal(parseInt(bals[0].amount))
      }
      setLoading(false)
    }

    verifyUser();
}, []);

     


     const handleAmountChange = (event) => {
    setAmount(event.target.value);
  }

  const handleDeposit = async () => {
    setLoading(true)
    await user
    if(amount){
        const calculatedResult = parseInt(bal) + parseInt(amount);
        setBal(parseInt(calculatedResult));
        setStat(null)
        createdeposit(amount, user.id)
        const bals = await updateBalance(user.id, calculatedResult)
        toast.success('$ '+amount+' successfully deposited');
    }else{setErrs('input an amount')}
    setLoading(false)
  }

  const handleWithdraw = async() => {
    setLoading(true)
    if(amount){
        if(amount < bal){
          const calculatedResult = parseInt(bal) - parseInt(amount);
        setBal(parseInt(calculatedResult));
        createwithdrawal(amount, user.id)
        const bals = await updateBalance(user.id, calculatedResult)
        setStat(null)
        toast.success('$ '+amount+ ' successfully wiithdrawn from account');
      }else{
        setErrs('Withdraw amount exceed Account balance ')
      }
    }else{
      setErrs('input an amount')
    }
    setLoading(false)
  }

  const handleClose = (e)=>{
    if(e.target.id === 'withdraw'){
      setStat('withdraw')
    }else if(e.target.id === 'deposit'){
      setStat('deposit')
    }else{
      setStat(null)
    }
  }

  return (
    <div className=' absolute top-0 left-0 min-h-screen w-[100%] text-[white] bg-[#0D1321]'>
    <div className={`${loading ? 'block' : 'hidden'}`}>
    {
      loading && <Loading/>
    }
    </div>
          <div className='mt-[10vh] flex flex-col-reverse md:flex-row justify-center md:gap-[25%] mb-2'>
                <div className='text-[black] md:max-w-[47%]'>
                    <p className='text-white hover:text-[18px] font-bold'>Balance: $ {parseInt(bal).toFixed(2)}</p>
                    <div className='flex justify-center gap-3 text-[black]'>
                      <button className="bg-white text-black" id='deposit' onClick={handleClose}>Deposit</button>
                      <button className="bg-white text-black" id='withdraw' onClick={handleClose}>Withdraw</button>
                      <Link to='/market'><button className="bg-white text-black" >Trade</button></Link>
                    </div>
                </div>
                <Toaster/>
                <hr className='block md:hidden'/>
                <div className='flex flex-col justify-center items-center md:max-w-[48%] mb-3'>
                  <div className='border-[white] border-2 rounded-full p-2'>
                    
                    <UserButton/>
                  </div>
                  <p>{(users) && users}</p>
                </div>
          </div>
          {stat && (
            <div className='absolute top-[10vh] left-0 h-[70vh] z-10 bg-[#0D1321] border-2 p-2 w-[90%] pt-9'>
              <div className='flex justify-center items-center gap-3'>
                $<input
                  className='w-[30%] text-[2vh] p-2 h-[5vh] text-black bg-white'
                  placeholder='Input amount'
                  type='number'
                  onChange={handleAmountChange}
                />
                
                {
                  stat === 'withdraw' && (<button onClick={handleWithdraw} className="bg-white text-black">withdraw</button>)
                }
                {
                  stat  === 'deposit' && (<button onClick={handleDeposit} className="bg-white text-black"> Deposit</button>)
                }
                <button className="bg-white text-black" onClick={handleClose}>Close</button>
          </div>
          <p className='text-[red]'>{errs}</p>
          </div>
            )}
          <div className='h-[500px] w-[100%]'>
            <WatchListWidget/>
          </div>
    </div>
  )
}

export default Dashboard
