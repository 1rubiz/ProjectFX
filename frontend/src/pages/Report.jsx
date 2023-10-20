import React, {useState} from 'react';
import TradeHistory from '../components/tradeHistory'
import StakeHistory from '../components/stakeHistory'

export default function Report() {
  const [screens, setScreen] = useState('2');
  const display = (screens === '2') ? <TradeHistory/> : ((screens === '2') ? <StakeHistory/> : 'Error')
  const lists = 'mx-2 hover:cursor-pointer hover:border-b-2 border-[#F0EBD8] p-2 md:p-4 lg:p-3 font-semibold';
  const handleSwitch = (e)=>{
    setScreen(e.target.id)
  }


  return (
    <div className=' absolute top-0 left-0 min-h-screen w-[100%] text-[white] bg-[#0D1321]'>
          <div className='mt-[12vh] mb-2 text-[15px]'>
          <div className='mb-2'>
           <p className='font-serif text-[30px]'>Reports</p>
          </div>
            <div className='list-none flex justify-evenly items-center mt-4 mb-5'>
              <ul className='flex gap-8'>
                {/*<li className={`${lists} ${screens === '1' && 'bg-white text-[#0D1321] rounded-[5px]'}`} id='1' onClick={handleSwitch}>Stake History</li>*/}
                <li className={`${lists} ${screens === '2' && 'bg-white text-[#0D1321] rounded-[5px]'}`} id='2' onClick={handleSwitch}> Trade History</li>
              </ul>
            </div>
            <div>
              {display}
            </div>
          </div>
    </div>
  )
}
