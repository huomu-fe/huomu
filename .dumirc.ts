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
});
