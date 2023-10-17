"use client"
export const dynamic = "force-dynamic";
import { useState } from "react";
import Image from "next/image"z


export default function Home() {
  const [banner, setBanner] = useState(true);

  return (
  	<>
	    <div className="relative top-0 bottom-0 w-[100%] h-[100svh] main-container web">
	        <aside className="px-[1.5em] py-[2em]">
	            <div className="pl-[1.6em]"></div>
	        </aside>
	        <main className="relative">
	            <div className="grid w-[100%] pt-[10em]">
	                <header className="w-[100%] fixed top-0 bottom-auto right-0 left-[18em] h-[3em]">
	                </header>
	                
	                <div class="chat-grp">
	               </div>
	            </div>
	        </main>
	        <nav className="absolute grid place-items-center top-auto bottom-0 right-0 left-[18em] h-[6.4em]">gggg</nav>
	    </div>
	    
	    <div class="mobile-main-container mobile" >
        <header>
            <h3>Finsocial</h3>
        </header>
        <main class="main-mobile">
            <div>
                <div class="post-grp"></div>
            </div>
        </main>
        <nav>
        	gggg
        </nav>
    </div>
    </>

  )
}

