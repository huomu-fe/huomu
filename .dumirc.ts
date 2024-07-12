import { defineConfig } from "dumi";

export default defineConfig({
  base: "/huomu",
  publicPath: "/huomu/",
  outputPath: "docs-dist",
  themeConfig: {
    name: "@huomu",
    logo: false,
    showLineNum: true,
    footer: false,
    socialLinks: {
      github: "https://github.com/BangWork/huomu"
    }
  },
  mfsu: false,
  resolve: {
    atomDirs: [
      { type: "lab", dir: "lab" },
      { type: "lib", dir: "packages/app/src" },
    ],
  },
  plugins: ['@umijs/plugins/dist/tailwindcss'],
  tailwindcss: {},
  // 解决 dumi 依赖了 react-router@6，导致没法使用 react-router@5 从而 import { useRouteMatch } from 'react-router'; 报错
  alias: {
    'react-router': require.resolve('./alias/react-router'),
  }
});
