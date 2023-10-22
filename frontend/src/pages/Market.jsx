import React, {useState} from 'react';
import CryptoWidget from '../components/cryptowidget'
import ForexWidget from '../components/forexWidget';
import StockWidget from '../components/stockWidget'
import CryptoMarket from '../components/cryptomarket'

export default function Landing() {
  const [screens, setScreen] = useState('1');
  const text = (screens === '1') ? 'Crypto Currency Market' : ((screens === '2') ? 'Forex Market' : ((screens === '3') ? 'Stock Market' : 'Error'))
  const display = (screens === '1') ? <CryptoWidget/> : ((screens === '2') ? <ForexWidget/> : ((screens === '3') ? <StockWidget/> : 'Error'))
  const lists = 'mx-2 hover:cursor-pointer hover:border-b-2 border-[#F0EBD8] p-2 md:p-4 lg:p-3 font-semibold';
  const handleSwitch = (e)=>{
    setScreen(e.target.id)
  }


  return (
    <div className=' absolute top-0 left-0 min-h-screen w-[100%] text-[white] bg-[#0D1321]'>
          <div className='mt-[10vh] mb-2 text-[15px]'>
            <div className='list-none flex justify-evenly items-center mb-5'>
              <ul className='flex gap-8'>
                <li className={`${lists} ${screens === '1' && 'bg-white text-[#0D1321] rounded-[5px]'}`} id='1' onClick={handleSwitch}>Cryptocurrency chart</li>
                {/*<li className={`${lists} ${screens === '2' && 'bg-white text-[#0D1321] rounded-[5px]'}`} id='2' onClick={handleSwitch}> Forex</li>
                <li className={`${lists} ${screens === '3' && 'bg-white text-[#0D1321] rounded-[5px]'}`} id='3' onClick={handleSwitch}> Stock</li>*/}
              </ul>
            </div>

           {/* <div className='text-[#F0EBD8] font-serif text-[20px] md:text-[28px] lg:text-[33px] underline'>
              {text}
            </div>*/}
              <CryptoMarket/>
            <div>
              {display}
            </div>
          </div>
    </div>
  )
}
