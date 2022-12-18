import { MenuProps } from "antd";

export const REACT_APP_URL = process.env.NEXT_PUBLIC_REACT_APP;

export const HEADER_CATEGORY = [
  {
    title: "common.txt_job",
    href: "#search-jobs",
  },
  {
    title: "common.txt_about_us",
    href: "#home-about-us",
  },
  {
    title: "common.txt_compensation",
    href: "#home-compensation",
  },
  {
    title: "common.txt_faq",
    href: "#home-faq",
  },
  {
    title: "common.txt_news",
    href: "#home-news",
  },
  {
    title: "common.txt_contact",
    href: "#app-footer",
  },
];

export const FOOTER_CATEGORY = [
  {
    title: "common.txt_job",
  },
  {
    title: "common.txt_about_us",
  },
  {
    title: "common.txt_news",
  },
  {
    title: "common.txt_contact",
  },
];

export const FORM_ITEM_TYPES = {
  TEXT: "text",
  TEXTAREA: "textarea",
  SELECT: "select",
};

export const LANGUAGE_SUPPORT: MenuProps["items"] = [
  {
    key: "en",
    label: "English",
  },
  {
    key: "vn",
    label: "Vietnamese",
  },
];

export const JOB_TYPES = [
  {
    key: "parttime",
    label: "Parttime",
  },
  {
    key: "fulltime",
    label: "Fulltime",
  },
];

export const JOB_LEVELS = [
  {
    key: "intern",
    label: "Intern",
  },
  {
    key: "fresher",
    label: "Fresher",
  },
  {
    key: "junior",
    label: "Junior",
  },
  {
    key: "middle",
    label: "Middle",
  },
  {
    key: "senior",
    label: "Senior",
  },
];
