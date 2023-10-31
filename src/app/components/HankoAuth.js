"use client"

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { register, Hanko } from "@teamhanko/hanko-elements";


register("https://80aee7d4-d409-4b1a-8581-22e849ff9323.hanko.io", { shadow: false });
//const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;
const hankoApi = 'https://80aee7d4-d409-4b1a-8581-22e849ff9323.hanko.io'

export default function HankoAuth() {
  const router = useRouter();
 
  const [hanko, setHanko] = useState();
 
  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi))
    );
  }, []);
 
  const redirectAfterLogin = useCallback(() => {
    // successfully logged in, redirect to a page in your application
    router.replace("/");
  }, [router]);
 
  useEffect(
    () =>
      hanko?.onAuthFlowCompleted(() => {
        redirectAfterLogin();
      }),
    [hanko, redirectAfterLogin]
  );
 
  useEffect(() => {
    register(hankoApi).catch((error) => {
      // handle error
    });
  }, []);
 
  return <hanko-auth />;
}