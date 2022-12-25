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

export const COMPENSATION_ITEMS = [
  {
    key: 1,
    title: "Probationary period with 100% salary",
    content: "You can rereive 100% salary in probationary period",
  },
  {
    key: 2,
    title: "Promotion chances",
    content: "You can rereive 100% salary in probationary period",
  },
  {
    key: 3,
    title: "Experience with many positions",
    content: "You can rereive 100% salary in probationary period",
  },
  {
    key: 4,
    title: "Full salary's insurance",
    content: "You can rereive 100% salary in probationary period",
  },
  {
    key: 5,
    title: "Traveling, team-building",
    content: "You can rereive 100% salary in probationary period",
  },
];

export const HIRING_FLOW_ITEMS = [
  {
    key: 1,
    title: "Apply CV",
  },
  {
    key: 2,
    title: "Attempt the skill test",
  },
  {
    key: 3,
    title: "Online Interview",
  },
  {
    key: 4,
    title: "Offline Interview",
  },
  {
    key: 5,
    title: "Notify result",
  },
];

export const JOB_TYPES: { [key: string]: string | number }[] = [
  {
    key: 0,
    label: "Parttime",
    value: 0,
    color: "orange",
  },
  {
    key: 1,
    label: "Fulltime",
    value: 1,
    color: "green",
  },
];

export const JOB_LEVELS: { [key: string]: string | number }[] = [
  {
    key: 0,
    value: 0,
    label: "Intern",
    color: "grey",
  },
  {
    key: 1,
    value: 1,
    label: "Fresher",
    color: "green",
  },
  {
    key: 2,
    value: 2,
    label: "Junior",
    color: "blue",
  },
  {
    key: 3,
    value: 3,
    label: "Middle",
    color: "orange",
  },
  {
    key: 4,
    value: 4,
    label: "Senior",
    color: "red",
  },
];
