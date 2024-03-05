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
        {
          label: "组件",
          items: [
            {
              label: "核心",
              items: [
                { label: "概述", link: "main/core/core" },
                { label: "依赖注入", link: "main/core/ioc" },
                { label: "配置文件", link: "main/core/configuration" },
                { label: "切面拦截", link: "main/core/aop" },
                { label: "错误处理", link: "main/core/catch" },
                { label: "注解索引", link: "main/core/decorators" },
                { label: "Web", autogenerate: { directory: "main/core/web", collapsed: true } },
              ],
            },
            {
              label: "CLI",
              autogenerate: {
                directory: "main/cli",
              },
            },
          ],
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
