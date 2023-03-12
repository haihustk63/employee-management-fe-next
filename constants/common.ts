import { MenuProps } from "antd";

export const REACT_APP_URL = process.env.NEXT_PUBLIC_REACT_APP;

export const HEADER_CATEGORY = [
  {
    title: "header.txt_home",
    href: "/",
  },
  {
    title: "common.txt_job",
    href: "/jobs",
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
    title: "Flexible Work",
    content:
      "The ideal working environment isn't fixed, which is why here at Ekoios, you'll have the freedom to work anywhere you want.",
  },
  {
    key: 2,
    title: "Health Benefits",
    content:
      "We always try to take care of our own. Our health benefits package includes health insurance, social insurance, unemployment insurance and commuter benefits.",
  },
  {
    key: 3,
    title: "Learning And Career Growth",
    content:
      "We're all about personal & professional development. From the very first day at Ekoios, you'll be empowered with various types of learning activities, trainings, as well as coaching.",
  },
  {
    key: 4,
    title: "Facilities",
    content:
      "Anything you need to be excellent at what you do—any thing at all—will be provided for your convenience.",
  },
  {
    key: 5,
    title: "Compensation",
    content:
      "We know of the best way to give it back—with compensation. We offer competitive compensation along with attractive rewards and performance-based bonuses.",
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

export const FREQUENTLY_ASKED_QUESTIONS = [
  {
    key: "1",
    question: "What do I need to know before contacting you?",
    answer:
      "Well, the most important thing to know is what do you want to accomplish. Why do I need this software? What for? What should it do? Having a clear vision in mind is crucial when ordering a software application. You don't want to spend many months developing it with us without being sure what you need. If you have no experience in app development feel free to read our blog entry on that topic. We'll also be glad to help you get started, building projects from scratch is nothing new for us.",
  },
  {
    key: "2",
    question: "What kind of people are you looking for?",
    answer:
      "We look for people who are passionate about our values, who have professional attitude, and who show us that they’re passionate about the role they’re applying for. ",
  },
  {
    key: "3",
    question: "How often do you update the open positions on your website ?",
    answer:
      "The career site is updated in real-time as positions become available. All positions listed are open to applications.",
  },
  {
    key: "4",
    question: "What documents do I need to apply?",
    answer:
      "To help us get to know you better, we'll need an up-to-date copy of your CV/resume. You'll also have the opportunity to add a cover letter if you want to tell us more. ",
  },
  {
    key: "5",
    question:
      "Who can I contact if I have difficulty submitting my resume / application?",
    answer:
      "If you need assistance, please reach out to careers@softwaregroup.com",
  },
  {
    key: "6",
    question:
      " What should I do if I cannot find an opportunity that matches my skills?",
    answer:
      "You can make a general application. We would invite you to submit your details using our general profile feature. Our company is growing and there is a good chance that an opportunity requiring your skills and experience will be available in the future. Your information will be made available to our recruiting professionals. We will compare your skills and experience with our ongoing requirements and will be able to contact you when a suitable opportunity arises.",
  },
  {
    key: "7",
    question: "Will you contact me regarding the status of my application?",
    answer:
      "We're really sorry but due to the amount of applications we receive each day, we can't always give individual feedback in the first stages of our application process. Your application will be reviewed, and someone on the recruiting team will reach out directly if they would like to schedule an interview. If there is no follow up on your application for the time being, we will contact you should an opening that fits your expertise appear within a year, after that a new application will have to be made for an open position.",
  },
  {
    key: "8",
    question: "How do you guarantee product quality?",
    answer:
      "We evaluate the result after every two weeks, we test our work (we conduct both development and acceptance tests), we present it to you, we apply your feedback so you know you get what you are paying for.",
  },
];
