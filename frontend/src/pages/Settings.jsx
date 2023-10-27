import React, {useState} from 'react';
import ChangePassword from '../components/changePassword';
import Verification from '../components/verification';
import Profile from '../components/profile'


export default function Settings() {
  const [screens, setScreen] = useState('1');
  const text = (screens === '1') ? 'Crypto Currency Market' : ((screens === '2') ? 'Forex Market' : ((screens === '3') ? 'Stock Market' : 'Error'))
  const display = (screens === '1') ? <Profile/> : ((screens === '2') ? <Verification/> : ((screens === '3') ? <ChangePassword/> : 'Error'))
  const lists = 'mx-2 hover:cursor-pointer hover:border-b-2 border-[#F0EBD8] p-1 md:p-4 lg:p-3 font-semibold';
  const handleSwitch = (e)=>{
    setScreen(e.target.id)
  }


  return (
    <div className=' absolute top-0 left-0 min-h-screen w-[100%] text-[white] bg-[#0D1321]'>
          <div className='mt-[12vh] mb-2 text-[15px]'>
          <div className='mb-2'>
           <p className='font-serif text-[30px]'>Account Settings</p>
           <hr/>
          </div>
          </div>
          <div className='mt-[1vh] mb-2 text-[15px]'>
            <div className='list-none flex justify-evenly items-center mb-5'>
              <ul className='flex gap-8'>
                <li className={`${lists} ${screens === '1' && 'bg-white text-[#0D1321] rounded-[5px]'}`} id='1' onClick={handleSwitch}>Profile</li>
                {/*<li className={`${lists} ${screens === '2' && 'bg-white text-[#0D1321] rounded-[5px]'}`} id='2' onClick={handleSwitch}> Verification</li>*/}
                {/*<li className={`${lists} ${screens === '3' && 'bg-white text-[#0D1321] rounded-[5px]'}`} id='3' onClick={handleSwitch}> Change password</li>*/}
              </ul>
            </div>

            <div>
              {display}
            </div>
          </div>
    </div>
  )
}