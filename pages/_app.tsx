import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";

import "antd/dist/antd.css";
import "@styles/index.scss";
import "@styles/globals.css";
import CommonLayout from "@components/Layout";
import { BackTop } from "antd";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CommonLayout>
      <Component {...pageProps} />
      <BackTop />
    </CommonLayout>
  );
};

export default appWithTranslation(MyApp);
