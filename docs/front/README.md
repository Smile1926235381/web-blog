---
title: 前端知识总结
sidebar: auto
sidebarDepth: 2
---

# 前端知识总结

::: tip 前端

愿天下没有难学的技术

:::

## html+css

### css nth-child使用

- 正方向范围  
  - `li:nth-child(n+6)`    选中从第6个开始的子元素
- 负方向范围  
  - ` :nth-child(-n+9)`       选中从第1个到第9个子元素
- 前后限制范围   
  - `:nth-child(n+4):nth-child(-n+8)`    选中第4-8个子元素
- 隔选择子元素  
  - `:nth-child(3n+1)`   选择1,4,7,10
- 范围  
  - `nth-child(n+2):nth-child(odd):nth-child(-n+9)  `     选中的子元素是从第2位到第9位，只包含奇数位

### scss基本使用

```scss
<style lang="scss">
// 声明变量
$color:red;
// 混入
@mixin common {
  height: 100px-20px;
  // 百分比减 calc -号两端要有空格
  width: calc(100% - 500px);
}
.mixin {
  // 调用公共方法
  @include common;
  background: $color;
}
</style>
```



## javascript

### 数组方法

```
原数组不改变： 
content   slice   join   toString   map   every   some   filter  reduce  map reduceRight

原数组会改变： 
push pop shift unshift  sort  splice  reverse
```

### 数组去重

```js
1. Array.form(new Set())
2. [...new Set()]
3. 双层for循环去重
let arr = [1,1,1,2,45,6,2,4,3,2,1]

for(let i = 0;i<arr.length-1;i++) {
    for(let j = i+1;j<arr.length;j++) {
        if(arr[j]===arr[i]) {
            arr.splice(j,1)
            j--
        }
    }
}

console.log(arr)
```

### 求数组中的最大值

```js
1.通过Math.max.apply(null,arr)
2.通过 reduce方法 let max = arr.reduce((prev,current) => return prev>current?prev:current)
3.通过数组sort方法 let max = arr.sort(function(a,b){return a-b})
```

### 函数防抖节流

- 防抖

  ```js
  // 函数防抖，在一定单位时间内，只触发一次
  function debounce(fn, Interval) {
      let timer
      return (event) => {
          if (timer) return false
          timer = setTimeout(() => {
              clearTimeout(timer)
              timer = null
              fn(event)
          }, Interval)
      }
  }
  			
  window.onresize = debounce(function(event) {
      console.log(event)
  },1000)
  ```

- 节流

  ```js
  let input = document.getElementById('inputId')
  function throttle(fn,Interval) {
      let timer
      return () => {
          clearTimeout(timer)
          timer = setTimeout(fn,Interval)
      }
  }
  
  input.oninput = throttle(function() {
      console.log(input.value)
  },1000)
  ```

### es6特性使用

- 1.合并数据

  ```js
  const a = [1,2,3];
  const b = [1,5,6];
  const c = [...new Set([...a,...b])];//[1,2,3,5,6]
  
  const obj1 = {
    a:1,
  }
  const obj2 = {
    b:1,
  }
  const obj = {...obj1,...obj2};//{a:1,b:1}
  ```

- 2.if 条件判断

  ```js
  const condition = [1,2,3,4];
  
  if( condition.includes(type) ){
     //...
  }
  
  等同于 if(type==1||type==2){}
  ```

- 3.数组扁平化

  ```js
  const deps = {
      '采购部':[1,2,3],
      '人事部':[5,8,12],
      '行政部':[5,14,79],
      '运输部':[3,64,105],
  }
  let member = Object.values(deps).flat(Infinity);
  ```

- 4.输入框非空的判断

  ```js
  if(value !== null && value !== undefined && value !== ''){
      //...
  }
  等同于
  if((value??'') !== ''){
    //...
  }
  ```

- 5.判断数组是否为空

  ```js
  const isNotEmpty = arr => Array.isArray(arr) && arr.length > 0
  
  isNotEmpty([1, 2, 3]) //true
  ```

- 6.获取两个整数之间的随机整数

  ```
  const random  = (min,max) => Math.floor(Math.random * (max-min+1) +min)
  random(1,50)
  ```

- 7.求一组数的平均值

  ```js
  const average = (...args) => args.reduce((a,b) => a+b)/args.length
  
  average(1,2,3,4,5)
  ```



## Node

### node环境变量配置

