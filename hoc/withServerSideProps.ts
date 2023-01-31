import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";

export const withServerSideProps = (callback?: any) => {
  const getServerSideProps: GetServerSideProps = async ({
    locale,
    ...rest
  }) => {
    let propsCallback = {};
    if (callback) {
      propsCallback = (await callback({ ...rest })) || {};
    }

    if (Object.keys(propsCallback)?.includes("notFound")) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        ...propsCallback,
        ...(await serverSideTranslations(locale as string, ["common"])),
      },
    };
  };
  return getServerSideProps;
};
