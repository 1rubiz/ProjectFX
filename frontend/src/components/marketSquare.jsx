import React, {useState, useEffect} from 'react';
import {rate} from './rates'
import CryptoConverter from './cryptoConverter'

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

	useEffect(()=>{
		const getuser = async ()=>{
			console.log('searching...')
			const newdata= await rate();
			const { trends } =await newdata.data;
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
				<div>
					<table className='border-[6px] border-white'>
				        <tr className='bg-black border-2 border-white'>
				            <th className={cells}>From</th>
				            <th className={cells}>To</th>
				            <th className={cells}>Exchange Rate</th>
				            <th className={cells}>Previous Rate</th>
				            <th className={cells}>Last updated</th>
				        </tr>
				        <tr>
				            <td className={cells}>{from}/{fromSym}</td>
				            <td className={cells}>{to}/{toSym}</td>
				            <td className={cells}>{exchangeRate}</td>
				            <td className={cells}>{previousClose}</td>
				            <td className={cells}>{lastUpdated}</td>
				        </tr>
				    </table>
				</div>

				<div className='flex flex-col justify-center items-center gap-3 md:flex-row mb-2 rounded-full shadow-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50'>
						<select className='text-black' onChange={handleClick}>
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
		)
}