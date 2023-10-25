import React, {useState} from 'react'
import { FaFacebook, FaRobot, FaGlobe, FaAngleDown, FaInstagram, FaTwitter, FaWhatsapp, FaLinkedin, FaShare } from 'react-icons/fa'
import { motion } from 'framer-motion';
import Chatbot from './chatbot'

function Footer() {
  const [display, setDisplay] = useState(false);
  const [chat, setChat]= useState(false);

  const handleDisplay = ()=>{
    setDisplay(!display)
    setChat(false)
  }

  const handleChat = ()=>{
    setChat(!chat);
    setDisplay(false)
  }

  const button = display ? (
    <motion.div 
    initial={{rotate: -360}}
    animate={{rotate: 360}}
    transition={{duration: 5}}
    onClick={handleDisplay}
    className=' hover:border-2 hover:border-[#0D1321] rounded-full flex justify-center items-center w-[6vh]'>
      <FaAngleDown className='text-[3vh] md:text-[5vh] text-[black]'/>
    </motion.div>
  ) : (
  <motion.div 
    initial={{rotate: -360}}
    animate={{rotate: 360}}
    transition={{duration: 5}}
    onClick={handleDisplay}
    className='hover:border-2 hover:border-[#0D1321] rounded-full flex justify-center items-center'>
    <FaGlobe className='text-[3vh] md:text-[5vh] text-[black]'/>
    </motion.div>)
  return (
    <>
              <motion.div 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1}}
          exit={{ opacity: 0 }}
          className='fixed bg-white rounded-full bottom-20 right-3 gap-3 flex flex-col justify-evenly items-center p-2 '>
      
      {
        display && (
          <>

     
      <motion.div
      initial={{y: 60}}
      animate={{y: 0}}
      exit={{ opacity: 0 }}
      transition={{duration: 2}}
      >
        <FaInstagram className='text-[#0D1321] hover:text-[3.6vh] hover:text-[blue] text-[3.9vh]'/>
      </motion.div>
      <motion.div
      initial={{y: 50}}
      animate={{y: 0}}
      exit={{ opacity: 0 }}
      transition={{duration: 2}}
      >
        <FaLinkedin className='text-[#0D1321] hover:text-[3.6vh] hover:text-[blue] text-[3.9vh]'/>
      </motion.div>
      
      <motion.div
      initial={{y: 30}}
      animate={{y: 0}}
      exit={{ opacity: 0 }}
      transition={{duration: 2}}
      >
      <a href={import.meta.env.VITE_WHATSAPP}>  <FaWhatsapp className='text-[#0D1321] hover:text-[3.6vh] hover:text-[blue] text-[3.9vh]'/></a>
      </motion.div>
     
      </>
        )
      }
      {button}
      </motion.div>
      <div onClick={handleChat} className='fixed flex justify-center group items-center gap-3 bottom-20 left-4 bg-white rounded-full p-2 text-[#0D1321]'>
        <FaRobot className='text-[2.9vh] lg:text-[5vh]'/>
        <p className='inset-0 hidden group-hover:block transition-opacity'>Ask Ai</p>
      </div>
        {
          chat && (
                  <motion.div
                    initial={{y: 30}}
                    animate={{y: 0}}
                    exit={{ opacity: 0 }}
                    transition={{duration: 2}} 
                    className='fixed bottom-[20vh] left-12 w-[300px] h-[40vh]'>
                      <Chatbot/>
                    </motion.div>
          )
        }
    </>
  )
}

export default Footer


//// <motion.div
//       initial={{y: 40}}
//       animate={{y: 0}}
//       exit={{ opacity: 0 }}
//       transition={{duration: 2}}
//       >
//         <FaTwitter className='text-[#0D1321] hover:text-[3.6vh] hover:text-[blue] text-[3vh]'/>
//       </motion.div>

      //  <motion.div
      // initial={{y: 70}}
      // animate={{y: 0}}
      // exit={{ opacity: 0 }}
      // transition={{duration: 2}}
      // >
      //           <FaFacebook className='text-[#0D1321] hover:text-[3.6vh] hover:text-[blue] text-[3vh]'/>
      // </motion.div>