import HankoProfile from "../components/HankoProfile"
import { LogoutBtn } from "../components/LogoutButton"
import { Hanko } from "@teamhanko/hanko-elements";
import "custom-event-polyfill"

export default function Dashboard() {
    return (
        <>
            <HankoProfile />
            <LogoutBtn />
        </>
    )
}