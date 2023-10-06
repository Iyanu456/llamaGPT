"use client"

import { useEffect } from "react";
import { register } from "@teamhanko/hanko-elements";

const hankoApi = `https://bd2d97b7-584f-4d05-8207-8442e86f8911.hanko.io`;

export default function HankoProfile() {
  useEffect(() => {
    register(hankoApi).catch((error) => {
      // handle error
    });
  }, []);

return <hanko-profile />;
}

