import "antd/dist/reset.css";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";

import AppFloatButton from "@components/AppFloatButton";
import CommonLayout from "@components/Layout";
import "@styles/globals.css";
import "@styles/index.scss";
import { FloatButton } from "antd";
import AppConfigWrapper from "context/app-config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppConfigWrapper>
      <CommonLayout>
        <Component {...pageProps} />
        <AppFloatButton description="Apply now" href="#home-apply-now" />
        <FloatButton.BackTop />
      </CommonLayout>
    </AppConfigWrapper>
  );
}

export default appWithTranslation(MyApp);
