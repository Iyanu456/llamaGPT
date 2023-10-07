"use client";

import { useEffect } from "react";
import { register } from "@teamhanko/hanko-elements";

const hankoApi = `https://80aee7d4-d409-4b1a-8581-22e849ff9323.hanko.io`;

export default function HankoProfile() {
  useEffect(() => {
    import("custom-event-polyfill").then(() => {
      register(hankoApi).catch((error) => {
        // handle error
      });
    });
  }, []);

  return <hanko-profile />;
}
