# react

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
