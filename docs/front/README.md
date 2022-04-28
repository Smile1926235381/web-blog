---
title: 前端知识总结
sidebar: auto
sidebarDepth: 2
---

# 前端知识总结

::: tip 前端

愿天下没有难学的技术

:::

## html

## css

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

### 函数防抖节流

```html
<!DOCTYPE html>
<html lang="zh">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title></title>
	</head>
	<body>
		<input type="text" id="input" />
	</body>
	<script>
		// 函数防抖
		function debounce(fn, Interval) {
			let timer;
			return (event) => {
				if (timer) {
					return false
				}
				timer = setTimeout(() => {
					clearTimeout(timer)
					timer = null
					fn(event)
				}, Interval)
			}
		}
		window.onresize = debounce(function(event) {
			console.log(event)
		}, 1000)

		// 节流
		function throttle(fn, Interval) {
			let timer
			return () => {
				clearTimeout(timer)
				timer = setTimeout(fn, Interval)
			}
		}
		let input = document.getElementById('input')
		input.oninput = throttle(function(event) {
			console.log(input.value)
		}, 1000)
	</script>
</html>


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

## webpack

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



