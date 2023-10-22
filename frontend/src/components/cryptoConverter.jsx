import React, { useState, useEffect } from 'react';

function CryptoConverter() {
  const [fromCurrency] = useState('BTC'); // Default values from the provided parameters
  const [toCurrency] = useState('USD');
  const [type] = useState('currency');
  const [exchangeRate] = useState(28523.2);
  const [previousClose] = useState(28520.2);
  const [date] = useState(new Date().toLocaleString());
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState(0);
  const [bal, setBal] = useState(0)
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
      <p>Account Balance: {bal}</p>
      <p>From: {fromCurrency}</p>
      <p>To: {toCurrency}</p>
      <p>Exchange Rate: {exchangeRate}</p>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={handleAmountChange}
        className='text-black'
      />
      <div>
      <button onClick={handleBuy} className='text-black'>Buy</button>
      <button onClick={handleSell} className='text-black'>Sell</button>
      <p>Result: {result.toFixed(2)} {toCurrency}</p>
      </div>
    </div>
  );
}

export default CryptoConverter;
