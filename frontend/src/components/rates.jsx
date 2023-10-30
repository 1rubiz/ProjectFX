import axios from 'axios';

export async function rate(){
  try {
 const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
  params: {
    vs_currency: 'usd',
    order: 'market_cap_desc',
    per_page: 100,
    page: 1,
    sparkline: false,
    locale: 'en'
  },
  headers: {
    'accept': 'application/json'
  }
})
  
  return(response.data);

 } catch (error) {
  console.error(error);
  return(error);
}
}



