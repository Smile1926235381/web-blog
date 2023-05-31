---
title: react
date: 2023-05-31 14:21:23
permalink: /pages/791f03/
categories:
  - pages
  - Expand
tags: react
  - 
---

## class类式写法的生命周期

- componentDidMount  挂载阶段 会执行  comstructor render componentDidMount
- componentDidUpdate 更新阶段 会执行 render conponentDidUpdate
- componentWillUnMount 卸载阶段  卸载完成之前

## state与props区别

- prop是外部组件传入的数据，一般是父组件传到子组件的数据
- props里面的数据不能修改，只能通过绑定父组件的方法来修改props里面的值，然后再传递子组件
- state是组件私有变量，主要用于组件的保存，控制以及修改自己的状态，不能通过外部的访问以及修改，只能通过内部的this.setState方法修改state里面的内容

## react如果操作dom

- 通过refs实现对dom的操作

## react在setState之后执行那些操作

- setState基本过程是，在执行setState之后，会执行 shouldComponentUpdate、conpoentWillUpdate、render、componentDidUpdate  在执行 render的时候 this.state才会被更新

## vue与react区别

- react是严格上针对mvc的view层，vue则是mvvm模式
- 操作dom的方式不同，vue是通过指令操作dom，而react通过js进行操作
- 数据绑定不同，vue实现的是双向绑定，而react是单向数据流
- react的state内容是不可以直接修改，需要通过setState去修改
- react是JSX渲染模板，而Vue是通过一种拓展的HTML语法进行渲染
