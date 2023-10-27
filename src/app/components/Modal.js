 export default function Modal () {

  let darkBG = {
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  width: "100vw",
  height: "100vh",
  zIndex: "40",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  position: "absolute",
  display: "grid",
  place-items: "center",
}

let card = {
  backgroundColor: "white",
  padding: "1.4em 1.6em",
}
  
    return (
      <div style={darkBG}>
        
        <div style={card}><h1>Modal is Open</h1></div>
        
      </div>
    )
  }