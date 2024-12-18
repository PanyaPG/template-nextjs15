"use client";

import { ConfigProvider, theme } from "antd";
import { observer } from "mobx-react";
import { NextPage } from "next";
import { ReactNode, useEffect } from "react";
import themeViewModel from "./them.viewmodel";

interface Props {
  children: ReactNode;
}

const ThemeProvider: NextPage<Props> = ({ children }) => {
  const { isDarkMode, isReady } = themeViewModel;
  const { defaultAlgorithm, darkAlgorithm } = theme;

  useEffect(() => {
    themeViewModel.initMode();
    return () => {};
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorPrimary: "#54D3E9",
        },
      }}
    >
      {isReady && children}
    </ConfigProvider>
  );
};

export default observer(ThemeProvider);
