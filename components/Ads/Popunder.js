

import Script from "next/script";
import { isMembershipActive } from "../../config/utils"; // assume this returns boolean

function PopunderAds() {
    let currentHost = '';
    let showAds = false;

    if (typeof window !== "undefined") {
        currentHost = window.location.host;
        const isLocalhost = currentHost.includes('localhost');
        const membershipActive = isMembershipActive();

        showAds = !isLocalhost && !membershipActive;
    }

    return (
        <div className="flex items-center justify-center">
            {showAds && (
                <Script
                    type="text/javascript"
                    src="//cdn.tsyndicate.com/sdk/v1/p.js"
                    data-ts-spot="15e87922e61d4c92b8adea7c3d9823a7"
                    data-ts-extid="{extid}"
                    data-ts-session-duration="300"
                    data-ts-count="5"
                    data-ts-mode="selective"
                    data-ts-ignore-filter="block_popunder"
                    async
                    defer
                />
            )}
        </div>
    );
}

export default PopunderAds;
