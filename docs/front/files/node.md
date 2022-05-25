# node

## node环境变量配置

- [https://www.cnblogs.com/yoututu/p/15522303.html](https://www.cnblogs.com/yoututu/p/15522303.html)

## npm使用

- 查看镜像地址： `npm get registry`
- cnpm安装：      `npm install -g cnpm --registry=https://registry.npm.taobao.org`
- npm管理工具 nrm：
  - 安装：    `cnpm i nrm -g`
  - 查看源：`nrm ls`
  - 切换源：`nrm use taobao`
  - 删除源：`nrm del taobao`

## nvm node版本升级

- 1.查看本地安装的所有版本   `nvm list `
- 2.安装，命令中的版本号可自定义 `nvm install 14.15.0`
- 3.使用特定版本 `nvm use 14.15.0`
- 4.卸载版本 `nvm uninstall 14.15.0`

## fs文件系统模块

- fs.readFile() 方法，用来读取指定文件的内容

  ```js
  const fs = require("fs");
  
  fs.readFile("./files/1.txt", "utf8", function (err, result) {
    if (err) {
      return console.log("文件读取失败" + err.message);
    }
    console.log("文件读取成功" + result);
  });
  ```


- fs.writeFile()方法，向指定文件中写入内容

  ```js
  const fs = require("fs")
  
  fs.writeFile("./files/2.txt","hello world",function(err) {
      if(err) {
          return console.log('文件写入失败！'+err.message)
      }
      console.log('文件写入成功')
  })
  ```

- __dirname路径动态拼接

  ```js
  fs.readFile(__dirname + '/files/grade2.txt','utf8',function(err,dataStr) {
    if(err) return console.log('读取失败')
    console.log('文件读取成功\n' + dataStr)
  })
  ```

## path路径模块

- path.join()方法，用来将多个路径片段拼接成完整得路径字符串

  ```js
  const path = require('path')
  
  const pathStr = path.join('/a','/b/c','../','./d','e')
  console.log(pathStr)  // \a\b\d\e
  const pathStr2 = path.join(__dirname,'./files/1.txt')  //当前文件绝对路径
  ```

- path.basename()方法，用来从路径字符中，将文件名解析出来

  ```js
  const pathStr = '/a/b/index.html'
  console.log(path.basename(pathStr))  //index.html
  console.log(path.basename(pathStr,'html')) //index
  ```

- path.extname()方法，用来获取文件扩展名

  ```js
  const pathStr = '/a/b/index.html'
  console.log(path.extname(pathStr))  //.html
  ```

## http服务模块

- 实现基本服务

  ```js
  // 1. 导入http模块
  const http = require('http')
  
  // 2. 创建web服务实例
  const server = http.createServer()
  
  // 3. 监听客户端请求
  server.on('request',(req,res) => {
    // 请求就会触发  req.url请求地址    req.method请求方式
    const str = `Your request url is ${req.url}, and request method is ${req.method}`
  
    // 处理中文乱码
    res.setHeader('Content-type','text/html;charset=utf-8')
  
    // 向客户端发送指定内容，并结束这次请求的处理过程
    res.end(str)
  })
  // 4. 启动服务器
  server.listen(3001,()=> {
    console.log('http server running at http://localhost:3001')
  })
  ```


## 模块化

- require()  加载模块
- module.exports  共享模块供外界使用
- 注意点：使用 require() 方法导入模块时，导入的结果，永远以 module.exports 指向的对象为准。

## express服务

- 实现基本搭建

  ```js
  // 1.导入express
  const express = require("express");
  // 2.创建web服务
  const app = express();
  
  app.get("/user", (req, res) => {
    // 获取参数
    console.log(req.query)
    // 响应
    res.send({ name: "zs", age: 23 });
  });
  
  app.post("/user/:id",(req,res)=> {
    console.log(req.params)
    res.send('post请求成功')
  })
  // 3.启动服务
  app.listen(3000, () => {
    console.log("server running at http://localhost:3000");
  });
  
  ```

- nodemon使用
  
  - 安装 `npm install -g nodemon`
  
- express路由基本使用

  - 1.创建user.js路由模块

  ```js
  // 1.导入express
  const express = require('express')
  // 2.创建路由对象
  const router = express.Router()
  // 3.挂在路由
  router.get('/user/list',(req,res)=> {
    res.send('get user list')
  })
  
  router.post('/user/list',(req,res)=> {
    res.send('post user list')
  })
  // 4.到处路由对象
  module.exports = router
  ```

  - 2. 引入

  ```js
  const express = require('express')
  const app = express()
  
  const useRouter = require('./user')
  
  // 添加前缀
  app.use('/api',useRouter)
  
  app.listen(3000,()=> {
    console.log('express server at http://localhost:3000')
  })
  ```



