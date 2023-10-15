import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Input from '../components/Input'
const Form = () => {
  const form = useRef();
  const navigate = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form);
    emailjs
      .sendForm(
        'service_jfopqcm',
        'template_fxlzksd',
        form.current,
        'cQ9tNBofj3dFSjKWb'
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Email sent succesfully...');
          navigate('/');
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
      <div>
      <div id='contact' className='text-[27px]'>Co<span className='border-b-2 border-b-[orange]'>ntact U</span>s</div>
        <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 2}}
    exit={{opacity: 0}}
    transition={{duration: 2}}
    className='flex flex-col justify-center items-center p-5 mb-8'>
      <form
        ref={form}
        onSubmit={sendEmail}
        className='lg:block lg:w-[65%]'
        >
        <Toaster/>
      <Input 
      customClass='bg-[#c5fbbd] mb-3 focus:bg-[white] w-[25vh] h-[5.5vh]'
      labelText='Email' 
      name='email'
      placeholder='Email'
      labelFor='Email'/>
            
      <Input 
      customClass='bg-[#c5fbbd] mb-2 focus:bg-[white] w-[25vh] h-[5.5vh]'
      labelText='Password'
      name='password'
      placeholder='Password'
      labelFor='Password'/>
      <textarea
      name='body'
      placeholder='Email body....'
      className='w-[100%] h-[15vh] pl-3'
      />
    <button className='bg-[#3E5C76] hover:border-[white] font-bold text-[1.8vh] text-white hover:border-2 w-[25vh] lg:w-[45%] h-[5.5vh]'>Submit</button>
    </form>
    </motion.div>
      </div>
    )
}

export default Form;
