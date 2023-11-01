"use client"
import { useState, useEffect, useRef } from "react";
import { useChat } from 'ai/react';
import Image from "next/image";
import sendIcon from "./assets/icons/send-2.svg";
import menuIcon from "./assets/icons/menu-1.svg"
import InputField from "./components/Textarea";
import Message from "./components/Message"
import Sidebar from "./components/Sidebar";
import Modal from "./components/Modal"
import Logo from "./assets/llama_logo.jpg"


export default function Home() {
  const [banner, setBanner] = useState(true);
  const [open, setOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [error, setError] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [email, setEmail] = useState("")
  const [lastMessage, setLastMessage] = useState(null);
  const [parentEmail, setParentEmail] = useState("");
  

  const { messages, input, handleInputChange, handleSubmit, setInput } = useChat({ onError: (error) => {
      console.log(error);
      setError(true)
      setInput(lastMessage)
    } });
  const lastMessageItemRef = useRef(null);


  // Function to set the email in the parent component
  const handleSetParentEmail = (email) => {
    setParentEmail(email);
  };

   useEffect(() => {
    if (messages.length > 0) {
      lastMessageItemRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);


  return (
    <>
      { open && <Modal isOpen={open} setOpen={setOpen} profileOpen={profileOpen} setProfileOpen={setProfileOpen} />}
      <div className="relative">
        <header className="grid place-items-center fixed top-0 bottom-auto min-[680px]:left-[16em] right-0 h-[3em]">
          <Image onClick={() => setSidebar(true) }src={menuIcon} alt="show menu button" className="py-auto ml-[1em] mr-auto mobile menu-btn"/>
        </header>
        <div className="main-grp h-[100%] ">
          <Sidebar 
          setParentEmail={handleSetParentEmail}
          sidebarClass={`sidebar ${sidebar ? "open" : null}`} 
          setSidebar={setSidebar} 
          onLogout={() => {
            console.log("clicked")
            setOpen(true)}} onProfile={() => {
              setProfileOpen(true)
              handleOpen()

            }} />
          <div className="chat-grp min-[680px]:ml-[16em] pt-[3.2em] max-h-screen">
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
            {messages.map((message, index) => (
              <Message 
              role={message.role === 'user' ? 'user' : 'ai' }
              key={message.id}
              iconClass={message.role === 'user' ? 'user-icon' : 'ai-icon '}
              iconType={message.role === 'user' ? parentEmail[0].toUpperCase() : 'ai'}
              message={message.content}/>
              ))}
            <div ref={lastMessageItemRef}></div>
          </div>

        </div>
        <InputField
        setError={setError}
        error={error}
        setValue={setInput}
        value={input}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
        onClick={() => {
          console.log(messages);
          banner ? setBanner(false) : null ;
          setLastMessage(input);
        }}
        />
      </div>
    </>
  );
}
