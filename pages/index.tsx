import { withServerSideProps } from "hoc/withServerSideProps";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>{t("common.txt_hello")}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = withServerSideProps((ctx: any) => ctx)
