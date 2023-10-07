import dynamic from "next/dynamic";
const HankoAuth = dynamic(() => import("../components/HankoAuth"))
import { Hanko } from "@teamhanko/hanko-elements";
import "custom-event-polyfill"

export default function LoginPage() {
 return (
    <div className="grid place-items-center min-h-[100vh]">
        <HankoAuth />
    </div>
   
 );
}
