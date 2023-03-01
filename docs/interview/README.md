---
xtitle: 前端面试题
sidebar: auto
sidebarDepth: 2
---

# 前端面试题

::: tip 前端

人生 就是一次次幸福的相聚，夹杂着一次次伤感的别离

:::

## 自我介绍

```
面试官您好，我叫赵培友，从事前端开发大约3年半左右，近期做的项目是实验室管理系统，主要使用的技术栈VUE Echarts Elementui, 也了解学习了vue3和react，以上就是我的自我介绍，谢谢
```

## html+css

### 网页生成过程

- HTML被HTML解析器解析成DOM树
- css则被css解析器解析成CSSOM树
- 结合dom树和cssom树生成渲染树
- 生成布局，将布局绘制屏幕上

### css的盒模型

- 在HTML页面中所有的元素都可以看成一个盒子
- 盒子的组成：内容conttent、内边距padding、边框border、外边距margin
- 盒模型类型：
  - 标准盒模型 margin+border+padding+content
  - IE盒模型 margin+content(border+padding)
- 控制盒模型的模式：
  - box-sizing:content-box(默认值，标准盒模型)
  - box-sizing:border-box(IE盒模型)

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

- 基础类型：String Number Boolean Null undefined Symbol bigInt
- 引用类型 Function Object Array Date RegExp

### 变量和函数声明的提升

- 在js中变量和函数的声明会提升到最顶部执行
- 函数提升高于变量提升
- 函数内部如果使用了var声明相同名称的外部变量，函数将不再向上寻找

### 判断数据类型

- typeof 可以判断 string number object function undefined
- instanceof 可以判断该对象是谁的实例
- Object.prototype.toString.call()

### 什么是闭包?闭包解决了什么问题？闭包会导致什么问题呢？

- 闭包是指有权访问另一个函数作用域中的变量的函数（一个函数可以访问另一个函数的变量）

- 用途

  - 能够访问函数定义时所在的词法作用域(阻止其被回收)

  - 私有化变量
  - 模拟块级作用域

- 缺点
  - 会导致函数的变量一直保存在内存中，过多的闭包可能会导致内存泄漏

### 原型、原型链

- 原型链: 当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么他就会去它的原型对象里找这个属性
- 原型是函数特有的
- 数组对象只有原型链
- 就近原则

### JSON.parse(JSON.stringify) 深拷贝事项

- 如果json里有时间对象，则序列化会将时间对象转换为字符串格式
- 如果json里有function、undefined则序列化会将function、undefined 丢失
-  如果json里有NaN、Infinity和-Infinity，则序列化后会变成null
-  如果对象中存在循环引用的情况将抛出错误
-  如果json里有对象是由构造函数生成的，则序列化的结果会丢弃对象的 constructor

### new

- 1. 首先创建了一个新的空对象
- 2. 设置原型，将对象的原型设置为函数的prototype对象
- 3. 让函数的this指向这个对象，执行构造函数的代码
- 4. 判断函数的返回值类型，如果是值类型，返回创建的对象，如果是引用类型，返回引用类型的对象

### 继承（es6）

- 原型链方式继承
- 借用构造函数
- 组合继承
- 原型继承
- 寄生式继承
- 寄生式组合继承

### null和undefined

- undefined  输出是原始数据类型  
  - 1.已声明，未赋值
  - 2.对象某个属性不存在
  - 3.函数调用少传参
  - 4.函数默认返回值
- null 输出的是object类型
  - 1.给值赋值为null，手动释放内存
  - 2.作为函数参数(此参数不是对象)
  - 3.原型链的顶端

### this

- 在函数调用中，this指向调用它的对象。
- 在构造函数中，this指向实例化对象。
- 在箭头函数中，没有this
- 在事件体中，this指向事件源
- 其他情况，this指向window

### 箭头函数和普通函数的区别

- 不可当作构造函数，不可使用new命令，否则会抛出异常
- 不可使用arguments对象，由Rest参数代替

### ==和===区别

- ==是非严格意义上的相等  值相等就相等
- === 是严格意义上的相等，会比较两边的数据类型和值大小

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
1. map:遍历数组，返回组成的新数组，映射
2. forEach: 无法break;
3. filter: 过滤
4. some : 有一项返回true则为true
5. every : 有一项返回false，则整体返回false
6. join : 通过指定连接生成字符串
7. push/pop : 末尾推入和弹出，返回推入/弹出项
8. unshift/shift : 头部推入和弹出，改变原数组，返回操作项
9. sort(fn) / reverse : 排序/反转，改变原数组
10. concat : 连接数组，浅拷贝
11. slice(start,end) : 返回截断后的新数组，不改变原数组
12. splice(start,number,value) 
13. indexOf / lastIndexOf(value,formIndex) : 查找数组项，返回对应下标
14. reduce / reduceRight

