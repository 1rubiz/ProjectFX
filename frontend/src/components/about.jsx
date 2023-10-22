import React from 'react';
import { FaHandsHelping, FaBitcoin, FaTools, FaArchive } from 'react-icons/fa'
import { MdSecurity } from 'react-icons/md'
import { motion } from 'framer-motion';

export default function About(){
  return(
    <div className='mt-5 p-4'>
      <div className='mb-6 mt-3'>
        <div className='text-[30px] font-bold mb-4' id='about'>A<span className='pb-1 border-b-2 border-b-[orange]'>bout U</span>s</div>
        <div className='text-justify md:pr-14 md:pl-14'>It is common knowledge that the best of things 
        comes in pairs. AT Litfx we aim to guide you through two of the most respected source of knowledge, man and machine,
        experienced Traders and AI. Our story is one of passion, innovation, and dedication to helping individuals and 
        businesses navigate the complex world of trading and investment using cutting-edge AI support.
        Our mission is simple yet powerful: To empower you with the tools, knowledge, and support you need to thrive in the financial
        markets. Whether you're a seasoned trader or just starting your journey, LitFX is here to guide you
        towards success.</div>
      </div>
      <div className='text-[27px]' id='about'>Wh<span className='pb-1 border-b-2 border-b-[orange]'>y Choose Li</span>tFX?</div>
      <div className='lg:grid lg:grid-cols-2 lg:gap-4'>
      <motion.div
        initial={{x: 100}}
        whileInView={{x: 0}}
        exit={{x: 100}}
        transition={{duration: 2}}
       className='mt-4 md:pr-14 md:pl-14'>
        <p className='font-bold text-[21px] bg-white text-[#0D1321] flex justify-center items-center gap-5'>Personalized Support <FaHandsHelping className='text-[orange]'/></p>
        <p className='font-[18px] italic text-justify'>
          Your success is our priority. Our dedicated support team is here
          to assist you every step of the way, ensuring your trading journey
          is smooth and rewarding.
        </p>
      </motion.div>
      <motion.div
        initial={{x: -100}}
        whileInView={{x: 0}}
        exit={{x: -100}}
        transition={{duration: 2}}
        className='md:pr-14 md:pl-14 md:mt-4'
      >
        <p className='font-bold text-[21px] bg-white text-[#0D1321] flex justify-center items-center gap-5'>Powerful Tools <FaTools className='text-[orange]'/></p>
        <p className='italic text-justify'>
          Access state-of-the-art trading platforms, real-time data, Artificial intelligence, and comprehensive
          research tools that give you the competitve edge in the market.
        </p>
      </motion.div>
      <motion.div
        initial={{x: 100}}
        whileInView={{x: 0}}
        exit={{x: 100}}
        transition={{duration: 2}}
        className='md:pr-14 md:pl-14'
      >
        <p className='font-bold text-[21px] bg-white text-[#0D1321] flex justify-center items-center gap-5'>Secure and Trustworthy <MdSecurity className='text-[orange]'/></p>
        <p className='italic text-justify'>
          Rest easy knowing that your investments are in safe hands.
          We prioritize security and transparency, so you can trade with confidence.
        </p>
      </motion.div>
      <motion.div
        initial={{x: -100}}
        whileInView={{x: 0}}
        exit={{x: -100}}
        transition={{duration: 2}}
        className='md:pr-14 md:pl-14'
      >
        <p className='font-bold text-[21px] bg-white text-[#0D1321] flex justify-center items-center gap-5'>Diverse Assest Classes <FaBitcoin className='text-[orange]'/></p>
        <p className='italic text-justify'>
          Explore a wide range of asset classes, from stocks and forex to crptocurrencies
          . Whatever your trading interests, we've got you covered.
        </p>
      </motion.div>
      </div>
      <div>
        <p className='text-[18px] font-semibold mt-2 md:pr-14 md:pl-14'>Join the LitFX community today and unlock your potential in the
        financial markets. Your future starts here! Get started now and
         experience the LitFX advantage.</p>
      </div>
    </div>
  )
}
