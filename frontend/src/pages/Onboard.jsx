import React from 'react'
import { useState, useEffect } from 'react';
import img from '/img.jpg';
import img2 from '/img2.jpg';
import Signup from '../components/Signup';
import Login from '../components/Login';
import { motion } from 'framer-motion';
import Writer from '../components/writer';

function Onboard() {
    const [register, setRegister] = useState(false);
    const [screen, setScreen] = useState(false);

    const handleChange=()=>{
        setRegister(!register);
    }
    const handleScreen = ()=>{
        setScreen(!screen)
    }
    
    // bg-[#0D1321]
  return (
    <div>
        {/* mobile and tablet ui */}
        <div className='block lg:hidden'>
                <img src={img}
                    className='h-screen absolute top-0 left-0 z-[-2]'/>
                <div className='text-[#F0EBD8] w-[40vh] pb-4 min-h-[40vh] bg-[#0D1321] opacity-80'
                    style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'}}>
                    <Writer message='LitFX'
                        time={500}
                        customClass='text-[5vh] text-[white]'/>
                    <Writer message='Lets trade some more'
                        time={200}
                        customClass='text-[2vh] text-[white]'/>
                {
                    register ? (
                        <div className='text-[1.6vh]'>
                            <Signup/>
                            Already have an account with us? <span onClick={handleChange} className='font-bold text-[1.9vh] mt-3'>Login</span>
                        </div>
                    ) : (
                    <div className='text-[1.6vh]'>
                        <Login/>
                        Don't have an account with us? 
                        <span onClick={handleChange} className='font-bold text-[1.9vh]'> Register</span>
                    </div>)
                }
            </div>
        </div>
        {/* desktop and laptop ui */}
        <div className='hidden lg:flex lg:flex-row lg:gap-[43vh] pt-[20vh] pl-[23vh] bg-[#0D1321] absolute top-0 left-0 min-h-screen w-screen'>
        <div className='text-[#F0EBD8] w-[40vh] pb-4 min-h-[40vh] bg-[#0D1321] opacity-80'
                    style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'}}>
                <div className='text-[1.6vh]'>
                <Signup/>
                Already have an account ? <span onClick={handleScreen} className='font-bold text-[1.5vh] mt-3'>Login</span>
            </div>
        </div>
            
        <div className='text-[#F0EBD8] w-[40vh] pb-4 min-h-[40vh] bg-[#0D1321] opacity-80'
                    style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'}}>
            <div className='text-[1.6vh]'>
                <Login/>
                Don't have an account with us? 
                <span onClick={handleScreen} className='font-bold text-[1.5vh]'> Register</span>
            </div>
            </div>
            {
                screen ? (
                    <>
                    <motion.img 
                    initial={{opacity: 0}}
                    animate={{opacity: 2}}
                    exit={{opacity: 0}}
                    transition={{duration: 2}}
                    src={img2}
                    className='absolute h-screen w-[80vh] z-4 top-0 left-0'
                    />
                    <div className='font-serif text-[white] bg-opacity-10 bg-[white] text-[9vh] absolute top-[25vh] left-3'>
                    <Writer message='Welcome Back To'
                        time={100}
                        customClass='text-[white]'/>
                    <Writer message='LitFX'
                        time={300}
                        customClass='text-[white]'/>
                    </div>
                    <p 
                        className='text-[3vh] text-[white] absolute bottom-8 left-3 font-mono'
                    >Are You New Here 
                    <span 
                    onClick={handleScreen}
                    className='text-[3vh] text-[#0D1321] bg-opacity-40 hover:bg-opacity-70 bg-white'> Create An Account</span></p>
                    </>
                ) : (
                    <>
                        <motion.img 
                        initial={{opacity: 0}}
                        animate={{opacity: 2}}
                        exit={{opacity: 0}}
                        transition={{duration: 2}}
                        src={img}
                        className='absolute h-screen w-[90vh] z-4 right-0 top-0'
                        />
                <div className='font-serif text-[white] bg-opacity-20 bg-[white] text-[9vh] absolute top-[25vh] right-3'>
                    {/* <Writer message='Create An Account'
                        time={100}
                        customClass='text-[white]'/> */}
                    {/* <Writer message='Let`s Trade'
                        time={300}
                        customClass='text-[white]'/> */}
                    </div>
                    <p 
                        className='text-[2.8vh] text-[white] absolute bottom-8 right-3 font-mono'
                    >Already Have An Account ? 
                    <span 
                    onClick={handleScreen}
                    className='text-[3vh] text-[#0D1321] bg-opacity-40 hover:bg-opacity-70 bg-white'> Sign In</span></p>
                    </>
                )
            }
        </div>
    </div>
  )
}

export default Onboard