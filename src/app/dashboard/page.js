"use client"
import dynamic from "next/dynamic";
const HankoProfile = dynamic(() => import("../components/HankoProfile"), { ssr: false });
import { LogoutBtn } from "../components/LogoutButton"
import { Hanko } from "@teamhanko/hanko-elements";
import "custom-event-polyfill"
import CustomEvent from "custom-event";

export default function Dashboard() {
    return (
        <>
            <HankoProfile />
            <LogoutBtn />
        </>
    )
}