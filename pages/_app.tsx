import type { AppProps } from "next/app";

require("../styles/globals.css");

import { ConfigProvider, theme } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: "#0A9830",
          colorError: "#EF4444",
          controlHeightLG: 52,
          fontSizeLG: 16,
          fontFamily: "Plus Jakarta Sans",
        },
        components: {
          Anchor: {
            lineHeight: 2,
          },
        },
      }}
    >
      <StyleProvider hashPriority="high">
        <Component {...pageProps} />
      </StyleProvider>
    </ConfigProvider>
  );
}
