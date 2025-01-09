import { Layout, theme } from "antd";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function LayoutContent({ children }: Props) {
  const { colorBgContainer, borderRadiusLG } = theme.useToken().token;

  return (
    <Layout.Content style={{ margin: "24px 16px 0" }}>
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        {children}
      </div>
    </Layout.Content>
  );
}
