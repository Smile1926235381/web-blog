---
title: webpack
date: 2023-05-31 14:11:11
permalink: /pages/fddcf2/
categories:
  - pages
  - Webpack
tags:
  - webpack
---
## 安装webpack

- `npm install --save-dev webpack`

## webpack.config.js配置

- 1. 文件写好后即可 终端中输入 npx webpack 即可打包成功

  ```js
  const path = require('path')
  module.exports = {
      entry: './src/index.js',   //入口文件
      
      output: {
          filename: 'bundle.js',
          //输出文件夹必须定义为绝对路径
          path: path.resolve(__dirname,'./dist')
      },
      
      mode: 'development'  //开发模式
  }
  ```

- 2. index.html自动引入资源(打包好的js)，通过插件HtmlWebpackPlugin

     安装插件  `npm install --save-dev html-webpack-plugin`

  ```js
  plugin: [
  	new HtmlWebpackPlugin({
  		template: './index.html', //打包生成的文件模板
  		filename: 'index.html', //打包生成文件名称默认index.html
  		inject: 'body'  //设置注入模板的位置 'head'|'body'|true|false
      })
  ]
  ```

  

- 3.清理dist(每次打包旧dist依然存在，需要清理)  

  ```js
  output: {
  	clean: true   //打包前清理dist文件夹
  }
  ```

  

- 4. source map（追踪error和warning在源代码中的原始位置）

  ```js
  devtool: 'inline-source-map',   //开发模式下追踪代码
  ```

- 5. watch mode （观察模式）（修改后自动编译）

     使用webpack-dev-server实现  `npm install --save-dev webpack-dev-server`

     执行命令： `npx webpack serve --open`

  ```js
  devServer: {
  	static: './dist'
  }
  ```

- 6. 资源模块
  
     - asset/resource 发送一个单独的文件并导出 URL
  
     - asset/inline 导出一个资源的 data URI
     - asset/source 导出资源的源代码
     - asset 在导出一个 data URI 和发送一个单独的文件之间自动选择
  
  ```js
  //配置资源文件
  module: {
  	rules: [{
  		test: /\.png/,
  		type: 'asset/resource'
  	}]
  }
  ```
  
- 7. 加载css

     安装 `npm install --save-dev style-loader css-loader`

     运行 npx webpack serve --open

  ```js
  //配置资源文件
  module: {
  	rules: [{
  		test: /\.css$/i,
  		use: ['style-loader','css-loader']
  	}]
  }
  ```

  ​	安装 `npm install less less-loader --save-dev`

  ```js
  //配置资源文件
  module: {
  	rules: [{
  		test: /\.less$/i,
  		use: ['style-loader','css-loader','less-loader']
  	}]
  }
  ```

- 8. 抽离压缩css

     (抽离)  安装 ` npm install mini-css-extract-plugin --save-dev`

  ```js
  const MiniCssExtractPlugin = require("mini-css-extract-plugin")
  plugins: [
      new MiniCssExtractPlugin({
          filename: "styles/[contenthash].css",
      }),
  ],
  module: {
  	rules: [{
  		test: /\.css$/i,
  		use: [MiniCssExtractPlugin.loader,'css-loader']
  	}]
  }
  ```

  ​		(压缩)	安装 `npm install css-minimizer-webpack-plugin -- save-dev`	

  ```js
  const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
  mode: 'production'
  optimization: {
      minimizer: [new CssMinimizerPlugin()],
  },
  
  ```
