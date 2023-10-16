export const dynamic = "force-dynamic";
import Image from "next/image"
import "custom-event-polyfill"


export default function Home() {
  return (
    <div className="relative main-container w-[100%] h-screen">
        <aside></aside>
        <main>
            <header className="max-sm:left-0 fixed top-0 right-0 left-[16em] bottom-[auto] px-3 py-[1.4em] grid place-items-center">
                <div>App Logo</div>
            </header>
            <div class="h-full px-2 py-5">example</div>
            <div class="grid place-items-center fixed top-[auto] bottom-0 right-0 max-sm:left-0 left-[16em] input-container py-[1.4em]">
	  <form className="flex gap-3"><input/><button>submit</button></form></div>
        </main>
	  </div>
  )
}

