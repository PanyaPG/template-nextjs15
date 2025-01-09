import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Flex, Image, Layout, Menu } from "antd";
import { observer } from "mobx-react";
import React from "react";
import appViewModel from "../../app/[lang]/app.viewmodel";

type Props = {};

const LayoutSider = ({}: Props) => {
  const items = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    UserOutlined,
  ].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }));

  return (
    <Layout.Sider
      theme="light"
      trigger={null}
      collapsible
      collapsed={appViewModel.collapsed}
      collapsedWidth="60"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Flex align="center" justify="center">
        <Image
          preview={false}
          width={appViewModel.collapsed ? "64px" : "auto"}
          height={appViewModel.collapsed ? "64px" : "100px"}
          src={
            appViewModel.collapsed
              ? "/icons/ic_symphony_sm.png"
              : "/icons/ic_symphony.png"
          }
          alt="logo"
        />
      </Flex>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={items}
      />
    </Layout.Sider>
  );
};

export default observer(LayoutSider);
