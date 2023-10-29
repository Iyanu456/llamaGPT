



export default function Message(props) {
	let aiStyle = {
		background: "rgb(251, 251, 251)"
	}
	let userStyle = {
		background: "white",
	}
	return (
		<div style={props.role === "ai" ? aiStyle : userStyle } className="grid place-items-center w-[100%] message-container">
			<div className={props.role} key={props.id}>
                <div className={props.iconClass}>{props.iconType}</div>
                 <p>{props.message}</p> 
            </div>
		</div>
	)
}