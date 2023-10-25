import React from 'react'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';


export default function CashierMsg({
	_id,
	customClass,
	customColor,
	date,
	amount,
	type
}){

	return(
		<div className={`${customClass} flex justify-center items-center w-[100%] h-[11vh] bg-[#3E5C76] rounded-[5px]`}>
			<div className='w-[9%] h-[6vh] rounded-full flex justify-center items-center bg-[white]'> {(type === 'deposit') ? (<FaArrowUp className={`text-[lightGreen]`}/>) : (<FaArrowDown className={`text-[red]`}/>)} </div>
			<div className='flex flex-col text-left w-[60%] ml-8'>
				<div>Transaction ID:{_id}</div>
				<div>Date: {date}</div>
			</div>
			<div className={`w-[20%] ${type === 'deposit' ? 'text-[lightGreen]' : 'text-[#ed2f2f]'} font-semibold`}>$ {amount}</div>
		</div>
	)
}