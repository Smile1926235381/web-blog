---
title: 前端面试题
sidebar: auto
sidebarDepth: 2
---

# 前端面试题

::: tip 前端

人生 就是一次次幸福的相聚，夹杂着一次次伤感的别离

:::

## html+css

### 网页生成过程

- HTML被HTML解析器解析成DOM树
- css则被css解析器解析成CSSOM树
- 结合dom树和cssom树生成渲染树
- 生成布局，将布局绘制屏幕上

### 重排（回流）

- 当DOM的变化影响到元素的几何信息，浏览器需要重新计算元素的几何属性，将其安放在正确位置，这个过程叫重排 （添加或者删除可见DOM元素，元素尺寸改变）

### 重绘

- 当一个元素外观发生改变，没有改变布局，这个过程叫重绘  （color,background）

### BFC

- BFC （块级格式化上下文），是一个独立的渲染区域，让处于 BFC 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。
- 如何创建BFC?
  - 方法①：float 的值不是none
  - 方法②：position的值不是 static 或者relative
  - 方法③：display的值是inline-block flex
  - 方法④：overflow:hidden

- BFC的其它作用
  - BFC可以取消盒子margin 塌陷
  - BFC可以阻止元素被浮动的元素覆盖

### px em rem vw vh

```
px 绝对长度单位 1px = 1个像素 
em 相对长度单位 相对于当前元素内的字体尺寸 
rem 是css3新增的一个相对单位 基于html元素的字体大小来决定 
vh vw 是相对于视口的长度单位 1vh等于视口宽度的1% 1vw等于视口宽度的1%
```

### 实现水平垂直居中

- 定宽高2种  

  ```css
  1. 父元素 position: relative; 子元素 position: absolute; left:50%;top:50%;margin-left:-100px;margin-top:-100px;
   
  2. 父元素 position: relative; 子元素 position: absolute; left:0;right:0;top:0;bottom:0;margin:auto;
  ```

- 不定宽高3种

  ```css
  3. 父元素 display: flex;justify-content: center;align-items: center;
  
  4. 父元素 position: relative; 子元素 position: absolute; left:50%;top:50%;transform: translate(-50%, -50%);
  
  5. 父元素 display: table-cell;vertical-align: middle;text-align: center; 子元素 display: inline-block;
  ```

### offset client scroll

```
offsetHeight offsetWidth: border + padding + content
clientHeight clientWidth: padding + content
scrollHeight scrollWidth: padding + 实际内容尺寸
```

## javascript

### 数据类型

- 基础类型：string number boolean null undefined symbol BigInt
- 引用类型 function object array

### 判断数据类型

- typeof 可以判断 string number object function undefined
- instanceof 可以判断该对象是谁的实例

### 闭包

- 闭包是指有权访问另一个函数作用域中的变量的函数（一个函数可以访问另一个函数的变量）
- 用途
  - 私有化变量
  - 模拟块级作用域

- 缺点
  - 会导致函数变量一直保存在内存中，过多闭包会导致内存泄露

### 创建对象的方式

- 字面量的方式创建  let obj = {}

- 工厂模式创建对象

  ```js
  function createObject(name,age) {
      let obj = new Object()
      obj.name = name;
      obj.age=age;
      return obj
  }
  ```

- 构造函数创建对象

  ```js
  function createObject(name,age) {
      this.name = name;
      this.age = age
  }
  ```

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

### apply bind call

```
相同点 都可以改变当前作用域中的this指向
不同点： 1.apply 和bind call 接受的参数不同，apply([])  2.bind有返回值
apply 可以求给定数组的最大值和最小值 let max = Math.max.apply(null,arr)
call 可以判断数据类型  类数组转换数组 let type = Object.prototype.toString.call(arr)
```

### 求数组中的最大值

```js
1.通过Math.max.apply(null,arr)
2.通过 reduce方法 let max = arr.reduce((prev,current) => return prev>current?prev:current)
3.通过数组sort方法 let max = arr.sort(function(a,b){return a-b})
```

### for..in  for..of区别

```
for..in 用于可枚举数据，如对象，数组，字符串，得到key

for..of 用于可迭代数据，如数组，字符串，Map，Set,得到value
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

## Ajax

- 简单手写

  ```js
  function ajax(url,successFn) {
      const xhr = new XMLHttpRequest()
      xhr.open('GET',url,false)
      xhr.onreadystatechange = function() {
        	if(xhr.readyState === 4) {
              if(xhr.status === 200) {
             	 	successFn(xhr.responentText)
              }
      	}
      }
      xhr.send(null)
  }
  
  ```

## Node

### CommonJS和ES6模块区别

- commonJs模块输出是值的拷贝  es6模块输出是值的引用

- commonjs模块是运行时加载 es6模块是编译时输出接口

- commonjs模块的require()是同步加载模块 es6模块 import是异步加载

## webpack

## vue

### 1.v-if 和 v-for 那个优先级更高？如果同时出现应该怎么优化更好的性能？

- v-for优先于v-if被解析 源码中判断体现了

- 如果同时出现会浪费性能，为避免这种情况，可以在v-for的外层嵌套template在这层进行判断


### 2.vue组件data为什么必须是一个函数而vue的根实例没有此限制？

- vue组件可能存在多个实例，如果使用对象形式定义data，会导致共用一个data对象，如果状态变更会影响到所有组件实例，函数可以防止实例之间状态污染
- 根实例只有一个，不存在该限制

### 3. vue中key的作用

- key的作用主要为了高效的更新虚拟dom，减少dom操作量，提高性能


### 4.对vue组件化的理解

- 组件化开发大幅度提高开发效率，复用性
- 组件包含：页面组件，业务组件，通用组件
- 遵循单向数据流的原则

### 5.vue性能优化方法

- 路由懒加载
- keep-alive缓存页面
- v-for v-if 避免在一个标签中同时使用
- 图片懒加载 v-lazy
- 第三方插件按需引入

### 6.MVC 和 MVVM

- MVC
  - Model 保存应用数据层
  - Controller  负责业务逻辑层
  - View 负责视图层

- MVVM
  - Model View ViewModel的缩写， View代表视图层 model道标数据层 vm是view和model的桥梁，视图变化时会通知viewModel层改变数据

### 7.vue-fouter 导航钩子 

- 全局钩子函数
  - beforeEach（to,from,next）  路由改变前调用
  - to: 即将进去的目标路由对象
  - from: 当前正要离开的路由对象
  - next 路由控制
  - afterEach(to, form) 路由改变后的钩子

- 路由配置中的导航钩子
  - beforeEnter(to,from,next)

- 组件内的钩子函数
  - beforeRouteEnter
  - beforeRouteUpdate
  - beforeRouteLeave

### 8.  computed 与watch区别

- computed 用于计算产出新的数据，有缓存
- watch用于监听现有数据

### 9. spa与mpa

- 单页面应用 只有一张web页面 公共资源 cssjs只会加载一次 单页面跳转只会刷新局部页面，参用于pc官网
- 多页面应用 跳转会刷新所有资源 公共资源选择性加载 常用于app客户端

## react

### class类式写法的生命周期

- componentDidMount  挂载阶段 会执行  comstructor render componentDidMount
- componentDidUpdate 更新阶段 会执行 render conponentDidUpdate
- componentWillUnMount 卸载阶段  卸载完成之前
