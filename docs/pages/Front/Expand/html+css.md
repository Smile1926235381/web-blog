---
title: html+css
date: 2023-05-31 14:19:44
permalink: /pages/d617e4/
categories:
  - pages
  - Expand
tags: html+css
  - 
---

## 网页生成过程

- HTML被HTML解析器解析成DOM树
- css则被css解析器解析成CSSOM树
- 结合dom树和cssom树生成渲染树
- 生成布局，将布局绘制屏幕上

## css的盒模型

- 在HTML页面中所有的元素都可以看成一个盒子
- 盒子的组成：内容conttent、内边距padding、边框border、外边距margin
- 盒模型类型：
  - 标准盒模型 margin+border+padding+content
  - IE盒模型 margin+content(border+padding)
- 控制盒模型的模式：
  - box-sizing:content-box(默认值，标准盒模型)
  - box-sizing:border-box(IE盒模型)

## 重排（回流）

- 当DOM的变化影响到元素的几何信息，浏览器需要重新计算元素的几何属性，将其安放在正确位置，这个过程叫重排 （添加或者删除可见DOM元素，元素尺寸改变）

## 重绘

- 当一个元素外观发生改变，没有改变布局，这个过程叫重绘  （color,background）

## BFC

- BFC （块级格式化上下文），是一个独立的渲染区域，让处于 BFC 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。
- 如何创建BFC?
  - 方法①：float 的值不是none
  - 方法②：position的值不是 static 或者relative
  - 方法③：display的值是inline-block flex
  - 方法④：overflow:hidden

- BFC的其它作用
  - BFC可以取消盒子margin 塌陷
  - BFC可以阻止元素被浮动的元素覆盖

## px em rem vw vh

- px 绝对长度单位 1px = 1个像素 
- em 相对长度单位 相对于当前元素内的字体尺寸 
- rem 是css3新增的一个相对单位 基于html元素的字体大小来决定 
- vh vw 是相对于视口的长度单位 1vh等于视口宽度的1% 1vw等于视口宽度的1%

## 水平垂直居中

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

- offsetHeight offsetWidth: border + padding + content
- clientHeight clientWidth: padding + content
- scrollHeight scrollWidth: padding + 实际内容尺寸
