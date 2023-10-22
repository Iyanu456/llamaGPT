"use client"
export const dynamic = "force-dynamic";
//import { useState } from "react";
import Image from "next/image"
import sendIcon from "./assets/icons/send-2.svg"
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
					<div className="user" key="124">
                        <div className="user-icon">
                            u
                        </div>
                        <p>
                            Hello
                        </p> 
                    </div>
				</div>
		</div>
		<div className="flex justify-center items-center fixed top-auto left-[16em] bottom-0 right-0 py-[2.2em] input-grp">
			<div className="flex w-[inherit]"><MaxHeightTextarea />
			<Image src={sendIcon} className="-ml-[3em]" alt="send button" /></div>
		</div>
	</div>
    </>

  )
}

