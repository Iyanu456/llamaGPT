import HankoAuth from "../components/HankoAuth";
import "custom-event-polyfill"

export default function LoginPage() {
 return (
    <div className="grid place-items-center min-h-[100vh]">
        <HankoAuth />
    </div>
   
 );
}
