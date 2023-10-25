import React, { useState, useEffect } from 'react';
import {useUser} from "@clerk/clerk-react";
import { createTrade } from '../contexts/supabase'

function CryptoConverter({type, exchangeRate, previousClose, from, to}) {
  // const [from] = useState('BTC'); // Default values from the provided parameters
  // const [to] = useState('USD');
  // const [type] = useState('currency');
  // const [exchangeRate] = useState(28523.2);
  // const [previousClose] = useState(28520.2);
  // const [date] = useState(new Date().toLocaleString());
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);
  const [bal, setBal] = useState(0)
  const { user } = useUser();

  const setTrade =async ()=>{
    await user;
        // console.log(user);
    const tradestatus =await createTrade(user.id, type, amount, exchangeRate, previousClose, from, to, bal);
    console.log(tradestatus);
  }
  // setTrade();
  useEffect(() => {
      const balance = localStorage.getItem('balance');
      if (balance) {
        setBal(parseInt(balance))
      }
    }, []);
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  }

  const handleBuy = () => {
    const calculatedResult = amount * exchangeRate;
    setResult(calculatedResult);
  }

  const handleSell = () => {
    const calculatedResult = amount / exchangeRate;
    setResult(calculatedResult);
  }
// <p>Date: {date}</p>
  return (
    <div>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={handleAmountChange}
        className='rounded-full shadow-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-black mb-2'
      />
      <div>
      <button onClick={handleBuy} className='text-black'>Buy</button>
      <button onClick={handleSell} className='text-black'>Sell</button>
      <p>Result: {result.toFixed(2)} {to}</p>
      </div>
    </div>
  );
}

export default CryptoConverter;
