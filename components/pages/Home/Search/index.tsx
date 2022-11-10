import { Typography } from "antd";
import { useTranslation } from "next-i18next";

import FormSearch from "./FormSearch";

const { Title } = Typography;

const Search = () => {
  const { t } = useTranslation();

  return (
    <div className="home-search">
      <Title className="app-title">{t("common.txt_search")}</Title>
      <FormSearch />
    </div>
  );
};

export default Search;
