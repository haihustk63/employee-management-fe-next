import React, { useEffect } from "react";

const AppChat = () => {
  useEffect(() => {
    const setup = function (d: any, t: any) {
      var BASE_URL = "https://app.chatwoot.com";
      var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
      g.src = BASE_URL + "/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      s.parentNode.insertBefore(g, s);
      g.onload = function () {
        (window as any).chatwootSDK.run({
          websiteToken: "B2Pkg1PVyZkDKkq6Ns3s87Fq",
          baseUrl: BASE_URL,
        });
      };
    };

    setup(document, "script");
  }, []);
};

export default AppChat;
