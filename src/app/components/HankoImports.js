// hankoImports.js
import dynamic from "next/dynamic";

export const importHankoElements = () =>
  dynamic(() => import("@teamhanko/hanko-elements"), { ssr: false });

export const importCustomEventPolyfill = () =>
  dynamic(() => import("custom-event-polyfill"), { ssr: false });
