module.exports = {
  title: "Run笔记",
  description: "记录前端笔记", //seo优化： 以 <meta> 标签渲染到页面html中
  theme: "vdoing",
  head: [
    ["meta", { name: "keywords", content: "Run笔记,前端,前端笔记" }], //seo优化:关键词
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["script", { src: "/js/pet.js" }],
    ["script", { src: "/js/base.js" }],
  ],
  plugins: [
    // 复制代码块
    ["vuepress-plugin-code-copy", true],
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",
      {
        audios: [
          {
            name: "花海",
            artist: "周杰伦",
            url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-77a386c7-85ab-48f7-a40b-25c397281820/44d885a5-fe57-4962-8021-65fe40a1b848.MP3",
            cover: "https://assets.smallsunnyfox.com/music/2.jpg",
          },
          {
            name: "夜曲",
            artist: "周杰伦",
            url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-77a386c7-85ab-48f7-a40b-25c397281820/18f7ff5f-70a3-4393-9a1d-f272e4f48d7c.MP3",
            cover: "https://assets.smallsunnyfox.com/music/3.jpg",
          },
        ],
      },
    ],
    [
      "ribbon-animation",
      {
        size: 90, // 默认数据
        opacity: 0.3, //  透明度
        zIndex: -1, //  层级
        opt: {
          // 色带HSL饱和度
          colorSaturation: "80%",
          // 色带HSL亮度量
          colorBrightness: "30%",
          // 带状颜色不透明度
          colorAlpha: 0.35,
          // 在HSL颜色空间中循环显示颜色的速度有多快
          colorCycleSpeed: 6,
          // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
          verticalPosition: "center",
          // 到达屏幕另一侧的速度有多快
          horizontalSpeed: 200,
          // 在任何给定时间，屏幕上会保留多少条带
          ribbonCount: 8,
          // 添加笔划以及色带填充颜色
          strokeSize: 0,
          // 通过页面滚动上的因子垂直移动色带
          parallaxAmount: -0.5,
          // 随着时间的推移，为每个功能区添加动画效果
          animateSections: true,
        },
        ribbonShow: true, //  点击彩带  true显示  false为不显示
        ribbonAnimationShow: true, // 滑动彩带
      },
    ],
  ],
  themeConfig: {
    logo: "/favicon.ico", //网页顶端导航栏左上角的图标

    //顶部导航栏
    nav: [
      //格式一：直接跳转，'/'为不添加路由，跳转至首页
      { text: "首页", link: "/" },
      //格式二：添加下拉菜单，link指向的文件路径
      {
        text: "前端", //默认显示
        ariaLabel: "前端", //用于识别的label
        items: [
          { text: "HTML", link: "/pages/Front/HTML/html.md" },
          { text: "CSS", link: "/pages/Front/CSS/css.md" },
          { text: "JavaScript", link: "/pages/Front/JavaScript/js.md" },
          { text: "ES6", link: "/pages/Front/JavaScript/es6.md" },
          { text: "Node", link: "/pages/Front/Node/node.md" },
          { text: "Webpack", link: "/pages/Front/Webpack/webpack.md" },
          { text: "Vue", link: "/pages/Front/Vue/vue2.md" },
          { text: "前端面试题", link: "/pages/Front/Expand/html+css.md" },
        ],
      },
      {
        text: "后端", //默认显示
        ariaLabel: "后端", //用于识别的label
        items: [
          { text: "Java", link: "/pages/Server/Java/java.md" },
          { text: "Mysql", link: "/pages/Server/Mysql/mysql.md" },
        ],
      },
      {
        text: "资源列表", //默认显示
        ariaLabel: "资源列表", //用于识别的label
        items: [
          { text: "ES6", link: "https://wangdoc.com/es6/intro.html" },
          { text: "Vue", link: "https://v2.cn.vuejs.org/v2/guide" },
          {
            text: "React",
            link: "https://react.docschina.org/tutorial/tutorial.html",
          },
          { text: "uniapp", link: "https://uniapp.dcloud.net.cn" },
          {
            text: "ReactNative",
            link: "https://www.reactnative.cn/docs/getting-started",
          },
          { text: "菜鸟教程", link: "https://www.runoob.com/" },
          {
            text: "Bootstrap",
            link: "https://v3.bootcss.com/getting-started/",
          },
          {
            text: "Element",
            link: "https://element.eleme.io/#/zh-CN/component/installation",
          },
          {
            text: "Element-plus",
            link: "https://element-plus.gitee.io/zh-CN/guide/design.html",
          },
          {
            text: "uview",
            link: "https://www.uviewui.com/components/intro.html",
          },
          { text: "BootCDN", link: "https://www.bootcdn.cn/" },
          { text: "Axios", link: "https://www.axios-http.cn/docs/example" },
          { text: "Node", link: "http://nodejs.cn/learn" },
          { text: "Ant", link: "https://ant.design/docs/react/introduce-cn" },
          {
            text: "Flutter",
            link: "https://flutter.cn/docs/get-started/install",
          },
          { text: "阿里图标", link: "https://www.iconfont.cn/" },
          {
            text: "微信小程序",
            link: "https://developers.weixin.qq.com/miniprogram/introduction",
          },
        ],
      },
      { text: "导航网站", link: "/guide.md" },
      {
        text: "人生感悟", //默认显示
        ariaLabel: "人生感悟", //用于识别的label
        items: [
          { text: "活着", link: "/Life/alive.md" },
          { text: "人生的意义", link: "/Life/meaning_of_life.md" },
          { text: "人生格言", link: "/Life/lifetime.md" },
          { text: "励志语录", link: "/Life/future.md" },
        ],
      },
      {
        text: "索引", //默认显示
        ariaLabel: "索引", //用于识别的label
        items: [
          { text: "分类", link: "/categories/" },
          { text: "标签", link: "/tags/" },
          { text: "归档", link: "/archives/" },
          { text: "展示", link: "/show/" },
        ],
      },
      // {
      //     text: '仓库',
      //     ariaLabel: '仓库',
      //     items: [
      //         {text: 'gitee', link: 'https://gitee.com/old-chen-next-door/lao-chens-front-end-notes'},
      //         {text: 'github', link: 'https://github.com/laochen56/laochen_blog'},
      //     ]
      // },
    ],
    //静态侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
    sidebar: {
      // 前端
      "/pages/Front/": [
        {
          title: "HTML", // 一级菜单名称
          sidebarDepth: 2,
          collapsable: true, // false为默认展开菜单, 默认值true是折叠,
          //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [["HTML/html.md", "HTML简介"]],
        },
        {
          title: "CSS",
          sidebarDepth: 2,
          collapsable: true,
          children: [
            ["CSS/css.md", "CSS简介"],
            // ['CSS/css3.md', 'CSS3简介']
          ],
        },
        {
          title: "JavaScript",
          sidebarDepth: 2,
          collapsable: true,
          children: [
            ["JavaScript/js.md", "JavaScript简介"],
            ["JavaScript/es6.md", "ES6简介"],
          ],
        },
        {
          title: "Node",
          sidebarDepth: 2,
          collapsable: true,
          children: [["Node/node.md", "Node简介"]],
        },
        {
          title: "Webpack",
          sidebarDepth: 2,
          collapsable: true,
          children: [["Webpack/webpack.md", "Webpack简介"]],
        },
        {
          title: "Vue",
          sidebarDepth: 2,
          collapsable: true,
          children: [
            ["Vue/vue2.md", "Vue2简介"],
            ["Vue/vue3.md", "Vue3简介"],
          ],
        },
        {
          title: "前端面试题",
          sidebarDepth: 2,
          collapsable: true,
          children: [
            ["Expand/html+css.md", "html+css"],
            ["Expand/js.md", "javascript"],
            ["Expand/vue.md", "vue"],
            ["Expand/react.md", "react"],
          ],
        },
      ],
      // 后端
      "/pages/Server/": [
        {
          title: "Java", // 一级菜单名称
          sidebarDepth: 2,
          collapsable: true, // false为默认展开菜单, 默认值true是折叠,
          //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [["Java/java.md", "java简介"]],
        },
        {
            title: "Mysql", // 一级菜单名称
            sidebarDepth: 2,
            collapsable: true, // false为默认展开菜单, 默认值true是折叠,
            //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
            children: [["Mysql/mysql.md", "Mysql简介"]],
          },
      ],
      "/Life/": [
        {
          title: "人生感悟",
          collapsable: false,
          children: [
            ["alive.md", "活着"],
            ["meaning_of_life.md", "人生的意义"],
            ["lifetime.md", "人生格言"],
            ["future.md", "励志语录"],
          ],
        },
      ],
      //...可添加多个不同的侧边栏，不同页面会根据路径显示不同的侧边栏
    },
  },
  //   动态添加侧边导航栏
};
