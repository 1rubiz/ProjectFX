import React, {useState, useEffect} from 'react';
import {rate} from './rates'
import CryptoConverter from './cryptoConverter'
import { checkBalance } from '../contexts/supabase'
import { useUser } from '@clerk/clerk-react'


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

	const { user } = useUser()
	useEffect(()=>{
		const getuser = async ()=>{
			console.log('searching...')
			await user;
			const newdata= await rate();
			const { trends } =await newdata.data;
			      const bals =await checkBalance(user.id);
		      if(bals.length > 0){
		        setBal(parseInt(bals[0].amount))
		      }
			// console.log(trends)
			setData(trends);
			console.log('done!')
		}
		getuser();
	}, [])

	useEffect(()=>{
		// console.log('changing')
		if(selectedId){
			setFromSym(data[selectedId].from_symbol)
			setToSym(data[selectedId].to_symbol)
			setTo(data[selectedId].to_currency_name)
			setFrom(data[selectedId].from_currency_name)
			setExchangeRate(data[selectedId].exchange_rate)
			setPreviousClose(data[selectedId].previous_close)
			setLastUpdated(data[selectedId].last_update_utc)
		}
	}, [selectedId]);


	const handleClick=(e)=>{
		const selectedIndex = event.target.selectedIndex;
    const selectedOption = event.target.options[selectedIndex];
    const id = selectedOption.getAttribute('id');
    setSelectedId(id);
    console.log(id)
	}
	return(
		<div>
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
					            <td className={cells}>{to}/{fromSym}</td>
					            <td className={cells}>{from}/{toSym}</td>
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
										<option key={i} id={i}>{item.from_symbol}/{item.to_symbol} </option>
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