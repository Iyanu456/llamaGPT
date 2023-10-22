"use client"
export const dynamic = "force-dynamic";
//import { useState } from "react";
import Image from "next/image"
import MaxHeightTextarea from './components/Textarea';



export default function Home() {
  //const [banner, setBanner] = useState(true);

  return (
  	<>
	<div className="relative">
	<header className="grid place-items-center fixed top-0 bottom-auto min-[680px]:left-[16em] right-0 h-[3em]"></header>
		<div className="main-grp h-[100%] ">
			<aside className="fixed top-0 bottom-0 right-auto left-0"></aside>
				<div className="chat-grp min-[680px]:ml-[16em] pt-[3.2em] h-screen">
					<p>hdhdhdhd</p>
					<p>hdhdhdhd</p>
					<p>hdhdhdhd</p>
					<p>hdhdhdhd</p>
					<p>hdhdhdhd</p>
					<p>hdhdhdhd</p>
					<p>hdhdhdhd</p>
					<p>hdhdhdhd</p>
					<p>hdhdhdhd</p>
				</div>
		</div>
		<div className="grid place-items-center fixed top-auto left-[16em] bottom-0 right-0 py-[2.2em] input-grp">
			<MaxHeightTextarea />
		</div>
	</div>
    </>

  )
}

