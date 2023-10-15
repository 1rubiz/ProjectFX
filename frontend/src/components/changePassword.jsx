import React, {useState} from 'react';
import { motion } from 'framer-motion'

export default function ChangePassword() {

  const [formData, setFormData] = useState({
    currentPassword : '',
    newPassword: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(formData)
  }

   return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 2}}
    exit={{opacity: 0}}
    transition={{duration: 2}}
    className='flex flex-col justify-center items-center pt-16 mb-3'>
      <form onSubmit={handleSubmit} className='w-[80%] lg:w-[55%]'>
      <p className='text-left text-[3vh]'>Current Password</p>
        <input 
        id='Change'
      className='bg-[#c5fbbd] text-black min-w-[100%] block rounded-[5px] p-2 mb-3 focus:bg-[white] lg:w-[40vh] w-[25vh] h-[5.5vh]'
      onChange={handleChange}
      name='currentPassword'
      placeholder='Current Password'
      required
      />
      <p className='text-left text-[3vh]'>New Password</p>
        <input 
      className='bg-[#c5fbbd] text-black min-w-[100%] block rounded-[5px] p-2 mb-3 focus:bg-[white] lg:w-[40vh] w-[25vh] h-[5.5vh]'
      onChange={handleChange}
      name='newPassword'
      placeholder='New Password'
      required
      />    
      <p className='text-left text-[3vh]'>Confirm Password</p>
      <input 
      className='bg-[#c5fbbd] text-black min-w-[100%] block rounded-[5px] p-2 mb-2 focus:bg-[white] lg:w-[40vh] w-[25vh] h-[5.5vh]'
      name='confirmPassword'
      onChange={handleChange}
      placeholder='Confirm Password'
      required
      />
    <button className='bg-[#646cff] hover:border-[white] font-bold p-3 text-[2.3vh] text-white hover:border-2 lg:w-[40vh] w-[90%] '>Update Password</button>
      </form>
    </motion.div>
  )
}

