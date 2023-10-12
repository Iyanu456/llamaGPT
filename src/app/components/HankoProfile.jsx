import { useEffect } from "react";
import { register } from "@teamhanko/hanko-elements";
import { importHankoElements, importCustomEventPolyfill } from "./hankoImports"; // Import from the module created in step 1

const hankoApi = `https://80aee7d4-d409-4b1a-8581-22e849ff9323.hanko.io`;

export default function HankoProfile() {
  useEffect(() => {
    importCustomEventPolyfill()
      .then((customEventPolyfill) => {
        customEventPolyfill.default(); // Initialize the polyfill if needed
        return importHankoElements();
      })
      .then(({ register }) => {
        register(hankoApi).catch((error) => {
          console.error("Error registering Hanko:", error);
        });
      })
      .catch((error) => {
        console.error("Error importing polyfill or Hanko elements:", error);
      });
  }, []);

  return <hanko-profile />;
}
