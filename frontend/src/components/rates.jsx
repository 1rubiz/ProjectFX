import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://real-time-finance-data.p.rapidapi.com/market-trends',
  params: {
    trend_type: 'CRYPTO',
    country: 'us',
    language: 'en'
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_TRADE_API,
    'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
  }
};

export async function rate(){
  try {
  const response = await axios.request(options);
  // console.log(response.data);
  return(response.data);
} catch (error) {
  console.error(error);
  return(error);
}
}