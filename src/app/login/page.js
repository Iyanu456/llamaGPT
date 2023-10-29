export const dynamic = "force-dynamic";
import HankoAuth from "../components/HankoAuth";
import Image from "next/image"
import Logo from "../assets/llama_logo.jpg"

export default function LoginPage() {
 return (
 	<>
 	<style dangerouslySetInnerHTML={{__html: `
    			.hanko_content { 
    				width: 310px !important; 
    			}
    			.hanko_container {
		  				max-width: 640px !important;
				}
			`}}>
	</style>
 	<div className="h-screen grid place-items-center">
	 	<div className="grid place-items-center w-[410px]">
	 		<Image className="rounded-full h-[80px] w-[80px] mb-0" src={Logo} alt="logo" />
	 		<HankoAuth />
	 	</div>
 	</div>
 	</>
 );
}
