---
title: JavaScript
date: 2022-09-01 09:46:23
permalink: /pages/JavaScript/
categories:
  - pages
  - JavaScript
tags:
  - JavaScript
---
&emsp;&emsp;JavaScript（通常缩写为JS）是一种高级的、解释型的编程语言。JavaScript是一门基于原型、函数先行的语言，是一门多范式的语言，它支持面向对象编程，命令式编程，以及函数式编程。它提供语法来操控文本、数组、日期以及正则表达式等，不支持I/O，比如网络、存储和图形等，但这些都可以由它的宿主环境提供支持。它已经由ECMA（欧洲电脑制造商协会）通过ECMAScript实现语言的标准化。它被世界上的绝大多数网站所使用，也被世界主流浏览器（Chrome、IE、Firefox、Safari、Opera）支持。

## 数组返回值
```
原数组不改变： 
content   slice   join   toString   map   every   some   filter  reduce  map reduceRight

原数组会改变： 
push pop shift unshift  sort  splice  reverse
```

## 数组去重

```js
1. Array.form(new Set())    [...new Set()]

2. 双层for循环去重
let arr = [1,1,1,2,45,6,2,4,3,2,1]

for(let i = 0;i<arr.length-1;i++) {
    for(let j = i+1;j<arr.length;j++) {
        if(arr[j] === arr[i]) {
            arr.splice(j,1)
            j--
        }
    }
}
```

## 数组中最大值

```js
1.通过Math.max.apply(null,arr)

2.通过 reduce方法 let max = arr.reduce((prev,current) => return prev>current?prev:current)

3.通过数组sort方法 let max = arr.sort(function(a,b){return a-b})
```

## 防抖

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

## 节流

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