- [https://www.cnblogs.com/yoututu/p/15522303.html](https://www.cnblogs.com/yoututu/p/15522303.html)

### npm使用

- 查看镜像地址： `npm get registry`
- cnpm安装：      `npm install -g cnpm --registry=https://registry.npm.taobao.org`
- npm管理工具 nrm：
  - 安装：    `cnpm i nrm -g`
  - 查看源：`nrm ls`
  - 切换源：`nrm use taobao`
  - 删除源：`nrm del taobao`

### nvm node版本升级

- 1.查看本地安装的所有版本   `nvm list `
- 2.安装，命令中的版本号可自定义 `nvm install 14.15.0`
- 3.使用特定版本 `nvm use 14.15.0`
- 4.卸载版本 `nvm uninstall 14.15.0`

### fs文件系统模块

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

### path路径模块

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

### http服务模块

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

  

## webpack

### 1.安装webpack

- `npm install --save-dev webpack`
- 或指定版本  `npm i --save-dev webpack@<version>`

### 2.webpack.config.js配置

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

- 6.  资源模块
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

  



​	

​		

## vue

### style与class

```html
<div :class="[colorIndex?'box2':'box3','box']">//含有判断和不判断的  测试:class</div>
 
<div :style="{color:colorTwo,height:'30px',width:'100%',background:num==1?'pink':'yellow'}">测试:style</div>
 
//data变量的方式 color:colorTwo     colorTwo：‘red’
 
<div :style="[{color:colorTwo,background:num==1?'pink':'yellow'},whthTwo]">测试:style</div>

//多个对象  data whthTwo:{height: '44px',width: '100%'}
```



### core.js报错

- core-js版本太高 
  - 解决办法： `cnpm install core-js@2`
- scss报错  版本冲突   
  - 解决办法：`npm install node-sass@4.14.1 sass-loader@8.0.0 --dev`

## react

### setupProxy处理跨域

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

## eharts

### 封装基础echarts组件---(vue项目)

- 1. 基本组件common\echart\index.vue

     ```vue
     <template>
       <div :id="id" :class="className" :style="{ height: height, width: width }" />
     </template>
     
     <script>
     var echarts = require('echarts')
     export default {
       name: 'Echart',
       props: {
         className: {
           type: String,
           default: 'chart'
         },
         id: {
           type: String,
           default: 'chart'
         },
         width: {
           type: String,
           default: '100%'
         },
         height: {
           type: String,
           default: '100%'
         },
         options: {
           type: Object,
           default: () => ({})
         }
       },
       data () {
         return {
           chart: null
         }
       },
       watch: {
         options: {
           handler (options) {
             // 设置true清空echart缓存
             this.chart.setOption(options, true)
           },
           deep: true
         }
       },
       created () {
       },
       activated () {
         // 防止 keep-alive 之后图表变形
         if (this.chart) {
           this.chart.resize()
         }
       },
     
       mounted () {
         this.initChart()
         window.addEventListener('resize', () => {
           this.chart.resize()
         })
       },
       methods: {
         initChart () {
           // 初始化echart
           this.chart = echarts.init(this.$el) // 'tdTheme'
           this.chart.setOption(this.options, true)
         }
       }
     }
     </script>
     
     <style></style>
     ```

- 2.1数据 components/Echarts/histogram/index.vue

  ```vue
  <template>
    <!-- 数据层 -->
    <Chart :cdata="cdata" />
  </template>
  
  <script>
  import Chart from '../histogram/charts.vue'
  export default {
    components: {
      Chart
    },
    data () {
      return {
        cdata: {
          xAsisData: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          data: [5, 20, 36, 10, 10, 20]
        }
      }
    },
    computed: {},
    watch: {},
    created () { },
    mounted () { },
    methods: {}
  }
  </script>
  <style lang="less" scoped>
  </style>
  ```

  

- 2.2 业务 components/Echarts/histogram/charts.vue

  ```vue
  <template>
    <!-- 业务层 -->
    <Echart id="Chart"
            :options="options"
            height="100%"
            width="100%" />
  </template>
  
  <script>
  import Echart from '@/common/basicEcharts'
  export default {
    components: {
      Echart
    },
    props: {
      cdata: {
        type: Object,
        default: () => ({})
      }
    },
    data () {
      return {
        options: {}
      }
    },
    watch: {
      cdata: {
        handler (newData) {
          this.echartsChange()
        },
        immediate: true,
        deep: true
      }
    },
    methods: {
      echartsChange () {
        this.options = {
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          legend: {
            data: ['销量']
          },
          xAxis: {
            data: this.cdata.xAsisData
          },
          yAxis: {},
          series: [
            {
              name: '销量',
              type: 'bar',
              data: this.cdata.data
            }
          ]
        }
      }
    }
  }
  </script>
  
  <style lang="less" scoped>
  </style>
  ```

  

- 3.主页面调用

  ```vue
  <template>
    <div>
      <Histogram style="height:40vh;width:30vw;" />
    </div>
  </template>
  <script>
  import Histogram from '@/components/Echarts/histogram'
  export default {
    data () {
      return {
  
      }
    },
    components: {
      Histogram
    },
    mounted () {
    },
    methods: {
    }
  }
  </script>
  <style scoped>
  
  </style>
  ```

  

### 不改变窗口图表自适应

- `npm i element-resize-detector --save`

  ```js
  import elementResizeDetectorMaker from "element-resize-detector";
  // 解决不改变窗口自适应  写在mountd中即可
  let erd = elementResizeDetectorMaker()
      erd.listenTo(this.$refs.map, () => {
          that.$nextTick(() => {
          myChart.resize()
      })
  })
  ```

  

## uniapp



