import { Card } from "antd";
import { FC, ReactNode } from "react";

interface IAppCard {
  cardTitle: string | ReactNode;
  children: any;
  cardCover?: ReactNode;
  bordered?: boolean;
  hoverable?: boolean;
  loading?: boolean;
  size?: "default" | "small";
}

const AppCard: FC<IAppCard> = ({ cardTitle, children, ...props }) => {
  return (
    <div className="app-card">
      <Card title={cardTitle} {...props}>
        {children}
      </Card>
    </div>
  );
};

export default AppCard;
