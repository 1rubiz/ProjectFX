import React from 'react'
// import Input from './Input'
// import { motion } from 'framer-motion'
// import { Link, useNavigate } from 'react-router-dom';
// import { useState, useContext } from 'react';
// import axios from 'axios';
// import UserContext from '../contexts/auth-context'
// import Loading from './loading'

// function Login() {
//   const navigate = useNavigate();
//   const [errs, setErr] = useState('')
//    const {setUser} = useContext(UserContext);
//   const [form, setForm] = useState({
//     email: '',
//     password: ''
//   })
//   const [loading, setLoading] = useState(false)
// const [valid, setValid] =useState(false);
//    const {email, password} = form;
// // function to check if all the input hve been filled
//   const formCheck= (obj)=>{
//     for (let key in obj){
//       if(obj[key] === ''){
//         return false;
//       }
//     }
//     return true;
//   }

//   const handleChange = (e) => {
//   const { name, value, type, checked } = e.target;
//   setForm({ ...form, [name]: value });
//   const { email, password } = form;

// const check = formCheck(form);
// // console.log(check);
// if(check){
//       setValid(true)
//     }else {
//     setValid(false)
//      }
// };

// const handleSubmit = async ()=>{
//   try {
//     setLoading(true);
//        const response =  await axios.post("https://projectfx-server.onrender.com/api/users/login",form)
//       // const response =  await axios.post("http://localhost:3000/api/users/login",form)
//        if(response.status === 200){
//         console.log('success');
//         console.log(response.data)
//         await localStorage.setItem('email', response.data.email);
//         await localStorage.setItem('name', response.data.name);
//         await localStorage.setItem('clientsideID', response.data._id);
//         await setUser({
//           email: response.data.email,
//           user: response.data.name
//         })
//         setLoading(false)
//         navigate('/dashboard')
//        }
//        if(response.status === 400){
//         console.log(response);
//         setLoading(false)
//         // console.log(response.json())
//        }
//     } catch (error) {
//       // setLoader(false);
//       setLoading(false)
//     const {response} = error;
//      console.log(error)
//      console.log(response);
//      if(response.status === 401){
//       setErr(response.data);
//      }
//     }

// }

// // /api/users/login
//   return (
//     <motion.div 
//     initial={{opacity: 0}}
//     animate={{opacity: 2}}
//     exit={{opacity: 0}}
//     transition={{duration: 2}}
//     className='flex flex-col justify-center items-center pt-16 mb-3'>
//     <div className={`${loading ? 'block' : 'hidden'}`}>
//     <Loading/>
//     </div>
//       <Input 
//       customClass='bg-[#c5fbbd] mb-3 focus:bg-[white] lg:w-[40vh] w-[25vh] h-[5.5vh]'
//       labelText='Email' 
//       handleChange={handleChange}
//       name='email'
//       placeholder='Email'
//       labelFor='Email'/>
            
//       <Input 
//       customClass='bg-[#c5fbbd] mb-2 focus:bg-[white] lg:w-[40vh] w-[25vh] h-[5.5vh]'
//       labelText='Password'
//       name='password'
//       handleChange={handleChange} 
//       placeholder='Password'
//       labelFor='Password'/>
//       <div className='text-[yellow] text-[13px]'>{errs}</div>
//     <button onClick={handleSubmit} disabled={!valid} className='bg-[#646cff] hover:border-[white] font-bold text-[1.8vh] text-white hover:border-2 lg:w-[40vh] w-[25vh] h-[5.5vh]'>LOGIN</button>
//     </motion.div>
//   )
// }

// export default Login

// cl-footerActionLink
// import { SignIn } from "@clerk/react";
import { SignIn } from "@clerk/clerk-react";
 
const SignInPage = () => (
  <div className='bg-[#0D1321] w-[100%] h-screen absolute top-0 left-0 flex justify-center items-center'>
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" afterSignInUrl='/dashboard' redirectUrl='/dashboard' />
  </div>
);
export default SignInPage;
