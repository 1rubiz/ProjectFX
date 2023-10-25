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
import { useUser } from "@clerk/clerk-react";
import { motion } from 'framer-motion'
import toast, { Toaster } from 'react-hot-toast';

export default function Landing() {
  const [urls, setUrl] = useState('');
      const { isLoaded, isSignedIn, user } = useUser();
  useEffect(()=>{
    const getUser = async ()=>{
      // const user = await localStorage.getItem('name');
  if (!(!isLoaded || !isSignedIn)){
        setUrl('/dashboard');
      }else{
        setUrl('/sign-in');
      }
    }
    getUser();
    if(user){
      // setUser(user.fullName)
      toast.success('Welcome ' + user.firstName);
    }
  },[])
  return (
    <div className=' absolute top-0 left-0 min-h-screen w-[100%] z-[0] text-[white] bg-[#0D1321]'>
  {/*mobile view*/}
      <div className='block md:hidden lg:hidden'>
          <div className='mt-[10vh] mb-[8vh]'>
            <motion.div
              initial={{x: -100}}
              whileInView={{x: 0}}
              exit={{x: -100}}
              transition={{duration: 2}}
             className='w-[100%] flex flex-col justify-center items-center'>
                <div
                 className='flex flex-row text-left w-[100%] justify-left items-center pr-8'>
                  <img src={fire} className='h-[15vh]'/>
                  <p className='text-[4.6vh] md:text-[8vh] text-[#646cff] mt-[6vh] font-bold font-serif'>LitFX
                  <motion.span
                    initial={{x: 100}}
                    whileInView={{x: 0}}
                    exit={{x: 100}}
                    transition={{duration: 2}}
                   className='text-[2.5vh] text-white font-serif'> Playground</motion.span></p>
                </div>
                <p>Your Personal AI-Assited Crypto-Trainer </p>
            </motion.div>
            <div className='text-[26px] font-bold p-4 mt-[2vh] text-white-900'>
              <motion.p
                    initial={{x: 100}}
                    whileInView={{x: 0}}
                    exit={{x: 100}}
                    transition={{duration: 2}}
              >Learn with both AI and experienced trader's support.</motion.p>

              <motion.p
                    initial={{x: -100}}
                    whileInView={{x: 0}}
                    exit={{x: -100}}
                    transition={{duration: 2}}
               className='text-[22px] font-semibold mt-4 mb-2'>
              Create a demo account and<br/>
              Start learning today!</motion.p>
              <Link to={urls}><motion.button
                    initial={{opacity: 0}}
                    whileInView={{opacity: 2}}
                    exit={{opacity: 0}}
                    transition={{duration: 2}}
               className='bg-[#646cff] text-[18px] text-[white]'>Get started</motion.button></Link>
            </div>
        </div>
        <img src={landing} className='absolute top-0 left-0 z-[-1] h-[600px] w-[100%] blur-sm'/>
      </div>

      {/*tablet and deskop view*/}
      <div className='hidden md:block lg:block'>
      <img src={img} className='top-0 right-0 z-[-1] h-[40vh] md:h-[86vh] lg:h-[88vh] w-[100%] lg:w-[100%] blur-[1px]'/>
          <div className='absolute top-[17vh] md:top-[10vh] left-2 mt-[10vh] lg:ml-3 md:mt-[15vh] lg:mt-[10vh] md:w-[80%] lg:w-[40%]'>
              <motion.div
                    initial={{x: -100}}
                    whileInView={{x: 0}}
                    exit={{x: -100}}
                    transition={{duration: 2}}
               className='w-[100%]'>
                  <div className='flex justify-left items-center'>
                    <img src={fire} className='h-[80px]'/>
                    <p className='text-[60px] text-[#646cff] mt-[1vh] font-bold font-serif'>LitFX</p>
                  </div>
              </motion.div>
              <div className='text-[19px] text-left ml-8 mt-[2vh] text-white-900 w-[50%] lg:w-[90%]'>
                <p className='text-[25px]'>Your Personal AI-Assited Crypto-Trainer</p>
                <motion.div
                    initial={{x: 100}}
                    whileInView={{x: 0}}
                    exit={{x: 100}}
                    transition={{duration: 2}}
                >
                <p>Learn with both AI and experienced trader's support.</p>
                <p className='text-[22px] font-bold'>Create an account and<br/>
              Start learning today!</p>
              </motion.div>
                <Link to={urls}><motion.button
                 initial={{opacity: 0}}
                    whileInView={{opacity: 2}}
                    exit={{opacity: 0}}
                    transition={{duration: 2}}
                 className='bg-[#646cff] text-[white] w-[50%]'>Get started</motion.button></Link>
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
