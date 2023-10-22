import React from 'react'
import { useState, useEffect } from 'react';
import img from '/img.jpg';
import img2 from '/img2.jpg';
import SignUpPage from '../components/Signup';
import SignInPage from '../components/Login';
import { motion, AnimatePresence } from 'framer-motion';
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
                <div className='text-[#F0EBD8] w-[40vh] pb-4 min-h-[40vh] bg-[#0D1321] opacity-80 mt-3'
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
                            <SignUpPage/>
                            Already have an account with us? <span onClick={handleChange} className='font-bold text-[1.9vh] mt-3'>Login</span>
                        </div>
                    ) : (
                    <div className='text-[1.6vh]'>
                        <SignInPage/>
                        Don't have an account with us?
                        <span onClick={handleChange} className='font-bold text-[1.9vh]'> Register</span>
                    </div>)
                }
            </div>
        </div>
        {/* desktop and laptop ui */}
        <div className='hidden lg:flex lg:flex-row lg:gap-[59vh] pt-[20vh] pl-[23vh] bg-[#0D1321] absolute top-0 left-0 min-h-screen w-screen'>
        <div className='text-[#F0EBD8] border-2 border-white lg:w-[60vh] w-[40vh] pb-4 min-h-[40vh] bg-[#0D1321] opacity-80'
                    style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'}}>
                <div className='text-[1.6vh]'>
                <SignUpPage/>
                Already have an account ? <span onClick={handleScreen} className='font-bold hover:cursor-pointer text-[1.5vh] mt-3'>Login</span>
            </div>
        </div>

        <div className='text-[#F0EBD8] border-2 border-white lg:w-[60vh] w-[40vh] pb-4 min-h-[40vh] bg-[#0D1321] opacity-90 ml-[-16vh]'
                    style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'}}>
            <div className='text-[1.6vh]'>
                <SignInPage/>
                Don't have an account with us?
                <span onClick={handleScreen} className='font-bold hover:cursor-pointer text-[1.5vh]'> Register</span>
            </div>
            </div>
            {
                !screen ? (
                    <>
                    <AnimatePresence>
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 2}}
                    exit={{opacity: 0}}
                    key='login'
                    className='bg-[#0D1321] absolute h-screen w-[50%] z-4 top-0 left-0 opacity-80'
                    />
                    <div
                        key='logintext'
                     className='font-serif text-[white] text-[9vh] absolute top-[20vh] left-[16vh]'>
                    <Writer message='Welcome Back To'
                        time={100}
                        customClass='text-[white]'/>
                    <Writer message='LitFX'
                        time={300}
                        customClass='text-[white]'/>
                        <img
                        src={img2}
                        key='loginimg'
                        className='h-[45vh]  w-[95%] inline'
                    />
                    </div>
                    <p
                        className='text-[2.4vh] text-[white] absolute bottom-6 left-8 font-mono ml-12'
                    >Are You New Here?
                    <span
                    onClick={handleScreen}
                    className='ext-[2.4vh] text-[#646cff] border-b-2 hover:text-white hover:cursor-pointer'> Create An Account</span></p>
                    </AnimatePresence>
                    </>
                ) : (
                    <>
                    <AnimatePresence>
                        <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 2}}
                        exit={{opacity: 0}}
                        key='signup'
                        className='bg-[#0D1321] absolute h-screen w-[50%] z-4 right-0 top-0 opacity-90'
                        />
                <div key='signuptext' className='mr-12 font-serif text-[#F0EBD8] text-[9vh] absolute top-[15vh] right-12'>
                    {/* <Writer message='

                        time={100}
                        customClass='text-[white]'/> */}
                    {/* <Writer message='Let`s Trade'
                        time={300}
                        customClass='text-[white]'/> */}
                        <p>Create An Account</p>
                        <p>Let`s Trade</p>
                        <img
                        src={img}
                        key='signupimg'
                        className='h-[45vh] w-[95%] inline'
                    />
                    </div>
                    
                    <p
                        className='text-[2.4vh] text-[white] absolute bottom-8 right-[29vh] font-mono'
                    >Already Have An Account?
                    <span
                    onClick={handleScreen}
                    className='text-[2.4vh] text-[#646cff] border-b-2 hover:text-white hover:cursor-pointer'> LogIn</span></p>
                    </AnimatePresence>
                    </>
                )
            }
        </div>
    </div>
  )
}

export default Onboard
