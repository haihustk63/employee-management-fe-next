import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";

export const withServerSideProps = (callback?: any) => {
  const getServerSideProps: GetServerSideProps = async ({ locale }) => {
    return {
      props: {
        ...(await serverSideTranslations(locale as string, ["common"])),
      },
    };
  };
  return getServerSideProps;
};
