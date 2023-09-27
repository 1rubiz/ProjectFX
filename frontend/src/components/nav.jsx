import React from 'react'
import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { FaBars, FaFire } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '/vite.svg';

function Nav() {
    const [nav, setNav]= useState(false);
    const handleNav = ()=>{
        setNav(!nav);
    }

  return (
    <div className='flex fixed top-0 left-0 z-10 bg-white w-[100%] '>
       <Link to='/'> 
        <motion.div 
            className='w-[140px] h-[60px] flex justify-center items-center gap-1 mix-blend-multiply'
            initial={{y: -30}}
            animate={{y: 0}}
            transition={{duration: 1}}
        >
        <FaFire/> LitFX
        </motion.div>
        </Link>
        <motion.div 
            className='absolute top-[3vh] right-9'
            // initial={{y: 0}}
        >
        {nav ? (
            <IoCloseOutline size={35} onClick={handleNav}/>
        ) : (
            <FaBars size={20} onClick={handleNav} className='mix-blend-multiply'/>
        )}
        </motion.div>
        <AnimatePresence>
        {
            nav && (
                <motion.div className='absolute bg-[white] p-9 top-[9vh] right-0 z-10'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1}}
                    exit={{ opacity: 0 }}
                    >
                    <div className='list-none text-[20px] w-[100%] flex flex-col gap-8 font-bold text-[white]'>
                    <Link to='/home'><motion.li className='p-2 bg-[rgb(0,128,0)] rounded-[9px]'
                            initial={{x: 30}}
                            animate={{x: 0}}
                            transition={{duration: 1}}
                            onClick={handleNav}
                        >HOME</motion.li></Link>
                        <Link to='/about'><motion.li className='p-2 bg-[rgb(0,128,0)] rounded-[9px]'
                            initial={{x: 30}}
                            animate={{x: 0}}
                            transition={{duration: 1}}
                            onClick={handleNav}
                        >ABOUT US</motion.li></Link>
                       <Link to='/media'> <motion.li
                            className='p-2 bg-[rgb(0,128,0)] rounded-[9px]'
                            initial={{x: 30}}
                            animate={{x: 0}}
                            transition={{duration: 1}}
                            onClick={handleNav}
                        >MEDIA</motion.li></Link>
                        <Link to='/donation'><motion.li
                            className='p-2 bg-[rgb(0,128,0)] rounded-[9px]'
                            initial={{x: 30}}
                            animate={{x: 0}}
                            transition={{duration: 1}}
                            onClick={handleNav}
                        >DONATIONS</motion.li></Link>
                        <Link to='/contact'><motion.li
                            className='p-2 bg-[rgb(0,128,0)] rounded-[9px]'
                            initial={{x: 30}}
                            animate={{x: 0}}
                            transition={{duration: 1}}
                            onClick={handleNav}
                        >CONTACT US</motion.li></Link>
                    </div>
                </motion.div>
            )
        }
        </AnimatePresence>
    </div>
  )
}

export default Nav