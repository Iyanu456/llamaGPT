"use client";

import { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { register, Hanko } from "@teamhanko/hanko-elements";
import customEvent from "custom-event";
import "custom-event-polyfill"
import CustomEvent from "custom-event";


const hankoApi = `https://80aee7d4-d409-4b1a-8581-22e849ff9323.hanko.io`;

export default function LoginPage() {
  const router = useRouter();

  const redirectAfterLogin = useCallback(() => {
    // successfully logged in, redirect to a page in your application
    router.replace("/dashboard");
  }, [router]);

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) => {
      const hankoInstance = new Hanko(hankoApi);
      hankoInstance.onAuthFlowCompleted(() => {
        redirectAfterLogin();
      });
      register(hankoApi).catch((error) => {
        // handle error
      });
    });
  }, [redirectAfterLogin]);

  return <div className="grid place-items-center min-h-[100vh]"><hanko-auth /></div>;
}
