import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "AGameGuardian",
  description: "AGameGuardian",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '函数列表',
        items: [
          { text: 'gg', link: '/class/gg/functions', activeMatch: "/class/gg/" },
          { text: 'agg', link: '/class/agg/functions', activeMatch: "/class/agg/" },
        ]
      },
    ],
    sidebar: {
      '/class/': [
        {
          text: 'gg',
          collapsed: false,
          items: [
            { text: 'functions', link: '/class/gg/functions' },
            { text: 'variables', link: '/class/gg/variables' },
          ]
        },
        {
          text: 'agg',
          collapsed: false,
          items: [
            { text: 'functions', link: '/class/agg/functions' },
            { text: 'qq', link: '/class/agg/qq' },
          ]
        }
      ]
    },
    lastUpdated: {
      text: "最后更新",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "short"
      }
    },
    docFooter: {
      prev: "上一页",
      next: "下一页"
    },
    search: {
      provider: "local",
    },
  }
})
