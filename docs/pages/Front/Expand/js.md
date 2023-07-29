---
title: javascript
date: 2023-05-31 14:20:55
permalink: /pages/e9d1d7/
categories:
  - pages
  - Expand
tags:
  - javascript
---

## 数据类型

- 基础类型：String Number Boolean Null undefined Symbol bigInt
- 引用类型 Function Object Array Date RegExp

## 变量和函数声明的提升

- 在js中变量和函数的声明会提升到最顶部执行
- 函数提升高于变量提升
- 函数内部如果使用了var声明相同名称的外部变量，函数将不再向上寻找

## 判断数据类型

- typeof 可以判断 string number object function undefined
- instanceof 可以判断该对象是谁的实例
- Object.prototype.toString.call()

## 闭包

- 闭包是指有权访问另一个函数作用域中的变量的函数（一个函数可以访问另一个函数的变量）

- 用途

  - 能够访问函数定义时所在的词法作用域(阻止其被回收)

  - 私有化变量
  - 模拟块级作用域

- 缺点
  - 会导致函数的变量一直保存在内存中，过多的闭包可能会导致内存泄漏

## 原型、原型链

- 原型链: 当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么他就会去它的原型对象里找这个属性
- 原型是函数特有的
- 数组对象只有原型链
- 就近原则

## JSON.parse(JSON.stringify) 深拷贝事项

- 如果json里有时间对象，则序列化会将时间对象转换为字符串格式
- 如果json里有function、undefined则序列化会将function、undefined 丢失
- 如果json里有NaN、Infinity和-Infinity，则序列化后会变成null
- 如果对象中存在循环引用的情况将抛出错误
- 如果json里有对象是由构造函数生成的，则序列化的结果会丢弃对象的 constructor

## new

- 首先创建了一个新的空对象
- 设置原型，将对象的原型设置为函数的prototype对象
- 让函数的this指向这个对象，执行构造函数的代码
- 判断函数的返回值类型，如果是值类型，返回创建的对象，如果是引用类型，返回引用类型的对象

## 继承（es6）

- 原型链方式继承
- 借用构造函数
- 组合继承
- 原型继承
- 寄生式继承
- 寄生式组合继承

## null和undefined

- undefined  输出是原始数据类型  
  - 1.已声明，未赋值
  - 2.对象某个属性不存在
  - 3.函数调用少传参
  - 4.函数默认返回值
- null 输出的是object类型
  - 1.给值赋值为null，手动释放内存
  - 2.作为函数参数(此参数不是对象)
  - 3.原型链的顶端

## this

- 在函数调用中，this指向调用它的对象。
- 在构造函数中，this指向实例化对象。
- 在箭头函数中，没有this
- 在事件体中，this指向事件源
- 其他情况，this指向window

## 箭头函数和普通函数的区别

- 不可当作构造函数，不可使用new命令，否则会抛出异常
- 不可使用arguments对象，由Rest参数代替

## ==和===区别

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

## 数组方法

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

## 数组去重

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

```

## apply bind call

```
相同点 都可以改变当前作用域中的this指向
不同点： 1.apply 和bind call 接受的参数不同，apply([])  2.bind有返回值
apply 可以求给定数组的最大值和最小值 let max = Math.max.apply(null,arr)
call 可以判断数据类型  类数组转换数组 let type = Object.prototype.toString.call(arr)
```

## 求数组中的最大值

```js
1.通过Math.max.apply(null,arr)
2.通过 reduce方法 let max = arr.reduce((prev,current) => return prev>current?prev:current)
3.通过数组sort方法 let max = arr.sort(function(a,b){return a-b})
```

## for..in  for..of区别

```
for..in 用于可枚举数据，如对象，数组，字符串，得到key

for..of 用于可迭代数据，如数组，字符串，Map，Set,得到value
```

## 函数防抖节流

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

## let 和const区别

- let const 命令不存在变量提升，不允许重复声明
- const定义的是常量，不能修改，如定义的是对象，可修改对象内部的数据

## es6新增特性

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

## 同源策略

- 同源指 域名，协议，端口号都相等

## 宏任务微任务

- 异步-宏任务：不需要立即连贯执行，微任务：需要立即连贯执行

## CommonJS和ES6模块区别

- commonJs模块输出是值的拷贝  es6模块输出是值的引用

- commonjs模块是运行时加载 es6模块是编译时输出接口

- commonjs模块的require()是同步加载模块 es6模块 import是异步加载

## http与https

- HTTPS协议需要CA证书,费用较高;而HTTP协议不需要
- HTTP协议是超文本传输协议,信息是明文传输的,HTTPS则是具有安全性的SSL加密传输协议;
- 使用不同的连接方式,端口也不同,HTTP协议端口是80,HTTPS协议端口是443;
- HTTP协议连接很简单,是无状态的;HTTPS协议是具有SSL和HTTP协议构建的可进行加密传输、身份认证的网络协议,比HTTP更加安全

## DNS域名解析

- 客户端输入ip地址-->浏览器DNS缓存-->操作系统DNS缓存-->本地HOST文件-->本地DNS服务器缓存--根服务器--com域名服务器--sixue权威域名服务器--返回客户端

## 工厂模式

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

  

## 单例模式

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

  

## 代理模式

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

## 发布订阅者模式

- 发布者 订阅者 第三方

## 观察者模式

- 一个主题，一个观察者。主题发生变化，就触发了观察者的执行（没有媒介）

## 装饰器模式

- 保证原有函数的功能不变的同时，增加一个新的功能（AOP面向切面编程)
- 场景 ES和TypeScript的Decorator语法
- 类装饰器，函数



## 首屏优化的方案，分别从代码、网络和缓存说一下

1. 代码优化：    - 压缩代码：通过去除空格、注释、无用代码等方式，减小文件大小，加快下载速度。    - 懒加载：将页面中非首屏内容延迟加载，只在用户需要时再加载，减少首屏所需资源量。    - 代码分割：将代码按需拆分成多个模块，只加载当前首屏所需的模块，减少不必要的加载。    - 预加载关键资源：提前加载首屏所需的关键资源，以减少网络请求的延迟时间。
2. 网络优化：    - 压缩资源：使用压缩算法对静态资源进行压缩，减小文件大小，提高下载速度。    - 使用CDN加速：将静态资源部署到全球各地的CDN节点，使用户可以从离其最近的节点获取资源，加快加载速度。    - HTTP缓存：设置合适的缓存策略，使浏览器可以缓存静态资源，减少重复请求，提高加载速度。
3. 缓存优化：    - 使用浏览器缓存：设置合适的缓存头信息，使浏览器可以缓存页面和静态资源，减少后续请求的时间和带宽消耗。    - 使用缓存策略：根据资源的特性，选择合适的缓存策略，如根据文件内容的变化设置版本号或文件哈希，以确保客户端在资源更新时能够获取最新版本。 
