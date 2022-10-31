import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";

import "antd/dist/antd.css";
import "@styles/index.scss";
import "@styles/globals.css";
import CommonLayout from "@components/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CommonLayout>
      <Component {...pageProps} />
    </CommonLayout>
  );
};

export default appWithTranslation(MyApp);
