import { Input, Layout, Typography } from "antd";
import Link from "next/link";
import {
  MailFilled,
  PhoneFilled,
  TwitterCircleFilled,
  FacebookFilled,
  InstagramFilled,
  YoutubeFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import { useTranslation } from "next-i18next";

import { FOOTER_CATEGORY } from "constants/common";
import AppButton from "@components/AppButton";

const { Footer } = Layout;
const { Title, Text } = Typography;

const branches = [
  {
    province: "TP Ha Noi",
    address: "fsnefuwefnwenfe",
  },
  {
    province: "TP Da Nang",
    address: "fsnefuwefnwenfe",
  },
  {
    province: "TP Ho Chi Minh",
    address: "fsnefuwefnwenfe",
  },
];

const AppFooter = () => {
  const { t } = useTranslation() as any;

  return (
    <div className="app-footer" id="app-footer">
      <Footer className="app-footer__content">
        <div className="app-footer__contact">
          <Title>Logo</Title>
          <Text>
            <MailFilled />: harrypham@example.com
          </Text>
          <Text>
            <PhoneFilled />: 0379452159
          </Text>
          <div className="app-footer__social">
            <TwitterCircleFilled />
            <FacebookFilled />
            <LinkedinFilled />
            <InstagramFilled />
            <YoutubeFilled />
          </div>
        </div>
        <div className="app-footer__branch">
          {branches.map(({ province, address }, index) => {
            return (
              <div key={index}>
                <Text>{province}</Text>
                <Text>{address}</Text>
              </div>
            );
          })}
        </div>
        <div className="app-footer__category">
          <Text>Harry Corp</Text>
          <ul className="app-footer__list">
            {FOOTER_CATEGORY.map((item) => {
              return (
                <li key={item.title}>
                  <Link href="#">{t(item.title)}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="app-footer__register-news-wrap">
          <Title level={3}>Harry Corp</Title>
          <Text>
            Sign up to get our latest product updates, resources, and more
            straight to your inbox.
          </Text>
          <div className="app-footer__register-news-form">
            <Input
              name="email"
              value=""
              onChange={() => {}}
              placeholder="Enter your email"
            />
            <AppButton buttonTitle="Sign up" />
          </div>
        </div>
      </Footer>
      <div className="app-footer__copyright">
        <Text>
          Copyright © 2021 HarryCorp. All rights reserved. Privacy Policy |
          Terms of Service
        </Text>
      </div>
    </div>
  );
};

export default AppFooter;
