"use client";

import { Flex } from "antd";
import { NextPage } from "next";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <Flex
      style={{
        height: "100dvh",
        width: "100dvw",
      }}
    >
      <div className="body-auth">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        {children}
      </div>
    </Flex>
  );
};

export default Layout;
