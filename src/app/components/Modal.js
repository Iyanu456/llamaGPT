 export default function Modal ({ handleClick }) {

  let darkBG = {
  backgroundColor: "rgba(90, 90, 90, 0.5)",
  width: "100vw",
  height: "100vh",
  zIndex: "40",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  position: "absolute",
  display: "grid",
  placeItems: "center",
}

let card = {
  backgroundColor: "white",
  borderRadius: "15px",
  boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.04)",
}  
    return (
      <div style={darkBG} className="backdrop-blur-sm" >
        
        <div style={card} className="min-w-[260px] max-w-[380px] min-h-[170px] modal-card">
          <div className="py-[1.6em] px-[1.6em]">
            <h1 className="pb-4 text-lg"><b>Are you sure you want to logout?</b></h1>
            <p className="text-sm">This action cannot be undone.</p>
          </div>
          <div className="grid grid-cols-2 gap-[1.2em] mb-[2em] px-[1.6em]">
            <button onClick={handleClick} className="btn btn-outline"><b>No</b></button>
            <button onClick={handleClick} className="btn btn-primary"><b>Logout</b></button>
          </div>
        </div>    
    </div>
    )
}
  