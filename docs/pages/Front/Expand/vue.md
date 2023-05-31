---
title: vue
date: 2023-05-31 14:21:12
permalink: /pages/ec9a1f/
categories:
  - pages
  - Expand
tags:
  - vue
---

## v-if 和 v-for 那个优先级更高？如果同时出现应该怎么优化更好的性能？

- v-for优先于v-if被解析 源码中判断体现了
- 如果同时出现会浪费性能，为避免这种情况，可以在v-for的外层嵌套template在这层进行判断


## vue组件data为什么必须是一个函数而vue的根实例没有此限制？

- vue组件可能存在多个实例，如果使用对象形式定义data，会导致共用一个data对象，如果状态变更会影响到所有组件实例，函数可以防止实例之间状态污染
- 根实例只有一个，不存在该限制
- 闭包，特性 数据私密性 延长变量的生命周期

## vue中key的作用

- key的作用主要为了高效的更新虚拟dom，减少dom操作量，提高性能, 如果不设置key，可能会引起隐藏的bug


## 对vue组件化的理解

- 组件化开发大幅度提高开发效率，复用性
- 组件包含：页面组件，业务组件，通用组件
- 遵循单向数据流的原则

## vue性能优化方法

- 路由懒加载
- keep-alive缓存页面
- v-for v-if 避免在一个标签中同时使用
- 图片懒加载 v-lazy
- 第三方插件按需引入
- 防抖节流

## MVC 和 MVVM

- MVC
  - Model 保存应用数据层
  - Controller  负责业务逻辑层
  - View 负责视图层

- MVVM
  - Model View ViewModel的缩写，model层代表data数据模型，view代表视图用户界面，viewModel是view和model的桥梁，视图变化会通知viewmodel更新数据，数据变化也会自动更新视图

## vue-fouter 导航钩子 

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

## computed 与watch区别

- computed 用于计算产出新的数据，有缓存
- watch用于监听现有数据，只有改变才会执行操作

## spa与mpa

- 单页面应用 只有一张web页面 公共资源 cssjs只会加载一次 单页面跳转只会刷新局部页面，参用于pc官网
- 多页面应用 跳转会刷新所有资源 公共资源选择性加载 常用于app客户端

## vue生命周期的理解

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

## vue组件的通讯方式

- 父传子：通过props传值 通过refs传值 通过children传值
- 子传父：$emit自定义事件 provide和inject
- 兄弟组件： 利用中央事件总线 bus 的 $emit 和 $on  Vue.prototype.$bus = new Vue()
- 跨级组件通信 Provide、inject
- 没有关系的组件之间通信：vuex 进行数据管理 

## History和Hash模式区别

- vue-router有3个模式、其中history和hash最常用，两者差别主要在显示形式和部署上
- hash模式地址栏显示 #/xxx，部署比较简单
- history更加美观，但是应用部署做特殊配置，否则会出现刷新页面404
- 实际上不管哪种模式，最终都是通过监听popstate事件触发路由跳转处理
- history模式，需要nginx   配置server下的 try_files

## v-if和v-show的区别？

- 都可以控制元素的显示隐藏
- v-show控制元素是通过css的display来让元素显示和隐藏的
- v-if显示隐藏是通过把DOM元素整个添加或删除
- v-if切换效率较低，v-show较高

## 你们为什么要选择vue.js呢，它给你们解决了什么问题?

- vuejs是构建用户界面的渐进式框架，易上手，响应式数据绑定，组件化开发，虚拟DOM技术，便于项目扩展和维护

## props和data的优先级谁高？

- props>methods>data>computed>watch

## vue中数据双向绑定原理了解吗？

```
采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty()来劫持各个属性的 setter,getter,在数据变动时发布消息给订阅者，触发相应监听回调。
```

## 如果keep-alive,第一次进入组件会执行那些生命周期函数？

```
beforeCreate created beforeMont mounted activated
```

## package.json

- 记录项目依赖包的版本号，上箭头：保持大版本不变，取最新的小版本

## npm run serve执行了什么

- 去node_modules/bin中找软链接文件-找对应的文件去执行
