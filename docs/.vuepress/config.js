module.exports = {
  title: '个人主页',
  description: 'Personal Website',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/photo.jpg' }],
    ['link', { rel: 'manifest', href: '/images/photo.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/photo.jpg' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate' }],
    ['meta', { 'http-quiv': 'expires', cotent: '0' }]
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    nav: [ // 导航栏配置
      { text: '前端', link: '/front/files/html' },
      { text: '后端', link: '/server/files/java' },
      { text: '项目', link: '/project/files/vue3' },
      { text: '面试题', link: '/interview/' },
      { text: '网址收藏', link: '/website/' },
      { text: 'excel', link: '/excel/' },
      { text: 'GitHub', link: 'https://github.com/zhaopeiyou/web-blog' }
    ],
    sidebar: {
      '/front/': require('../front/sidebar'),
      '/project/': require('../project/sidebar'),
      '/server/': require('../server/sidebar')
    }, // 侧边栏配置
    sidebarDepth: 1
  }
}