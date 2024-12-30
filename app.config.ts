export default defineAppConfig({
  ui: {
    primary: "green",
    gray: "slate",
    footer: {
      bottom: {
        left: "text-sm text-gray-500 dark:text-gray-400",
        wrapper: "border-t border-gray-200 dark:border-gray-800",
      },
    },
  },
  seo: {
    siteName: "Cell - 企业级应用开发框架",
  },
  header: {
    logo: {
      alt: "",
      light: "",
      dark: "",
    },
    search: true,
    colorMode: true,
    links: [
      {
        icon: "i-simple-icons-github",
        to: "https://github.com/cellbang/cell",
        target: "_blank",
        "aria-label": "Docs template on GitHub",
      },
    ],
  },
  footer: {
    credits: "Copyright © 2024 Zero (github@groupguanfang) 粤ICP备2023102563号",
    colorMode: false,
    links: [
      {
        icon: "i-simple-icons-github",
        to: "https://github.com/cellbang/",
        target: "_blank",
        "aria-label": "Cell on GitHub",
      },
    ],
  },
  toc: {
    title: "目录",
    bottom: {
      title: "链接",
      edit: "",
      links: [
        {
          icon: "i-mdi-heart",
          label: "参与贡献",
          to: "/contribute",
        },
        {
          icon: "i-mdi-book-open-variant",
          label: "工具库推荐",
          to: "/tool-recommend",
        },
        {
          icon: "i-simple-icons-github",
          label: "GitHub",
          to: "https://github.com/cellbang/cell",
          target: "_blank",
        },
        {
          icon: "i-simple-icons-github",
          label: "文档仓库",
          to: "https://github.com/groupguanfang/malagu-docs",
          target: "_blank",
        },
        {
          icon: "i-simple-icons-wechat",
          label: "加入微信群",
          to: "https://work.weixin.qq.com/gm/1dc8c0da2260edc740dd27532406e3b4",
          target: "_blank",
        },
      ],
    },
  },
});
