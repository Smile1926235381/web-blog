---
title: ts
date: 2023-08-14 16:35:44
permalink: /pages/343488/
categories:
  - pages
  - Front
  - JavaScript
tags:
  - typescript
---

## TS中 type和interface的区别

- type：类型别名，为类型创建一个新名称。它并不是一个类型，只是一个别名。

- interface：接口，TS 设计出来主要用于定义对象类型，可以对对象的形状进行描述。

- 区别

- 1.interface可以重复声明，type定义后不能重复声明

  ```typescript
  interface demo1 {
      name: string,
      age: number
  }
  
  interface demo1 {
      address: string
  }
  
  let obj:demo1 = {
      name: "张三",
      age:16,
      address: "china"
  }
  
  // 会报错
  type demo2 = {
      name: string,
      age: number
  }
  
  type demo2 = {
      address: string
  }
  
  let ccc:demo2 = {
      name: "wwww",
      age: 12
  }
  ```

  

- 2.interface可以通过“extends”来继承接口，这样既高效又不用重新定义。而type只能通过&来实现类似于继承的功能

  ```typescript
  interface demo1 {
      name: string,
      age: number
  }
  
  interface demo2 extends demo1 {
      address: string
  }
  
  let ddd:demo2 = {
      name: "www",
      age: 18,
      address: "beijing"
  }
  
  type test1 = {
      name: string,
      age: number
  }
  
  type test2 = {
      address: string
  }&test1
  
  let ccc:test2 = {
      name: "lilei",
      age: 49,
      address: "shanghai"
  }
  ```

  

- 3.type 能够表示非对象类型， 而 `interface` 则只能表示对象类型。

  - 可以定义基本类型别名， type stringType = string

