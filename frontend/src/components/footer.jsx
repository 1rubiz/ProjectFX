import React, {useState} from 'react'
import { FaFacebook, FaGlobe, FaAngleDown, FaInstagram, FaTwitter, FaWhatsapp, FaLinkedin, FaShare } from 'react-icons/fa'
import { motion } from 'framer-motion';

function Footer() {
  const [display, setDisplay] = useState(false);

  const handleDisplay = ()=>{
    setDisplay(!display)
  }

  const button = display ? (
    <motion.div 
    initial={{rotate: -360}}
    animate={{rotate: 360}}
    transition={{duration: 5}}
    onClick={handleDisplay}
    className=' hover:border-2 hover:border-[green] rounded-full flex justify-center items-center w-[9vh]'>
      <FaAngleDown className='text-[5vh]'/>
    </motion.div>
  ) : (
  <motion.div 
    initial={{rotate: -360}}
    animate={{rotate: 360}}
    transition={{duration: 5}}
    onClick={handleDisplay}
    className='hover:border-2 hover:border-[green] rounded-full flex justify-center items-center'>
    <FaGlobe className='text-[5vh]'/>
    </motion.div>)
  return (
    <>
              <motion.div 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1}}
          exit={{ opacity: 0 }}
          className='fixed bg-white rounded-full bottom-20 right-3 gap-3 flex flex-col justify-evenly items-center p-3 '>
      
      {
        display && (
          <>

            <motion.div
      initial={{y: 70}}
      animate={{y: 0}}
      exit={{ opacity: 0 }}
      transition={{duration: 2}}
      >
                <FaFacebook className='text-[green]' size={35}/>
      </motion.div>
      <motion.div
      initial={{y: 60}}
      animate={{y: 0}}
      exit={{ opacity: 0 }}
      transition={{duration: 2}}
      >
        <FaInstagram className='text-[green]' size={35}/>
      </motion.div>
      <motion.div
      initial={{y: 50}}
      animate={{y: 0}}
      exit={{ opacity: 0 }}
      transition={{duration: 2}}
      >
        <FaLinkedin className='text-[green]' size={35}/>
      </motion.div>
      <motion.div
      initial={{y: 40}}
      animate={{y: 0}}
      exit={{ opacity: 0 }}
      transition={{duration: 2}}
      >
        <FaTwitter className='text-[green]' size={35}/>
      </motion.div>
      <motion.div
      initial={{y: 30}}
      animate={{y: 0}}
      exit={{ opacity: 0 }}
      transition={{duration: 2}}
      >
        <FaWhatsapp className='text-[green]' size={35}/>
      </motion.div>
     
      </>
        )
      }
      {button}
      </motion.div>
    </>
  )
}

export default Footer