原数组不改变： 
concat   slice   join   toString   map   every   some   filter  reduce  map reduceRight

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

- 防抖 （在固定时间内，事件只允许触发一次）

  ```js
  <input type="text" id="input">
  
  let input = document.getElementById('input')
    input.addEventListener('input', debounce(() => {
      console.log('防抖执行')
    }, 2000))
    // 防抖 在固定时间内，事件只允许触发一次
    function debounce (fn, wait) {
      let timer = null
      return args => {
        if (timer) clearTimeout(timer)
        timer = setTimeout(fn, wait)
      }
    }
  ```
  
- 节流 （在一定时间内的多个事件合成一个）

  ```js
   <div class="box"></div>
  
  let box = document.querySelector('.box')
    box.addEventListener('touchmove', throttle(() => {
      console.log('节流事件')
    }, 2000))
    // 节流 在一定时间内的多个事件合成一个
    function throttle (event, time) {
      let timer = null
      return () => {
        if (!timer) {
          timer = setTimeout(() => {
            event()
            timer = null
          }, time)
        }
      }
    }
  ```

### let 和const区别

- let const 命令不存在变量提升，不允许重复声明
- const定义的是常量，不能修改，如定义的是对象，可修改对象内部的数据

### es6新增特性

- 新增symbol类型，表示独一无二的值
- const/let 声明变量，不可重复声明，块级作用域，暂时性死区
- 解构赋值
- 模板字符串
- 扩展运算符
- 箭头函数
- class
- Proxy
- Promise

## Ajax

### 简单手写

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

### 同源策略

- 同源指 域名，协议，端口号都相等



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
- 闭包，特性 数据私密性 延长变量的生命周期

### 3. vue中key的作用

- key的作用主要为了高效的更新虚拟dom，减少dom操作量，提高性能, 如果不设置key，可能会引起隐藏的bug


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
- 防抖节流

### 6.MVC 和 MVVM

- MVC
  - Model 保存应用数据层
  - Controller  负责业务逻辑层
  - View 负责视图层

- MVVM
  - Model View ViewModel的缩写，model层代表data数据模型，view代表视图用户界面，viewModel是view和model的桥梁，视图变化会通知viewmodel更新数据，数据变化也会自动更新视图

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
- watch用于监听现有数据，只有改变才会执行操作

### 9. spa与mpa

- 单页面应用 只有一张web页面 公共资源 cssjs只会加载一次 单页面跳转只会刷新局部页面，参用于pc官网
- 多页面应用 跳转会刷新所有资源 公共资源选择性加载 常用于app客户端

### 10.vue生命周期的理解

- create阶段：vue实例被创建
  - beforeCreate:创建前，此事data和methods中的数据还没有初始化
  - created：创建后，data有值，未挂载
- mount阶段：vue实例被挂载到真实dom节点
  - beforeMount: 可以发起服务器请求，取数据
  - mounted：此时可以操作Dom
- update阶段：当vue实例里面的data发生变化时，触发组件重新渲染
  - beforeUpdate:更新前
  - updated：更新后
- destroy：vue实例被销毁
  - beforeDestroy: 实例被销毁前，此时可以手动销毁一些方法
  - destroyed:销毁后
- 父子执行顺序
  - 父：beforeCreate->父created->父beforeMount
  - 子：beforeCreate->子created->子beforeMount ->子mounted ->父mounted

### 11.vue组件的通讯方式

- 父传子：通过props传值 通过refs传值 通过children传值
- 子传父：$emit自定义事件 provide和inject
- 兄弟组件： 利用中央事件总线 bus 的 $emit 和 $on  Vue.prototype.$bus = new Vue()
- 跨级组件通信 Provide、inject
-  没有关系的组件之间通信：vuex 进行数据管理 

### 12. History和Hash模式区别

- vue-router有3个模式、其中history和hash最常用，两者差别主要在显示形式和部署上
- hash模式地址栏显示 #/xxx，部署比较简单
- history更加美观，但是应用部署做特殊配置，否则会出现刷新页面404
- 实际上不管哪种模式，最终都是通过监听popstate事件触发路由跳转处理
- history模式，需要nginx   配置server下的 try_files

### 13. v-if和v-show的区别？

- 都可以控制元素的显示隐藏
- v-show控制元素是通过css的display来让元素显示和隐藏的
- v-if显示隐藏是通过把DOM元素整个添加或删除
- v-if切换效率较低，v-show较高

### 14.你们为什么要选择vue.js呢，它给你们解决了什么问题?

