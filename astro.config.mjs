import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import vercel from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  server: {
    host: "0.0.0.0",
  },
  site: "https://malagu.naily.cc",
  integrations: [
    starlight({
      title: "Malagu",
      favicon: "favicon.ico",
      social: {
        github: "https://github.com/cellbang/malagu",
      },
      logo: {
        src: "./src/assets/Malagu_Logo_Green.svg",
        alt: "Malagu",
      },
      customCss: ["./src/styles/main.css", "./src/styles/tailwind.css"],
      lastUpdated: true,
      sidebar: [
        {
          label: "基础",
          autogenerate: {
            directory: "guides",
          },
        },
        { label: "概念", autogenerate: { directory: "concept" } },
        {
          label: "组件",
          items: [
            {
              label: "核心",
              collapsed: true,
              items: [
                { label: "概述", link: "main/core/core" },
                { label: "依赖注入", link: "main/core/ioc" },
                { label: "配置文件", link: "main/core/configuration" },
                { label: "切面拦截", link: "main/core/aop" },
                { label: "错误处理", link: "main/core/catch" },
                { label: "工具集", link: "main/core/utils" },
                { label: "数据格式", link: "main/core/data-format" },
                { label: "应用原理", link: "main/core/app" },
                { label: "配置属性索引", link: "main/core/configurations" },
                // { label: "注解索引", link: "main/core/decorators" },
              ],
            },
            { label: "Web", collapsed: true, autogenerate: { directory: "main/web", collapsed: true } },
            {
              label: "CLI",
              collapsed: true,
              autogenerate: {
                directory: "main/cli",
                collapsed: true,
              },
            },
            {
              label: "安全",
              collapsed: true,
              autogenerate: {
                directory: "main/security",
                collapsed: true,
              },
            },
            {
              label: "数据库",
              collapsed: true,
              autogenerate: {
                directory: "main/database",
                collapsed: true,
              },
            },
            { label: "缓存", link: "main/cache" },
            { label: "静态资源", link: "main/static" },
          ],
        },
        { label: "开发", autogenerate: { directory: "dev" } },
        { label: "部署", autogenerate: { directory: "cloud" } },
        { label: "扩展", autogenerate: { directory: "extends" } },
        { label: "参与贡献", link: "contribute" },
        { label: "工具库推荐", link: "tools-recommend" },
        { label: "Github", link: "https://github.com/cellbang/malagu", attrs: { target: "_blank" } },
        {
          label: "加入QQ群",
          link: "https://qm.qq.com/cgi-bin/qm/qr?k=DoAe0V5Zz3vzn31b1YjEd1WfwFjf7A70&authKey=gZpkj30DDWF/qJII/+cRFh38135do7jZvYbG1fngcLgaD3lB1IVxdhUMRrgTe0iK&noverify=0",
          attrs: { target: "_blank" },
        },
        {
          label: "加入微信群",
          link: "https://work.weixin.qq.com/gm/1dc8c0da2260edc740dd27532406e3b4",
          attrs: { target: "_blank" },
        },
      ],
      locales: {
        root: {
          lang: "zh-CN",
          label: "简体中文",
        },
      },
    }),
    tailwind({
      // 禁用默认的基础样式
      applyBaseStyles: false,
    }),
  ],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
