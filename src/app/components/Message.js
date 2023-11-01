
import Image from "next/image";
import aiAvatar from "../assets/icons/aiavatar.svg"



import ReactMarkdown from "react-markdown";

export default function Message(props) {

	let aiStyle = {
		background: "rgb(251, 251, 251)"
	}
	let userStyle = {
		background: "white",
	}
	return (
		<div style={props.role === "ai" ? aiStyle : userStyle } className="grid place-items-center w-[100%] message-container">
			<div className={props.role}>
                {props.role === 'ai' ? 
                <Image src={aiAvatar} alt="ai avatar" className="h-[35px] w-[35px] mt-0 mb-auto"/> :
                <div className={props.iconClass}>{props.iconType}</div>}
                <p>
                 <ReactMarkdown>{props.message}</ReactMarkdown>
                 </p> 
            </div>
		</div>
	)
}