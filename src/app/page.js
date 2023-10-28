"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import sendIcon from "./assets/icons/send-2.svg";
import menuIcon from "./assets/icons/menu-1.svg"
import MaxHeightTextarea from "./components/Textarea";
import Sidebar from "./components/Sidebar";
import Modal from "./components/Modal"
import Logo from "./assets/llama_logo.jpg"

export default function Home() {
  const [banner, setBanner] = useState(true);
  const [open, setOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>
      { open && <Modal isOpen={open} setOpen={setOpen} />}
      <div className="relative">
        <header className="grid place-items-center fixed top-0 bottom-auto min-[680px]:left-[16em] right-0 h-[3em]">
          <Image onClick={() => setSidebar(true) }src={menuIcon} alt="show menu button" className="py-auto ml-[1em] mr-auto mobile menu-btn"/>
        </header>
        <div className="main-grp h-[100%] ">
          <Sidebar sidebarClass={`sidebar ${sidebar ? "open" : null}`} setSidebar={setSidebar} onLogout={() => {
            console.log("clicked")
            setOpen(true)}} onProfile={handleOpen} />
          <div className="chat-grp min-[680px]:ml-[16em] pt-[3.2em] h-screen">
            {banner && (
              <div className="grid place-items-center px-[1.4em]">
                <div className="flex justify-center items-center gap-[1em]  mt-[2em] ">
                  <h1 className="heading my-auto" style={{
                    color: "#071952",
                  }}>
                    <b>LlamaGPT</b>
                  </h1>
                  <Image src={Logo} alt="LlamaGPT logo" className="h-[40px] w-[40px] rounded-full my-auto" />
                </div>
                <div className="example-group mt-[5em]">
                  <div>write an email from bullet lists</div>
                  <div>code a snake game</div>
                  <div>Assist in a task</div>
                </div>
              </div>
            )}
          </div>
        </div>
        <form className="fixed top-auto left-[16em] bottom-0 right-0 py-[2.2em] input-grp">
          <MaxHeightTextarea />
          <button
            className="grid place-items-center h-[3.6em] max-[680px]:h-[3em] max-[680px]:w-[3em] mt-auto mb-0 rounded-full w-[3.6em]"
            onClick={(e) => {
              e.preventDefault();
              banner ? setBanner(false) : null;
            }}
          >
            <Image src={sendIcon} alt="send button " />
          </button>
        </form>
      </div>
    </>
  );
}
