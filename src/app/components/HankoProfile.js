"use client"

export const dynamic = "force-dynamic";
import { useEffect } from "react";
import { register } from "@teamhanko/hanko-elements";


register("https://80aee7d4-d409-4b1a-8581-22e849ff9323.hanko.io", { shadow: false });

//const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;
const hankoApi = 'https://80aee7d4-d409-4b1a-8581-22e849ff9323.hanko.io'

export default function HankoProfile() {
  useEffect(() => {
    register(hankoApi).catch((error) => {
      // handle error
    });
  }, []);

return <>
			<style dangerouslySetInnerHTML={{__html: `
          		.hanko_content { 
            		max-height: 78vh;
            		padding: 0.5em 1em 1em 1em;
          		}
          		.hanko_container {
          			max-width: max-content;
              		border-radius: 10px;
              		max-height: 80vh;
              		overflow-y: scroll;
        		}
        		.hanko_headline {
    				text-align: left !important;
    				/*padding-left: 1.5em;*/
    				border-bottom: 1.4px solid #ccc;
    				padding-bottom: 0.8em;
				}
				
				.hanko_accordion .hanko_accordionItem .hanko_accordionInput:checked+.hanko_label {
					color: white !important;
					background: black !important;
				}
				.hanko_accordion .hanko_accordionItem .hanko_label:hover {
					color: white !important;
					background: rgb(20, 20, 20) !important;
					font-weight: 600px;
				}
				.hanko_button.hanko_dangerous {
					background: #ED2B2A !important;
					color: white !important;
					display: grid !important;
  					place-items: center;
  					height: fit-content;
  					padding: 0.5em 1.2em !important;
  					border-radius: 6px !important;
  					margin-bottom: 1.2em;
				}
				.hanko_input {
					margin: 0.2em;
				}
				
      		`}}>
      		</style>

			<hanko-profile />
		</>;
}

