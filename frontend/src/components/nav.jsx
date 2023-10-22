import React from 'react'
import { useState, useContext } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { FaBars, FaFire } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import logo from '/vite.svg';
import fire from '/fire-logo.svg'
import UserContext from '../contexts/auth-context'
import { SignOutButton } from "@clerk/clerk-react";

function Nav() {
    const navigate = useNavigate();
    const {setUser, user} = useContext(UserContext);
    const [nav, setNav]= useState(false);
    const handleNav = ()=>{
        setNav(!nav);
    }
    const closes = ()=>{
        setNav(false)
    }
    const email = localStorage.getItem('email');
    const logout = ()=>{
        // localStorage.clear();
        // setUser(!user);
        // window.location.reload();
        // window.location.href='/'
        navigate('/');
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
        <img src={fire} className='h-[30px]'/> LitFX
        </motion.div>
        </Link>
        <motion.div
            className='absolute top-[3vh] md:top-[1.8vh] right-9'
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
            key='one'
            className='w-[140px] h-[60px] hidden lg:flex flex-grow list-none gap-8 justify-center items-center mix-blend-multiply'
            initial={{y: -30}}
            animate={{y: 0}}
            transition={{duration: 1}}
        >
            <Link to='/dashboard'><li className={list}>Dashboard</li></Link>
            <Link to='/cashier'><li className={list}>Cashier</li></Link>
            <Link to='/report'><li className={list}>Reports</li></Link>
            <Link to='/market'><li className={list}>Market</li></Link>
            <Link to='/settings'><li className={list}>Account setting</li></Link>
            <Link to='/inbox'><li className={list}>Inbox</li></Link>
            <Link to='/news'><li className={list}>News</li></Link>
            
             <SignOutButton signOutCallback={logout}>
                <button onClick={logout} className='bg-[red] text-[white]'>Log Out</button>
                </SignOutButton>
            

        </motion.div>
    {/*mobile nav*/}
        {
            nav && (
                <motion.div className='absolute bg-[white] p-9 lg:hidden top-[9vh] md:top-[5.4vh] right-0 z-10'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1}}
                    exit={{ opacity: 0 }}
                    >
                    <div className='list-none text-[12px] text-[black] text-left w-[100%] flex flex-col gap-5 font-bold'>
                    <li className='underline text-[16px] font-bold'>{email}</li>
                    <Link to='/dashboard'><li onClick={closes} className={list}>Dashboard</li></Link>
            <Link to='/cashier'><li onClick={closes} className={list}>Cashier</li></Link>
            <Link to='/report'><li onClick={closes} className={list}>Reports</li></Link>
            <Link to='/market'><li onClick={closes} className={list}>Market</li></Link>
            <Link to='/settings'><li onClick={closes} className={list}>Account setting</li></Link>
            <Link to='/inbox'><li onClick={closes} className={list}>Inbox</li></Link>
            <Link to='/news'><li onClick={closes} className={list}>News</li></Link>
            <SignOutButton signOutCallback={logout}>
                 <button className='bg-[red] text-[white]'>Log Out</button>
             </SignOutButton>
                    </div>
                </motion.div>
            )
        }
        </AnimatePresence>
    </div>
  )
}

export default Nav
