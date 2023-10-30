---
title: ES6
date: 2022-09-21 09:51:01
permalink: /pages/30f9ae/
categories:
  - pages
  - JavaScript
tags:
  - ES6
---

# es6

## 合并数据

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

## if 条件判断

```js
const condition = [1,2,3,4];

if( condition.includes(type) ){
   //...
}

等同于 if(type==1||type==2){}
```

## 数组扁平化

```js
const deps = {
    '采购部':[1,2,3],
    '人事部':[5,8,12],
    '行政部':[5,14,79],
    '运输部':[3,64,105],
}
let member = Object.values(deps).flat(Infinity);
```

## 输入框非空的判断

```js
if(value !== null && value !== undefined && value !== ''){
    //...
}
等同于
if((value??'') !== ''){
  //...
}
```

## 判断数组是否为空

```js
const isNotEmpty = arr => Array.isArray(arr) && arr.length > 0

isNotEmpty([1, 2, 3]) //true
```

## 获取两个整数之间的随机整数

```js
const random  = (min,max) => Math.floor(Math.random * (max-min+1) +min)
random(1,50)
```

## 求一组数的平均值

```js
const average = (...args) => args.reduce((a,b) => a+b)/args.length

average(1,2,3,4,5)
```

## 解构赋值

- 注意解构的对象不能为`undefined`、`null`

```js
const {a,b,c,d,e} = obj || {};
```

- 创建的变量名和对象的属性名不一致

```js
const {a:a1} = obj;
console.log(a1);// 1
```

## 获取对象属性值

```js
const name = obj?.name
```

