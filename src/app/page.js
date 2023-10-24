"use client"
export const dynamic = "force-dynamic";
import { useState } from "react";
import Image from "next/image"
import sendIcon from "./assets/icons/send-2.svg"
import MaxHeightTextarea from './components/Textarea';



export default function Home() {
  const [banner, setBanner] = useState(true);

  return (
  	<>
	<div className="relative">
	<header className="grid place-items-center fixed top-0 bottom-auto min-[680px]:left-[16em] right-0 h-[3em]"></header>
		<div className="main-grp h-[100%] ">
			<aside className="fixed top-0 bottom-0 right-auto left-0 h-[100%] px-[1em]">
				<button className="grid place-items-center px-[1.4em] py-[0.6em] mt-[3em] w-[100%] new-chat-button">New Chat</button>
				<div className="absolute flex top-auto bottom-[2em] gap-[1em] px-[1.4em] w-[100%]">
					<div className="grid place-items-center h-[35px] w-[35px] rounded-full profile-circle ml-0 my-auto">I</div>
					<h3 className="my-auto text-white">Iyanu</h3>
				</div>
			</aside>
				<div className="chat-grp min-[680px]:ml-[16em] pt-[3.2em] h-screen">
					{banner && 
						<div className="grid place-items-center px-[1.4em]">
							<h1 className="heading mt-[2em]"><b>LlamaGPT</b></h1>
							<div className="example-group mt-[5em]">
								<div>write an email from bullet lists</div>
                            	<div>code a snake game</div>
                            	<div>Assist in a task</div>
                            </div>
						</div>
					}
				</div>
		</div>
		<form className="fixed top-auto left-[16em] bottom-0 right-0 py-[2.2em] input-grp">
				<MaxHeightTextarea />
				<button className="grid place-items-center h-[3.6em] max-[680px]:h-[3em] max-[680px]:w-[3em] mt-auto mb-0 rounded-full w-[3.6em]" onClick={(e) => {
					e.preventDefault();
					banner ? setBanner(false) : null;
				}}>
					<Image src={sendIcon}  alt="send button " />
				</button>
		</form>
	</div>
    </>
  )
}

