import "antd/dist/reset.css";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";

import CommonLayout from "@components/Layout";
import "@styles/globals.css";
import "@styles/index.scss";
import AppConfigWrapper from "context/app-config";
import dynamic from "next/dynamic";

const AppChat = dynamic(() => import("@components/AppChat") as any);
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppConfigWrapper>
      <CommonLayout>
        <Component {...pageProps} />
        {/* <AppFloatButton description="Apply now" href="#home-apply-now" /> */}
        {/* <FloatButton.BackTop /> */}
        <AppChat />
      </CommonLayout>
    </AppConfigWrapper>
  );
}

export default appWithTranslation(MyApp);
