import React from 'react'
import Input from './Input'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmPassword] = useState(false);

  const handlePassword = ()=>{
    setShowPassword(!showPassword)
  }
  const handleConfirmPassword = ()=>{
    setConfirmPassword(!showConfirmPassword)
  }
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 2}}
    exit={{opacity: 0}}
    transition={{duration: 2}}
    className='flex flex-col justify-center items-center gap-0 mb-3 pt-2'>
      <Input 
      customClass='bg-[#c5fbbd] focus:bg-[white] w-[25vh] h-[5.5vh]'
      labelText='Fullname' 
      placeholder='Full Name'/>
            <Input 
      customClass='bg-[#c5fbbd] focus:bg-[white] w-[25vh] h-[5.5vh]'
      labelText='Nationality' 
      placeholder='Nationality'/>
            <Input 
      customClass='bg-[#c5fbbd] focus:bg-[white] w-[25vh] h-[5.5vh]'
      labelText='Email' 
      placeholder='Email'/>
      <label className='flex border border-gray-300 mb-9 mt-3'>
        <input type={showPassword ? 'text' : 'password'} 
        placeholder='Password' 
        className='bg-[white] focus:bg-[white] w-[20vh] h-[5.5vh] center-placeholder rounded-md appearance-none relative block px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm'/>
        <div
        onClick={handlePassword} 
        className='z-5 bg-[white] h-[5.5vh] w-[5vh] flex justify-center items-center text-[1.9vh] top-4 right-2 text-[black]'>
          {showPassword ? <FaEyeSlash/> : <FaEye/>}</div>
      </label>
      <label className='flex border border-gray-300 mb-6'>
        <input type={showConfirmPassword ? 'text' : 'password'} 
        placeholder='Confirm Password' 
        className='bg-[white] focus:bg-[white] w-[20vh] h-[5.5vh] center-placeholder rounded-md appearance-none relative block px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm'/>
        <div
        onClick={handleConfirmPassword} 
        className='z-5 bg-[white] h-[5.5vh] w-[5vh] flex justify-center items-center text-[1.9vh] top-4 right-2 text-[black]'>
          {showConfirmPassword ? <FaEyeSlash/> : <FaEye/>}</div>
      </label>

      <button className='bg-[#3E5C76] hover:border-[white] font-bold text-[1.8vh] hover:border-2 w-[25vh] h-[5.5vh]'>Create Account</button>
    </motion.div>
  )
}

export default Signup


