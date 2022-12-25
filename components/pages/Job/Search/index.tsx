import { Typography } from "antd";
import { useTranslation } from "next-i18next";

import FormSearch from "./FormSearch";

const { Title } = Typography;

const Search = () => {
  const { t } = useTranslation();

  return (
    <div className="job-search" id="search-jobs">
      <Title className="app-title">Search for jobs</Title>
      <FormSearch />
    </div>
  );
};

export default Search;
