import React from 'react'
import { useState, useEffect } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { FaBars, FaFire } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '/vite.svg';
import fire from '/fire-logo.svg'
import { useUser } from "@clerk/clerk-react";

function GuestNav() {
    const [nav, setNav]= useState(false);
    const handleNav = ()=>{
        setNav(!nav);
    }
    const closes = ()=>{
        setNav(false)
    }
    const handleScroll = (view)=>{
        closes();
        const element = document.querySelector(view);
        if(element){
            element.scrollIntoView({ behavior: 'smooth'})
        }
    }

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
  },[])

    const list = 'hover:border-b-2 border-[blue] cursor-pointer'

  return (
    <div id='home' className='flex fixed top-0 left-0 z-10 bg-white w-[100%] '>
       <Link to='/'>
        <motion.div
            className='w-[140px] h-[60px] flex justify-center items-center gap-1 mix-blend-multiply'
            initial={{y: -30}}
            animate={{y: 0}}
            transition={{duration: 1}}
        >
        <img src={fire} className='h-[30px]'/> LitFX
        </motion.div>
        </Link>
        <motion.div
            className='absolute top-[3vh] right-9'
            // initial={{y: 0}}
        >
        {nav ? (
            <IoCloseOutline size={35} onClick={handleNav} className='block text-[black] lg:hidden'/>
        ) : (
            <FaBars size={20} onClick={handleNav} className='block text-[black] lg:hidden mix-blend-multiply'/>
        )}
        </motion.div>
        <AnimatePresence id='zero'>
        <motion.div
            key='guest'
            className='w-[140px] h-[60px] hidden lg:flex flex-grow list-none gap-8 justify-center items-center mix-blend-multiply'
            initial={{y: -30}}
            animate={{y: 0}}
            transition={{duration: 1}}
        >
            <Link to='/'><li className={list}>Home</li></Link>
           <Link> <li className={list} onClick={()=> handleScroll('#about')}>About</li></Link>
           <Link to=''> <li className={list} onClick={()=> handleScroll('#contact')}>Contact Us</li></Link>
           <Link to={urls}> <button className='bg-[#646cff] text-[white]'>Get started</button></Link>

        </motion.div>
        {
            nav && (
                <motion.div className='absolute bg-[white] p-9 lg:hidden top-[9vh] right-0 z-10'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1}}
                    exit={{ opacity: 0 }}
                    >
                    <div className='list-none text-[12px] text-[black] text-left w-[100%] flex flex-col gap-5 font-bold'>
                    <Link to='/'><li onClick={closes} className={list}>Home</li></Link>
            <a to='#about' onClick={()=> handleScroll('#about')}><li className={list}>About</li></a>
            <a><li className={list} onClick={()=> handleScroll('#contact')}>Contact Us</li></a>
            <Link to={urls}><button className='bg-[#646cff] text-[white]'>Get started</button></Link>
                    </div>
                </motion.div>
            )
        }
        </AnimatePresence>
    </div>
  )
}

export default GuestNav;
