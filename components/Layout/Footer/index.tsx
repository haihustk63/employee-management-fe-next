import { MailFilled, PhoneFilled } from "@ant-design/icons";
import { Image, Layout, Typography } from "antd";
import { useTranslation } from "next-i18next";

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
        <Image
          className="app-footer__logo"
          src="/images/logo-tran-green.png"
          alt="App Logo"
          preview={false}
          loading="lazy"
        />
        <div className="app-footer__contact">
          <Text>Contact us</Text>
          <Text>
            <MailFilled />: harrypham@example.com
          </Text>
          <Text>
            <PhoneFilled />: 0379452159
          </Text>
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
