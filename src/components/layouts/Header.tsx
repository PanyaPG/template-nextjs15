import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, theme } from "antd";
import { observer } from "mobx-react";
import appViewModel from "../../app/[lang]/app.viewmodel";

const LayoutHeader = () => {
  const { colorBgContainer } = theme.useToken().token;

  return (
    <Layout.Header style={{ padding: 0, background: colorBgContainer }}>
      <Button
        type="text"
        icon={
          appViewModel.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
        }
        onClick={() => (appViewModel.collapsed = !appViewModel.collapsed)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
    </Layout.Header>
  );
};

export default observer(LayoutHeader);
