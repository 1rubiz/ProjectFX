import React, {useState, useEffect} from 'react';
import {rate} from './rates'
import CryptoConverter from './cryptoConverter'
import { checkBalance } from '../contexts/supabase'
import { useUser } from '@clerk/clerk-react'
import Loading from './loading';

export default function MarketSquare(){
	const [fromSym, setFromSym] = useState('');
	const [toSym, setToSym] = useState('');
	const [type] = useState('cryptocurrencies');
	const [to, setTo] = useState('');
	const [from, setFrom] = useState('');
	const [exchangeRate, setExchangeRate] = useState(0);
	const [previousClose, setPreviousClose] = useState(0);
	const [lastUpdated, setLastUpdated] = useState('');
	const cells = 'border-2 border-white p-2';
	const [data, setData] = useState(null);
	const [selectedId, setSelectedId] = useState(null);
	const [bal, setBal] = useState(0);
	const [loading, setLoading] = useState(false)

	const { user } = useUser()
	useEffect(()=>{
		const getuser = async ()=>{
			console.log('searching...')
			await user;
			const newdata= await rate();
			      const bals =await checkBalance(user.id);
		      if(bals.length > 0){
		        setBal(parseInt(bals[0].amount))
		      }
			setData(newdata);
			console.log('done!')
		}
		getuser();
	}, [])

	useEffect(()=>{
		// console.log('changing')
		if(selectedId){
			setFromSym('usd')
			setToSym(data[selectedId].symbol)
			setTo(data[selectedId].name)
			setFrom('United States Dollers')
			setExchangeRate(data[selectedId].current_price)
			setPreviousClose(data[selectedId].high_24h)
			setLastUpdated(data[selectedId].last_updated)
		}
	}, [selectedId]);


	const handleClick=(e)=>{
		const selectedIndex = event.target.selectedIndex;
    const selectedOption = event.target.options[selectedIndex];
    const id = selectedOption.getAttribute('id');
    setSelectedId(id);
	}
	return(
		<div>
		{
	      loading && <Loading/>
	    }
			<div className='w-[100%] flex flex-col justify-center items-center gap-5'>
			<h2>Account balance : $ {bal}</h2>
				<div className='overflow-x-auto'>
					<table className='border-[6px] border-white text-[1.4vh] md:text-[2vh] w-full lg:w-5/6 xl:w-4/5'>
						<thead>
					        <tr className='bg-black border-2 border-white'>
					            <th className={cells}>From</th>
					            <th className={cells}>To</th>
					            <th className={cells}>Exchange Rate</th>
					            <th className={cells}>Previous Rate</th>
					            <th className={cells}>Last updated</th>
					        </tr>
					     </thead>
					   	<tbody>
					        <tr>
					            <td className={cells}>{from}</td>
					            <td className={cells}>{to}</td>
					            <td className={cells}>{exchangeRate}</td>
					            <td className={cells}>{previousClose}</td>
					            <td className={cells}>{lastUpdated}</td>
					        </tr>
					     </tbody>
				    </table>
				</div>
				<section className=''>
					<div >
						<div>
							<div className='flex flex-col justify-center items-center gap-3 md:flex-row mb-2 rounded-full shadow-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50'>
								<select className='text-black bg-white' onChange={handleClick}>
								<option>Select a Currency</option>
									{data && (
									data.map((item, i)=>{
										return(
										<option key={i} id={i}>{item.name}</option>
										)
									})
									)}
										</select>
							</div>
						</div>
						<CryptoConverter type={type} exchangeRate={exchangeRate} previousClose={previousClose} from={from+'('+fromSym+')'} to={to+'('+toSym+')'}/>
					 </div>
				</section>
			</div>
		</div>
		)
}