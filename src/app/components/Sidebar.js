import React, { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import moreIcon from "../assets/icons/more.svg";
import logoutIcon from "../assets/icons/logout.svg";
import profileIcon from "../assets/icons/profile-circle.svg";
import addIcon from "../assets/icons/add.svg";
import closeIcon from "../assets/icons/close.svg"
import { Hanko } from "@teamhanko/hanko-elements";

const hankoApi = 'https://80aee7d4-d409-4b1a-8581-22e849ff9323.hanko.io';
const hanko = new Hanko(hankoApi);


export default function Sidebar(props) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const menuRef = useRef(null);

useEffect(() => {
    async function fetchUserEmail() {
      try {
        const { email } = await hanko.user.getCurrent();
        setUserEmail(email);
        props.setParentEmail(email);
      } catch (error) {
        console.log(error);
        // Handle any errors, e.g., user not authenticated
      }
    }

    fetchUserEmail();
  }, []);
  

  function handleRefreshClick() {
    window.location.reload(); // This will refresh the whole page
  }

  return (
    <>
    {() => props.setEmail(email)}
    <aside className={`fixed top-0 bottom-0 right-auto left-0 h-[100%] px-[1em] ${props.sidebarClass}`}>
      <button className="grid place-items-center mobile mt-3 mr-0 ml-auto" onClick={() => props.setSidebar(false)}>
      <Image src={closeIcon} alt="close sidebar button" /></button>
      <button className="flex justify-center center-align gap-2 px-[1.4em] py-[0.6em] mt-[2em] w-[100%] new-chat-button" onClick={handleRefreshClick}><p>New Chat</p><Image src={addIcon} alt="Add new chat button" className="icon" /></button>
      <div
        ref={menuRef} // Add a ref to the menu div
        onClick={() => { menuVisible ? setMenuVisible(false) : setMenuVisible(true)}}
        className="absolute flex top-auto bottom-[2em] gap-[1em] w-[87%] right-[1.8em] left-[1.2em] profile py-3"
      >
        <div className="grid place-items-center h-[35px] w-[35px] rounded-md profile-circle ml-3 my-auto">{userEmail ? userEmail[0].toUpperCase() : ""}</div>
        <h3 className="my-auto text-white truncate max-w-[45%]">{userEmail}</h3>
        <Image src={moreIcon} alt="more icon" className="icon mr-4 ml-auto" />
      </div>
      {menuVisible && 
        <div className="absolute bottom-[6.2em] left-[1.2em] w-[87%] grid dialogue">
          <div className="flex gap-[1em] py-4 px-4" onClick={() => {
            props.onProfile()
            setMenuVisible(false)}}>
            <Image src={profileIcon} alt="Profile icon" className="icon" />
            <p className="text-white my-auto">Profile</p>
          </div>
          <div className="flex gap-[1em] py-4 px-4" onClick={() => {
            props.onLogout()
            setMenuVisible(false)
            props.setEmail(email);
          }}>
            <Image src={logoutIcon} alt="logout button" className="icon" />
            <p className="text-white my-auto">Logout</p>
          </div>
        </div>}
    </aside>
    
    </>
  );
}