- vuejs是构建用户界面的渐进式框架，易上手，响应式数据绑定，组件化开发，虚拟DOM技术，便于项目扩展和维护

### 15.props和data的优先级谁高？

- props>methods>data>computed>watch

### 16..vue中数据双向绑定原理了解吗？

```
采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty()来劫持各个属性的 setter,getter,在数据变动时发布消息给订阅者，触发相应监听回调。
```

### 17.如果假如keep-alive,第一次进入组件会执行那些生命周期函数？

```
beforeCreate created beforeMont mounted activated
```

### 18.package.json

- 记录项目依赖包的版本号，上箭头：保持大版本不变，取最新的小版本

### 19.npm run serve执行了什么

- 去node_modules/bin中找软链接文件-找对应的文件去执行

## react

### class类式写法的生命周期

- componentDidMount  挂载阶段 会执行  comstructor render componentDidMount
- componentDidUpdate 更新阶段 会执行 render conponentDidUpdate
- componentWillUnMount 卸载阶段  卸载完成之前

### state与props区别

- prop是外部组件传入的数据，一般是父组件传到子组件的数据
- props里面的数据不能修改，只能通过绑定父组件的方法来修改props里面的值，然后再传递子组件
- state是组件私有变量，主要用于组件的保存，控制以及修改自己的状态，不能通过外部的访问以及修改，只能通过内部的this.setState方法修改state里面的内容

### react如果操作dom

- 通过refs实现对dom的操作

### react在setState之后执行那些操作

- setState基本过程是，在执行setState之后，会执行 shouldComponentUpdate、conpoentWillUpdate、render、componentDidUpdate  在执行 render的时候 this.state才会被更新

### vue与react区别

- react是严格上针对mvc的view层，vue则是mvvm模式
- 操作dom的方式不同，vue是通过指令操作dom，而react通过js进行操作
- 数据绑定不同，vue实现的是双向绑定，而react是单向数据流
- react的state内容是不可以直接修改，需要通过setState去修改
- react是JSX渲染模板，而Vue是通过一种拓展的HTML语法进行渲染

## http与https

```
1、HTTPS协议需要CA证书,费用较高;而HTTP协议不需要
2、HTTP协议是超文本传输协议,信息是明文传输的,HTTPS则是具有安全性的SSL加密传输协议;
3、使用不同的连接方式,端口也不同,HTTP协议端口是80,HTTPS协议端口是443;
4、HTTP协议连接很简单,是无状态的;HTTPS协议是具有SSL和HTTP协议构建的可进行加密传输、身份认证的网络协议,比HTTP更加安全
```

### 1.工厂模式

- 用一个函数来创建实例，返回new创建的实例(隐藏了new关键字)

- 场景：

  - jQuery的$函数  
  - react createElement函数(jsx语法底层函数)

  ```
  function $(...rest) {
  	return new Foo(...rest)
  }
  $("xxx1","xxx2")
  ```

  

## 2. 单例模式

- 是一个全局。唯一的实例(不论怎么创建实例都是一个)

- vue项目中的实例

- Node项目中的App实例

- vuex react-rudex中的store

- 全局唯一一个组件 弹出框 模态框

  ```
  class Dog {
  	constructor(){}
  	static getInstance() {
  		return Dog._instance
  	}
  }
  
  let d3 = Dog.getInstance()
  let d4 = Dog.getInstance()
  d3===d4
  ```

  

## 3.代理模式

- Proxy 访问一个对象属性之前先做一个拦截（做一些额外的业务和逻辑操作）
- vue3响应式原理

```
let obj = {
	name: "vue",
	age:9
}

let obj2 = new Proxy(obj,{
	get(target,property) {
		return target[property]
	}
	set(target,property,newVal) {
		target[property] = newVal
	}
})
obj2.age = 10
```

## 4.发布订阅者模式

- 发布者 订阅者 第三方

## 5.观察者模式

- 一个主题，一个观察者。主题发生变化，就触发了观察者的执行（没有媒介）

## 6.装饰器模式

- 保证原有函数的功能不变的同时，增加一个新的功能（AOP面向切面编程)
- 场景 ES和TypeScript的Decorator语法
- 类装饰器，函数

### 7.你在项目中遇到过哪些大坑，那当时是怎么解决的?

```
在做ocr识别的时候，遇到app端，需要下载把识别的内容下载txt文件，由于当时uniapp方法支持度有限，通过文件写入本地的方式解决的
```

### 8.职业规划是什么样的呢？

- 准备通过近两年学习下java技术

### 9.你对我们这边还有什么问题吗?

```
请问目前团队有多少人，前端有多少人
请问项目中使用的是什么技术
请问工作汇报的方式，是每天日报还是周报
```

