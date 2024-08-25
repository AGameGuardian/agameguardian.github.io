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
          { text: 'gg函数', link: '/func/gg/addListItems', activeMatch: "/func/gg/" },
          { text: 'agg函数', link: '/func/agg/mainTabs', activeMatch: "/func/agg/" },
        ]
      },
    ],
    sidebar: {
      '/func/': [
        {
          text: 'gg函数',
          collapsed: false,
          items: [
            { text: 'addListItems', link: '/func/gg/addListItems' },
          ]
        },
        {
          text: 'agg函数',
          collapsed: false,
          items: [
            { text: 'mainTabs', link: '/func/agg/mainTabs' },
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
