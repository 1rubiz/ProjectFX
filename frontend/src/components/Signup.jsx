import React from 'react'
import Input from './Input'
import { useState, useContext } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { motion } from 'framer-motion'
import axios from 'axios';
import Loading from './loading'
import {useNavigate} from 'react-router-dom';
import UserContext from '../contexts/auth-context'
import CountrySelector from './countries'
function Signup() {
  const [errs, setErr] = useState('');
  const navigate = useNavigate();
  const {setUser} = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmPassword] = useState(false);
  const [matchPassword, setMatchPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullname: "",
    nationality: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const [valid, setValid] =useState(false);
   const {fullname,email,phone,password} = form;
// function to check if all the input hve been filled
  const formCheck= (obj)=>{
    for (let key in obj){
      if(obj[key] === ''){
        return false;
      }
    }
    return true;
  }

  const handleSelect=(val)=>{
    setForm({ ...form, 'nationality': val });  
  }

  const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setForm({ ...form, [name]: value });
  const { fullname, nationality, email, confirmPassword, password, phone } = form;

const check = formCheck(form);
// console.log(check);
if(check){
      setValid(true)
    }else {
    setValid(false)
    setErr('All fields are required')
     }
};
  const handlePassword = ()=>{
    setShowPassword(!showPassword)
  }
  const handleConfirmPassword = ()=>{
    setConfirmPassword(!showConfirmPassword)
  }

    const confirmPasswordMatch = ()=>{
    // handleChange(e)
    // const val = e.target.value;
    if(form.password === form.confirmPassword){
      setMatchPassword(!matchPassword)
      console.log('match')
    } else{
      setMatchPassword(false)
      console.log('no match')
      return
    }
  }


  const handleSubmit = async(e) => {
  e.preventDefault()
  console.log(form)
  // setLoading(true)
  confirmPassword()

  //   try {
  //      // const response =  await axios.post("http://localhost:3000/api/users/register",form)
  //      const response =  await axios.post("https://projectfx-server.onrender.com/api/users/register",form)
  //      if(response.status === 201){
        
  //       console.log(response.data)
  //       await localStorage.setItem('email', response.data.email);
  //       await localStorage.setItem('name', response.data.name);
  //       await localStorage.setItem('clientsideID', response.data._id);
  //       await localStorage.setItem('nationality', response.data.nationality);
  //       await localStorage.setItem('phone', response.data.phone);
  //       await setUser({
  //         email: response.data.email,
  //         user: response.data.name
  //       })
  //       navigate('/dashboard')
  //       console.log('signup success');
  //       setLoading(false)
  //      }
  //      if(response.status === 400){
  //       console.log(response);
  //       console.log(response.json())
  //       setLoading(false);
  //      }
  //   } catch (error) {
  //     setLoading(false);
  //   const {response} = error;
  //    console.log(error)
  //    console.log(response);
  //    if(response.status === 401){
  //     console.log('error in credentials');
  //    }
  //   }
};


  const [error, setError] = useState(null);
  const [errPwd, setPwdErr] = useState(null);

  function isValidEmail(email) {
    // return /\S+@\S+\.\S+/.test(email);
    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    return(validEmail.test(email));
  }
    function isValidPwd(pwd) {
    const validPwd = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
    return(validPwd.test(pwd));
  }


  const handleEmailChange = event => {
    if (isValidEmail(event.target.value)) {
      console.log('The email is valid');
    setForm({ ...form, [name]: event.target.value });
    setError('')
    } else {
      setError('Email is invalid');
    }
  };

  const handlePwdChange = event => {
    if (isValidPwd(event.target.value)) {
      console.log('The password is valid');
    setForm({ ...form, [name]: event.target.value });
    setPwdErr('')
    } else {
      setPwdErr('Password is invalid');
    }
  };


  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 2}}
    exit={{opacity: 0}}
    transition={{duration: 2}}
    className='flex flex-col justify-center items-center gap-0 mb-3 pt-2'>
    <div className={`${loading ? 'block' : 'hidden'}`}>
    <Loading/>
    </div>
      <Input 
      customClass='bg-[#c5fbbd] focus:bg-[white] lg:w-[40vh] w-[25vh] h-[5.5vh] mb-1'
      labelText='Fullname' 
      name='fullname'
      handleChange={handleChange}
      placeholder='Full Name'/>
      <CountrySelector handleSelect={handleSelect}/>
            
      <Input 
      customClass='bg-[#c5fbbd] focus:bg-[white] lg:w-[40vh] w-[25vh] h-[5.5vh]'
      labelText='Phone'
      type='number'
      handleChange={handleChange}
      name='phone' 
      placeholder='Phone Number'/>
            <Input 
      customClass='bg-[#c5fbbd] focus:bg-[white] lg:w-[40vh] w-[25vh] h-[5.5vh]'
      labelText='Email' 
      name='email'
      handleChange={handleEmailChange}
      placeholder='Email'/>
      {error && <h2 style={{color: 'red'}}>{error}</h2>}
      <label className='flex border border-gray-300 mb-6 mt-3 rounded-md'>
        <input type={showPassword ? 'text' : 'password'} 
        placeholder='Password'
        name='password' 
        onChange={handlePwdChange}
        className='bg-[white] focus:bg-[white] lg:w-[33.9vh] w-[144px] h-[5.5vh] center-placeholder rounded-md appearance-none relative block px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm'/>
        <div
        onClick={handlePassword} 
        className='z-5 bg-[white] h-[5.5vh] w-[5vh] flex justify-center items-center text-[1.9vh] top-4 right-2 text-[black]'>
          {showPassword ? <FaEyeSlash/> : <FaEye/>}</div>
      </label>
      {errPwd && <h2 style={{color: 'white'}}>{errPwd}</h2>}
      <label className={`flex border-[white] border-2 mb-6 rounded-md`}>
        <input type={showConfirmPassword ? 'text' : 'password'} 
        placeholder='Confirm Password' 
        name='confirmPassword'
        onChange={confirmPasswordMatch}
        className={`bg-[white] focus:bg-[white] lg:w-[33vh] w-[144px] h-[5.5vh] center-placeholder rounded-md appearance-none relative block px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm`}/>
        <div

        onClick={handleConfirmPassword} 
        className='z-5 bg-[white] h-[5.5vh] w-[5vh] flex justify-center items-center text-[1.9vh] top-4 right-2 text-[black]'>
          {showConfirmPassword ? <FaEyeSlash/> : <FaEye/>}</div>
      </label>
       {errs}
      <button onClick={handleSubmit} disabled={!valid} className='bg-[#646cff] hover:border-[white] font-bold text-[1.8vh] hover:border-2 lg:w-[40vh] w-[25vh] h-[5.5vh]'>Create Account</button>
    </motion.div>
  )
}

export default Signup


