
 import LogoutBtn from "./LogoutButton"
 import HankoProfile from "./HankoProfile"
 import { register } from "@teamhanko/hanko-elements";
import closeIcon from "../assets/icons/close-dark.svg"
import Image from "next/image";

register("https://80aee7d4-d409-4b1a-8581-22e849ff9323.hanko.io", { shadow: false });
 export default function Modal ({ isOpen, setOpen, profileOpen, setProfileOpen }) {

  let darkBG = {
  backgroundColor: "rgba(30, 30, 30, 0.5)",
  width: "100vw",
  height: "100svh",
  zIndex: "40",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  position: "absolute",
  display: "grid",
  placeItems: "center",
  overflowY: "hidden",
}

let card = {
  backgroundColor: "white",
  borderRadius: "10px",
  boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.04)",
  border: "solid 2px #d8dee3"
}

function close() {
  setOpen(false)
  setProfileOpen(false)
}

  if (isOpen) { 
    return (
      
      <div style={darkBG} className="backdrop-blur-sm">
      <style jsx>{`
          .hanko_content {
            width: 80px !important;
          }
      `}</style>

        <div style={card} className="min-w-[300px] max-w-[760px] min-h-[170px] modal-card">
            {profileOpen && 
              <div>
                  <button className="grid place-items-center mx-3 mr-0 ml-auto px-4 pt-4 pb-0" onClick={close}>
                    <Image src={closeIcon} alt="close sidebar button" className="h-[20px] w-[20px]" />
                  </button>
                  <HankoProfile/>
              </div>}
            {!profileOpen && 
              <>
                  <button className="grid place-items-center mx-3 mr-0 ml-auto px-4 pt-4 pb-0" onClick={close}>
                    <Image src={closeIcon} alt="close sidebar button" className="h-[20px] w-[20px]" />
                  </button>
              <div className="py-[1.2em] px-[1.6em]">
                <h1 className="mb-4 text-lg"><b>Are you sure you want to logout?</b></h1>
                <p className="text-sm mb-3">This action cannot be undone.</p>
              </div>
              <div className="grid grid-cols-2 gap-[1em] mb-[2em] px-[1.6em]">
                <button onClick={close} className="btn btn-outline"><b>No</b></button>
                <LogoutBtn onLogout={close} className="btn btn-primary"/>
              </div>   
          </>}
        </div>   
    </div>
    )
  } 
}
  