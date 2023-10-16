"use client"
export const dynamic = "force-dynamic";
import { useState } from "react";
import Image from "next/image"


export default function Home() {
  const [banner, setBanner] = useState(true);

  return (
    <div className="relative main-container w-[100%] h-screen">
        <aside></aside>
        <main>
            <header className="px-3 py-[1.4em] grid place-items-center">
                <div>App Logo</div>
            </header>
            <div class="chat-container">
	  {banner && <div>
		  <h2><b>LlamaGPT</b></h2>
	  	<div className="example-container">
	  		<div>Example</div>
	  	</div>
	</div>}
	  </div>
            <div class="grid place-items-center input-container py-[1.6em]">
	  <form className="flex gap-3" onSubmit={(e) => {
		  e.preventDefault()
		  !banner ? null : setBanner(false)
	  }}>
	  	<input/><button>submit</button>
	  </form></div>
        </main>
	  </div>
  )
}

