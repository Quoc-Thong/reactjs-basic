const withPlugins = require("next-compose-plugins");
const withAntdLess = require("next-plugin-antd-less");
const path = require("path");

module.exports = async (phase) => {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    i18n: {
      locales: ["vi", "en"],
      defaultLocale: "vi",
      localeDetection: false,
    },
    reactStrictMode: false,

    transpilePackages: ["wareflex-ui"],
    output: "standalone",
    experimental: {
      outputFileTracingRoot: path.join(__dirname, "../../"),
    },
    async rewrites() {
      return [
        { source: "/provider", destination: "/provider/dashboard" },
        { source: "/client", destination: "/client/dashboard" },
      ];
    },
  };

  const defaultConfig = {};
  return withPlugins([[withAntdLess]], nextConfig)(phase, { defaultConfig });
};
