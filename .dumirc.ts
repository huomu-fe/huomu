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
      { type: "lib", dir: "packages/core/src" },
      { type: "lib", dir: "packages/tool/src" },
      { type: "engineered", dir: "packages/huomu-scripts/src" },
      { type: "engineered", dir: "packages/commit-lint/doc" },
      { type: "engineered", dir: "packages/eslint-config-base/doc" },
      { type: "engineered", dir: "packages/style-lint/doc" },
    ],
  },
  plugins: ['@umijs/plugins/dist/tailwindcss'],
  tailwindcss: {},
});
