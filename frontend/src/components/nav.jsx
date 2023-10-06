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

    const list = 'hover:border-b-2 border-[blue] cursor-pointer'

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
            <IoCloseOutline size={35} onClick={handleNav} className='block text-[black] lg:hidden'/>
        ) : (
            <FaBars size={20} onClick={handleNav} className='block text-[black] lg:hidden mix-blend-multiply'/>
        )}
        </motion.div>
        <AnimatePresence>
        <motion.div
            className='w-[140px] h-[60px] hidden lg:flex flex-grow list-none gap-8 justify-center items-center mix-blend-multiply'
            initial={{y: -30}}
            animate={{y: 0}}
            transition={{duration: 1}}
        >
            <Link to='/dashboard'><li className={list}>Dashboard</li></Link>
            <li className={list}>Cashier</li>
            <li className={list}>Reports</li>
            <Link to='/market'><li className={list}>Market</li></Link>
            <li className={list}>Account setting</li>
            <li className={list}>Message center</li>
            <li className={list}>Stake</li>
            <Link to='/news'><li className={list}>News</li></Link>

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
                    <Link to='/dashboard'><li className={list}>Dashboard</li></Link>
            <li className={list}>Cashier</li>
            <li className={list}>Reports</li>
            <Link to='/market'><li className={list}>Market</li></Link>
            <li className={list}>Account setting</li>
            <li className={list}>Message center</li>
            <li className={list}>Stake</li>
            <Link to='/news'><li className={list}>News</li></Link>
                    </div>
                </motion.div>
            )
        }
        </AnimatePresence>
    </div>
  )
}

export default Nav
