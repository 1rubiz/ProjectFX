import React, { useState } from 'react';

function CryptoConverter() {
  const [fromCurrency] = useState('BTC'); // Default values from the provided parameters
  const [toCurrency] = useState('USD');
  const [type] = useState('currency');
  const [exchangeRate] = useState(28523.2);
  const [previousClose] = useState(28520.2);
  const [date] = useState(new Date().toLocaleString());
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState(0);

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

  return (
    <div>
      <h1>Crypto Converter</h1>
      <p>From: {fromCurrency}</p>
      <p>To: {toCurrency}</p>
      <p>Date: {date}</p>
      <p>Exchange Rate: {exchangeRate}</p>
      <p>Previous Close: {previousClose}</p>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={handleAmountChange}
      />
      <button onClick={handleBuy}>Buy</button>
      <button onClick={handleSell}>Sell</button>
      <p>Result: {result.toFixed(2)} {toCurrency}</p>
    </div>
  );
}

export default CryptoConverter;
