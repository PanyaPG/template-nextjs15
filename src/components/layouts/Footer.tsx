import { Layout } from "antd";

type Props = {};

export default function LayoutFooter({}: Props) {
  return (
    <Layout.Footer style={{ textAlign: "center" }}>
      Ant Design ©{new Date().getFullYear()} Created by Template Design
    </Layout.Footer>
  );
}
