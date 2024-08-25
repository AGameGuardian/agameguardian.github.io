import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "AGameGuardian",
  description: "AGameGuardian",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '快速了解', link: '/class/快速了解/AGG是什么'},
      {
        text: '函数列表',
        items: [
          { text: 'gg文档', link: '/class/gg/functions', activeMatch: "/class/gg/" },
          { text: 'agg文档', link: '/class/agg/functions', activeMatch: "/class/agg/" },
        ]
      },
    ],
    sidebar: {
      '/class/': [
        {
          text: '了解',
          collapsed: false,
          items: [
            { text: 'AGG是什么？', link: '/class/快速了解/AGG是什么' },
          ]
        },
        {
          text: 'gg文档',
          collapsed: false,
          items: [
            { text: 'functions', link: '/class/gg/functions' },
            { text: 'variables', link: '/class/gg/variables' },
          ]
        },
        {
          text: 'agg文档',
          collapsed: false,
          items: [
            { text: 'functions', link: '/class/agg/functions' },
            { text: 'QQ授权函数', link: '/class/agg/qq' },
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
