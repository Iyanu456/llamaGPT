export const dynamic = "force-dynamic";
import HankoAuth from "../components/HankoAuth";
import Image from "next/image"
import Logo from "../assets/llama_logo.jpg"

export default function LoginPage() {
 return (
 	<div className="h-screen grid place-items-center">
	 	<div className="grid place-items-center">
	 		<Image className="rounded-full h-[80px] w-[80px] mb-0" src={Logo} alt="logo" />
	 		<HankoAuth />
	 	</div>
 	</div>
 );
}
