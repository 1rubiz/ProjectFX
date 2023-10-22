import React, { useState } from 'react';
import Writer from './writer';


export default function Chatbot(){
	// const [textareaValue, setTextareaValue] = useState('');
const [prompt, setPrompt] = useState('');
const [display, setDisplay] = useState("Ai sensei's response will display here")
// {display ? display : "Ai sensei's response will display here"}
const askAI =async (e)=>{
    e.preventDefault();
    if(!prompt){
      return;
    }
    const data = {
      prompt: prompt
    }
    console.log(data);
    const request = new Request('http://localhost:3000/askai', {
      method: 'POST',
      // body: data,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    try {
      const response = await fetch(request);

      // Handle the response from the server
      if (response.ok) {
        console.log('query successfully');
        const data =await response.json();
        console.log(data);
      }
    }
    catch(err){
      console.log(err)
    }
  }	

  const handleChange = (e)=>{
    setPrompt(e.target.value)
  }

	return(
		<div className='flex flex-col gap-2 border-2 border-white p-1 mb-1'>
			<textarea 
				className='w-[100%] h-16 rounded-[8px] rounded-br-[0px] text-black bg-white pl-1 resize-none placeholder:text-[2vh]'
				placeholder='What do you wanna know ?'
        onChange={handleChange}
			/>
			<div className='min-h-[9vh] rounded-[8px] rounded-bl-[0px] text-[1.8vh] bg-white rounded-[5px] pl-1 text-left w-[100%] bg-white'>
				<Writer message={display}
                    time={70}
                    customClass='text-[black]'/>				
			</div>
			<button onClick={askAI} className='text-[2vh] text-white bg-[#0D1321] hover:bg-white hover:text-[#0D1321] mb-2 border-2 border-white h-[5vh] font-semibold'>Ask the AI Teacher</button>
		</div>
	)
}