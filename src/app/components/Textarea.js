"use client"
import * as React from 'react';
import  { useState, useEffect, useRef } from "react";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Image from "next/image";
import sendIcon from "../assets/icons/send-2.svg";

export default function InputField(props) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  const buttonRef = useRef(null); // Create a ref for the button

   const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add a window resize event listener to update the screen size
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const handleKeyDown = (event) => {
    if (screenWidth >= 450) { // Check the screen width
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault(); // Prevent creating a new line
        //setLastMessage(props.value);
        event.target.form.querySelector('button[type="submit"]').click(); // Trigger the form submit
      }
    }
  };

  let customStyle = {
	  border: "1.4px solid #ccc",
    outline: "none",
    borderRadius: "10px",
    boxShadow: "rgba(180, 180, 180, 0.11)4px 3px 12px 15px",
    resize: "none",
  }
  let regenerateBtnStyle = {
    backgroundColor: "rgb(20, 189, 70)",
    color: "white",
    borderRadius: "10px",
    boxShadow: "rgba(180, 180, 180, 0.11)4px 3px 12px"
  }
  return (
    <div className="fixed grid place-items-center top-auto min-[680px]:left-[16em] bottom-0 right-0 ">
    {props.error && <div className="grid place-items-center my-2"><button style={regenerateBtnStyle} className="px-[1.2em] py-[0.8em] mb-1" onClick={() => {
      buttonRef.current.click();
      props.setError(false);
    }}>Regenerate, an error occured</button></div>}
    <div className="input-grp pt-[1.2em] pb-[0.8em] w-[100%] grid place-items-center">
    <form className="flex justify-center gap-[10px] w-[100%]" onSubmit={props.onSubmit} >
        <TextareaAutosize
          className="px-[1.2em] min-[680px]:py-[1.2em] max-[680px]:py-[0.8em] w-[70%] max-[680px]:w-[80%]"
          style={customStyle}
          maxRows={4}
          aria-label="maximum height"
          placeholder="Ask me anything!"
          value={props.value}
          onChange={props.onChange}
          onKeyDown={handleKeyDown}
        />
        <button
          ref={buttonRef}
          type="submit"
          className="grid place-items-center h-[3.6em] max-[680px]:h-[3em] max-[680px]:w-[3em] mt-auto mb-0 rounded-full w-[3.6em]"
          onClick={props.onClick} >
            <Image src={sendIcon} alt="send button "/>
        </button>
        <br/>
    </form>
    <small className="pt-2 text-center w-[80%]">LlamaGPT may produce inaccurate information about people, places, or facts.</small>
    </div>
    </div>
  );
}
