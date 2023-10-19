"use client"

export const dynamic = "force-dynamic";
import { useEffect } from "react";
import { register } from "@teamhanko/hanko-elements";

//const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;
const hankoApi = 'https://80aee7d4-d409-4b1a-8581-22e849ff9323.hanko.io'

export default function HankoProfile() {
  useEffect(() => {
    register(hankoApi).catch((error) => {
      // handle error
    });
  }, []);

return <hanko-profile />;
}

