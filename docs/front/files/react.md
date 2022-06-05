# react

## react特点

1. 声明式设计
2. 使用jsx语法
3. 灵活
4. 使用虚拟Dom高效
5. 组件化开发
6. 单向数据流

## react脚手架

```
# React 不在支持全局安装 create-react-app,建议使用npx安装
npx create-react-app project
```



## setupProxy处理跨域

- 安装 `npm i http-proxy-middleware --save`

- src下创建 setupProxy.js

  ```js
  const { createProxyMiddleware } = require("http-proxy-middleware")
  module.exports = function (app) {
    app.use(
      createProxyMiddleware("/api",{
        target: "http://localhost:3100", //配置转发目标地址
        changeOrigin: true, //控制服务器接收到的请求头中host字段的值
        pathRewrite: { "^/api": "api" }, 
      }),
    )
  }
  ```
