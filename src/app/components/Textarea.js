"use client"
import * as React from 'react';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
//import { styled } from '@mui/system';

export default function MaxHeightTextarea() {

  let customStyle = {
	  width: "100%",
  }
  return (
    <TextareaAutosize
      className="px-3 py-2 w-[100%]"
      maxRows={4}
      aria-label="maximum height"
      placeholder="Maximum 4 rows"
    />
  );
}
