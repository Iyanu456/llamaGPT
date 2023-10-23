export default function Message(props) {
	return (
		<div className="grid place-items-center w-[100%]">
			<div className={props.type} key={props.key}>
                <div className={props.iconType}>u</div>
                 <p>{props.Message}</p> 
            </div>
		</div>
	)
}