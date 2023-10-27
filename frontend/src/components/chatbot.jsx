import React, { useState } from 'react';
import Writer from './writer';
import axios from 'axios';

export default function Chatbot(){
	// const [textareaValue, setTextareaValue] = useState('');
const [loading, setLoading] = useState(false)
const [prompt, setPrompt] = useState('');
const [display, setDisplay] = useState("Ai sensei's response will display here")
// {display ? display : "Ai sensei's response will display here"}
const askAI =async (e)=>{
    e.preventDefault();
    setLoading(true);
    if(!prompt){
      return;
    }
    const data = {
      prompt: prompt
    }
    try{
      // const response = await axios.post('http://localhost:3000/askai', data);
      const response = await axios.post('https://projectfx-server.onrender.com/askai', data);
      setDisplay(response.data.data.choices[0].text)
      setDisplay(response.data.data.choices[0].text)
      // console.log(display)
      setLoading(false);
    }
    catch(err){
     console.log(err)
    }
  }	

  const handleChange = (e)=>{
    setPrompt(e.target.value)
  }

	return(
		<div className='relative bg-[#1D2D44] flex flex-col justify-center items-center gap-2 border-2 border-white p-2 mb-1 w-[100%]'>
			{
        loading && (
          <div className='absolute top-0 z-10 left-0 h-[100%] w-[100%] text-[white] bg-[#0D1321] opacity-80'>
          <div className='mt-[1vh] mb-2 text-[10px] flex justify-center items-center'>
           <div className='mt-[10vh] w-20 h-20 border-t-4 border-blue-500 border-solid rounded-full animate-spin'/>
          </div>
    </div>
          )
      }
      <textarea 
        rows={5}
				className='w-[100%] h-[80%] rounded-[8px] rounded-br-[0px] text-black bg-white pl-1 resize-none placeholder:text-[2vh]'
				placeholder='What do you wanna know ?'
        onChange={handleChange}
			/>
			<div className='min-h-[9vh] rounded-[8px] rounded-bl-[0px] text-[1.8vh] bg-white rounded-[5px] pl-1 text-left min-w-[100%] bg-white'>
				<Writer message={display}
                    time={50}
                    customClass='text-[black]'/>				
			</div>
			<button onClick={askAI} className='text-[2vh] text-white bg-[#0D1321] hover:bg-white hover:text-[#0D1321] mb-2 border-2 border-white w-[70%] h-[5vh] font-semibold'>Ask the AI Teacher</button>
		</div>
	)
}