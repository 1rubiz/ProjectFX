import React, { useState, useEffect } from 'react';
import {useUser} from "@clerk/clerk-react";
import { createTrade } from '../contexts/supabase'
import Success from './success'
import { updateBalance, checkBalance, getWallet, setWallet } from '../contexts/supabase'
import toast, { Toaster } from 'react-hot-toast';
import Loading from './loading';

function CryptoConverter({type, exchangeRate, previousClose, from, to}) {
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);
  const [bal, setBal] = useState(0)
  const [success, setSuccess]= useState(false);
  const [purchase, setPurchase] = useState(false);
  const { user } = useUser();
  const [transaction, setTransaction] = useState('sell')
  const [errs, setErrs] = useState('')
  const [complete, setComplete] = useState(false)
  const [userWallet, setUserWallet] = useState(null);
  const [buyWallet, setBuyWallet] = useState(0)
  const [loading, setLoading] = useState(false)

  const setTrade =async (types, balance)=>{
    await user;
    const tradestatus =await createTrade(user.id, types, amount, exchangeRate, previousClose, from, to, balance, result);
    console.log(tradestatus);
  }
  useEffect(() => {
    setLoading(true)
      const getuser = async ()=>{
      console.log('searching...')
      await user;
      const bals =await checkBalance(user.id);
          if(bals.length > 0){
            setBal(parseInt(bals[0].amount))
          }
          setLoading(false)
      // console.log(trends)
    }
    getuser();
    }, []);
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  }

  const handleClose = ()=>{
    setPurchase(false)
    setErrs('')
    setSuccess(false)
  }

  const handleBuy = async () => {
    setLoading(true)
    if(previousClose !== 0){
        if(bal > result){
            if(amount > 0){
              const newBal = (bal - parseInt(result))
              await setWallet(user.id, to, (parseInt(amount) + parseInt(buyWallet)))
              setBal(newBal)
              await setTrade('BUY', newBal)
              await updateBalance(user.id, newBal)
              setSuccess(true)
              setTimeout(() => {
                handleClose()
                }, "3000");
              toast.success(to +' Bought Successfully!!');
              location.reload();
            }else{
                setErrs('Amount cannot be less than one(1)')      
            }
      }else{
        setErrs('Account Balance is not sufficient for this purchase')
      }
    }else{
        setErrs('Select a trade')
      }
      setLoading(false)
    
  }

  const handleSell = async () => {
          setLoading(true)
          if(errs){
        setErrs(errs)
        toast.error(errs);
      }else{
        if(userWallet[0].amount >= amount){
          const walletAmount = parseInt(userWallet[0].amount) - amount;
          const newBal = (bal + parseInt(result))
          await setWallet(user.id, to, walletAmount)
          await setTrade('SELL', newBal)
          await updateBalance(user.id, newBal)
          setBal(newBal)
          setSuccess(true)
          setTimeout(() => {
            handleClose()
            }, "3000");
          toast.success(to +' Sold Successfully!!');
          location.reload();
        }else{
          toast.error('Insufficient cryptocurrency in wallet');
          setErrs('Insufficient cryptocurrency in wallet')
        }
      }
  setLoading(false)    
  }
  const selectBuy = async ()=>{
    setPurchase(true)
    setTransaction('buy')
    const calculatedResult = amount * exchangeRate;
    setResult(calculatedResult);
                await getWallet(user.id, to)
                .then((data)=>{
                    console.log(data);
                    if(data.length > 0){
                        // let walletAmount = amount + parseInt(data[0].amount);
                      setBuyWallet(data[0].amount)
                   }
                        // else{
                        // let walletAmount = amount;
                   // }
                 })
                 .catch((err)=> console.log(err))
  }

  const selectSell = async ()=>{
      setPurchase(true)
      setTransaction('sell');
      if(amount <= 0){
        setErrs('Select Amount')
      }
      if(!to[2]){
        setErrs('Select Currency')
      }else{
        const calculatedResult = amount * exchangeRate;
      setResult(calculatedResult);

        await getWallet(user.id, to)
        .then((data)=>{
          // console.log(data);
          if(data.length > 0){
              setUserWallet(data)
          }else{
            console.log('nothing')
            console.log('You do not have this currency in your wallet')
            toast.error('You do not have this currency in your wallet');
          }
        })
        .catch((err)=> console.log(err))
      }
      
  }
const handleClick=(e)=>{
  console.log(e.target.value)
}

  return (
    <div>
      { 
        loading && <Loading/>
      }
      <Toaster/>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={handleAmountChange}
        className='rounded-full bg-white shadow-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-black mb-2'
      />
      <div>
      <button onClick={selectBuy} className='text-black bg-white mr-4'>Buy</button>
      <button onClick={selectSell} className='text-black bg-white'>Sell</button>
      
      </div>
      {
            purchase && (
              <div className='absolute top-[20vh] left-0 h-[60vh] w-[100%] bg-white'>
                <div className='relative'>
                    <div className='w-[100%] mt-[10vh] text-black font-bold flex flex-col justify-center items-center'>
                        
                      {
                            (transaction === 'sell' && userWallet) && (
                              <div>
                                <h1>Wallet</h1>
                                Currency : {userWallet[0].name}<br/>
                                {userWallet[0].name} in Wallet: {userWallet[0].amount}
                            </div>
                            ) 
                      }
                        {
                          !complete && (
                                <div>
                          <div>
                              <p>Account balance : $ {bal}</p>
                              <p>Cost of trading : $ {result.toFixed(2)}</p>
                            </div>
                            <div>
                            {
                              (transaction === 'buy') && (
                                <button onClick={handleBuy} className='text-black bg-[lime]'>Buy</button>
                              )}

                              {
                                (transaction === 'sell') && (
                                  <button onClick={handleSell} className='text-black bg-[blue]'>Sell</button>
                                )
                            }
                              <button onClick={handleClose} className='text-black bg-[red] ml-3'>Close</button>
                        </div>
                        <p className='text-[red]'>{errs}</p>
                        </div>
                          )
                        }
                        {success && (<Success/>)}
                    </div>
                </div>
              </div>
            )
        }
    </div>
  );
}

export default CryptoConverter;
