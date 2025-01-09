"use client";

import { Layout } from "antd";
import { NextPage } from "next";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import LayoutContent from "../../../components/layouts/Content";
import LayoutFooter from "../../../components/layouts/Footer";
import LayoutHeader from "../../../components/layouts/Header";
import LayoutSider from "../../../components/layouts/Sider";
import { Path } from "../../../types/path.enum";
import appViewModel from "../app.viewmodel";

interface Props {
  children: ReactNode;
}

const LayoutMain: NextPage<Props> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    if (!appViewModel.isPassLogin) {
      router.push(Path.Login);
    }
  }, [pathname]);

  if (!appViewModel.isPassLogin) return;
  return (
    <Layout style={{ height: "100dvh" }}>
      <LayoutSider />
      <Layout>
        <LayoutHeader />
        <LayoutContent>{children}</LayoutContent>
        <LayoutFooter />
      </Layout>
    </Layout>
  );
};

export default LayoutMain;
