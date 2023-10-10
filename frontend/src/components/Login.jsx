import React from 'react'
import Input from './Input'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

    const [valid, setValid] =useState(false);
   const {email, password} = form;
// function to check if all the input hve been filled
  const formCheck= (obj)=>{
    for (let key in obj){
      if(obj[key] === ''){
        return false;
      }
    }
    return true;
  }

  const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setForm({ ...form, [name]: value });
  const { email, password } = form;

const check = formCheck(form);
// console.log(check);
if(check){
      setValid(true)
    }else {
    setValid(false)
     }
};

const handleSubmit = async ()=>{
  console.log(form);
  try {
       const response =  await axios.post("https://project-fx-server.vercel.app/api/users/login",form)
       if(response.status === 201){
        console.log('success');
       }
       if(response.status === 400){
        console.log(response);
        // console.log(response.json())
       }
    } catch (error) {
      // setLoader(false);
    const {response} = error;
     console.log(error)
     console.log(response);
     if(response.status === 401){
      console.log('error in credentials');
     }
    }

}

// /api/users/login
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 2}}
    exit={{opacity: 0}}
    transition={{duration: 2}}
    className='flex flex-col justify-center items-center pt-16 mb-3'>
      <Input 
      customClass='bg-[#c5fbbd] mb-3 focus:bg-[white] lg:w-[40vh] w-[25vh] h-[5.5vh]'
      labelText='Email' 
      handleChange={handleChange}
      name='email'
      placeholder='Email'
      labelFor='Email'/>
            
      <Input 
      customClass='bg-[#c5fbbd] mb-2 focus:bg-[white] lg:w-[40vh] w-[25vh] h-[5.5vh]'
      labelText='Password'
      name='password'
      handleChange={handleChange} 
      placeholder='Password'
      labelFor='Password'/>
    <button onClick={handleSubmit} disabled={!valid} className='bg-[#646cff] hover:border-[white] font-bold text-[1.8vh] text-white hover:border-2 lg:w-[40vh] w-[25vh] h-[5.5vh]'>LOGIN</button>
    </motion.div>
  )
}

export default Login