"use client"
import * as React from 'react';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
//import { styled } from '@mui/system';

export default function MaxHeightTextarea() {

  let customStyle = {
	  border: "1.2px solid #ccc",
    outline: "none",
    borderRadius: "10px",
    boxShadow: "rgba(180, 180, 180, 0.11)4px 3px 12px 15px",
    resize: "none",
  }
  return (
    <TextareaAutosize
      className="px-[1.2em] min-[680px]:py-[1.2em] max-[680px]:py-[0.8em] w-[70%] max-[680px]:w-[80%]"
      style={customStyle}
      maxRows={4}
      aria-label="maximum height"
      placeholder="Ask me anything!"
    />
  );
}
