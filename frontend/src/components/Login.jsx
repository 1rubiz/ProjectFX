import React from 'react'
import Input from './Input'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 2}}
    exit={{opacity: 0}}
    transition={{duration: 2}}
    className='flex flex-col justify-center items-center pt-16 mb-3'>
      <Input 
      customClass='bg-[#c5fbbd] focus:bg-[white] w-[25vh] h-[5.5vh]'
      labelText='Email' 
      placeholder='Email'
      labelFor='Email'/>
            
      <Input 
      customClass='bg-[#c5fbbd] focus:bg-[white] w-[25vh] h-[5.5vh]'
      labelText='Password' 
      placeholder='Password'
      labelFor='Password'/>
    <Link to='/dashboard'> <button className='bg-[#3E5C76] hover:border-[white] font-bold text-[1.8vh] hover:border-2 w-[25vh] h-[5.5vh]'>LOGIN</button></Link>
    </motion.div>
  )
}

export default Login