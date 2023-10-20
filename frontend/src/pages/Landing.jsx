import React, {useState, useEffect} from 'react';
import globe from '/globe.jpg'
import {FaFire} from 'react-icons/fa';
import landing from '/landing3.jpg';
import fire from '/fire-logo.svg'
import img from '/img5.jpg'
import About from '../components/about';
import { Link } from 'react-router-dom';
import TaperWidget from '../components/taperWidget'
import Form from './Form'

export default function Landing() {
  const [urls, setUrl] = useState('');

  useEffect(()=>{
    const getUser = async ()=>{
      const user = await localStorage.getItem('name');
      if(user){
        setUrl('/dashboard');
        console.log('user')
      }else{
        setUrl('/onboard');
        console.log('no user')
      }
    }
    getUser();
  },[])
  return (
    <div className=' absolute top-0 left-0 min-h-screen w-[100%] z-[0] text-[white] bg-[#0D1321]'>
  {/*mobile view*/}
      <div className='block md:hidden lg:hidden'>
          <div className='mt-[10vh] mb-[8vh]'>
            <div className='w-[100%] flex flex-col justify-center items-center'>
                <div className='flex justify-left items-center pr-7'>
                  <img src={fire} className='h-[15vh]'/>
                  <p className='text-[8vh] text-[#646cff] mt-[6vh] font-bold font-serif'>LitFX</p>
                </div>
                <p>Your Gateway to Financial Freedom </p>
            </div>
            <div className='text-[26px] font-bold p-4 mt-[2vh] text-white-900'>
              <p>Discover a world of of opportunities with LitFX.</p>

              <p className='text-[22px] font-semibold mt-4 mb-2'>Start trading today!</p>
              <Link to={urls}><button className='bg-[#646cff] text-[18px] text-[white]'>Get started</button></Link>
            </div>
        </div>
        <img src={landing} className='absolute top-0 left-0 z-[-1] h-[600px] w-[100%] blur-sm'/>
      </div>

      {/*tablet and deskop view*/}
      <div className='hidden md:block lg:block'>
      <img src={img} className='top-0 right-0 z-[-1] h-[40vh] md:h-[86vh] lg:h-[88vh] w-[100%] lg:w-[100%] blur-[1px]'/>
          <div className='absolute top-[17vh] md:top-[10vh] left-2 mt-[10vh] lg:ml-3 md:mt-[15vh] lg:mt-[10vh] md:w-[80%] lg:w-[40%]'>
              <div className='w-[100%]'>
                  <div className='flex justify-left items-center'>
                    <img src={fire} className='h-[80px]'/>
                    <p className='text-[60px] text-[#646cff] mt-[1vh] font-bold font-serif'>LitFX</p>
                  </div>
                  
              </div>
              <div className='text-[19px] text-left ml-8 mt-[2vh] text-white-900 w-[50%] lg:w-[90%]'>
                <p className='text-[25px]'>Your Gateway to Financial Freedom </p>
                <p>Discover a world of of opportunities with LitFX.</p>
                <p className='text-[22px] font-bold'>Start trading today!</p>
                <Link to={urls}><button className='bg-[#646cff] text-[white] w-[50%]'>Get started</button></Link>
              </div>
        </div>
        
      </div>

      <div className='mt-[2vh] mb-[2vh]'>
          <TaperWidget/>
        </div>
        <About/>
        <Form/>     
    </div>
  )
}

/      // <div className='hidden md:block lg:block'>
      //     <div className='mt-[10vh] lg:ml-3 md:mt-[25vh] lg:mt-[38vh]'>
      //         <div className='w-[60%]'>
      //             <div className='flex justify-left items-center'>
      //               <img src={fire} className='h-[80px]'/>
      //               <p className='text-[60px] text-[#646cff] mt-[1vh] font-bold font-serif'>LitFX</p>
      //             </div>
                  
      //         </div>
      //         <div className='text-[19px] text-left ml-8 mt-[2vh] text-white-900 w-[50%]'>
      //           <p className='text-[25px]'>Your Gateway to Financial Freedom </p>
      //           <p>Discover a world of of opportunities with LitFX.</p>
      //           <p className='text-[22px] font-bold'>Start trading today!</p>
      //           <Link to='/onboard'><button className='bg-[#646cff] text-[white] w-[50%]'>Get started</button></Link>
      //         </div>
      //   </div>
      //   <img src={img} className='absolute top-0 right-0 z-[-1] h-[40vh] md:h-[70vh] lg:h-[85vh] w-[100%] lg:w-[100%] blur-[1px]'/>
      // </div>
