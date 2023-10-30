import React, { useState, useEffect } from 'react';
import {useUser} from "@clerk/clerk-react";
import { createTrade } from '../contexts/supabase'
import Success from './success'
import { checkBalance, getWallet } from '../contexts/supabase'
import toast, { Toaster } from 'react-hot-toast';

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

  const setTrade =async ()=>{
    await user;
    const tradestatus =await createTrade(user.id, type, amount, exchangeRate, previousClose, from, to, bal);
    console.log(tradestatus);
  }
  useEffect(() => {
      const getuser = async ()=>{
      console.log('searching...')
      await user;
      const bals =await checkBalance(user.id);
          if(bals.length > 0){
            setBal(parseInt(bals[0].amount))
          }
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

  const handleBuy = () => {
    if(previousClose !== 0){
        if(bal > result){
          console.log('buyable')
          setComplete(true)
          setSuccess(true)
          setTimeout(() => {
              // console.log("Delayed for 1 second.");
            setPurchase(false)
            setSuccess(false)
            }, "3000");
          toast.success(to +' Successfully bought!!');
          // setTimeout(, 3000)
      }else{
        setErrs('Account Balance is not sufficient for this purchase')
      }
    }else{
        setErrs('Select a trade')
      }
    
  }

  const handleSell = async () => {
          if(errs){
        console.log(errs)
        toast.error(errs);
      }else{
        toast.success(to +' Successfully bought!!');
      }
      
  }
  const selectBuy =()=>{
    setPurchase(true)
    setTransaction('buy')
    const calculatedResult = amount * exchangeRate;
    setResult(calculatedResult);
    console.log(result)
  }

  const selectSell = async ()=>{
      setPurchase(true)
      setTransaction('sell');
      if(amount <= 0){
        setErrs('Select Amount')
      }
      // console.log(to[2])
      if(!to[2]){
        setErrs('Select Currency')
      }else{
        const wallet = await getWallet()
      // console.log(wallet)
      if(wallet.length < 0){
        setErrs('You do not have this currency in your wallet')
        toast.error('You do not have this currency in your wallet');
      }
      }
    //   const calculatedResult = amount / exchangeRate;
    // setResult(calculatedResult);
    // console.log(result)
  }


  return (
    <div>
      <Toaster/>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={handleAmountChange}
        className='rounded-full shadow-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-black mb-2'
      />
      <div>
      <button onClick={selectBuy} className='text-black mr-4'>Buy</button>
      <button onClick={selectSell} className='text-black'>Sell</button>
      
      </div>
      {
            purchase && (
              <div className='absolute top-[20vh] left-0 h-[60vh] w-[100%] bg-white'>
                <div className='relative'>
                    <div className='w-[100%] mt-[10vh] text-black font-bold flex flex-col justify-center items-center'>
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
