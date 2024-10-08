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
          { text: 'gg文档', link: '/class/gg/ggModel', activeMatch: "/class/gg/" },
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
            { text: '快速开始', link: '/class/快速了解/快速开始' },
            { text: 'AGG对比GG', link: '/class/快速了解/AGG对比GG' },
          ]
        },
        {
          text: 'gg文档',
          collapsed: false,
          items: [
            { text: 'gg库', link: '/class/gg/ggModel' },
            { text: 'io库', link: '/class/gg/ioModel' },
          ]
        },
        {
          text: 'agg文档',
          collapsed: false,
          items: [
            { text: 'functions', link: '/class/agg/functions' },
            { text: 'Lua调用java方法', link: '/class/agg/loadJava' },
            { text: 'QQ授权函数', link: '/class/agg/QQfunction' },
          ]
        },
        {
          text: 'luajava文档',
          collapsed: false,
          items: [
            { text: 'LuaJava函数库', link: '/class/luajava/luajava' },
          ]
        },
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
