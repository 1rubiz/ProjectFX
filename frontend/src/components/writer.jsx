import React from 'react'
import { useState, useEffect } from 'react';

function Writer({
    message,
    time,
    customClass
}) {
    const [text, setText] = useState('');

    useEffect(() => {
        let currentIndex = 0;
      const interval = setInterval(() => {
          if(currentIndex <= message.length){
              setText(message.slice(0, currentIndex));
              currentIndex++;
          }else{
              clearInterval(interval);
          }
      }, time);
        
      }, [message])
  return (
    <div className={customClass}>{text}</div>
  )
}

export default Writer