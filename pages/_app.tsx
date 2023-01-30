import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import "antd/dist/reset.css";

import "@styles/index.scss";
import "@styles/globals.css";
import CommonLayout from "@components/Layout";
import { BackTop } from "antd";
import AppFloatButton from "@components/AppFloatButton";
import AppConfigWrapper from "context/app-config";
import { GetServerSideProps } from "next";
import { withServerSideProps } from "hoc/withServerSideProps";
import { positionService } from "services/position";
import { jobService } from "services/jobs";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppConfigWrapper>
      <CommonLayout>
        <Component {...pageProps} />
        <AppFloatButton description="Apply now" href="#home-apply-now" />
        <BackTop />
      </CommonLayout>
    </AppConfigWrapper>
  );
}

export default appWithTranslation(MyApp);