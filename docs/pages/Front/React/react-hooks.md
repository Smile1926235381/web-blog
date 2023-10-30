---
title: react-hooks
date: 2023-10-07 10:17:50
permalink: /pages/418367/
categories:
  - pages
  - Front
  - React
tags:
  - React Hooks
---

## 01. useState

- useState 是异步变更状态的
- 更新对象类型的值，并触发组件的重新渲染，则必须使用**展开运算符**或**Object.assign()**生成一个新对象，用新对象覆盖旧对象，才能正常触发组件的重新渲染

```tsx
const [count, setCount] = useState(0)

const [value, setValue] = useState((prev) => prev+=1)

const [date, setDate] = useState(() => {
   const dt = new Date()
   return { year: dt.getFullYear(), month: dt.getMonth() + 1, day: dt.getDate() }
})
```

## 02.useRef

- 获取 DOM元素的实例

```tsx
import React, { useRef, useImperativeHandle  } from 'react'

export const InputFocus: React.FC = () => {
  // 1. 创建 ref 引用
  const iptRef = useRef<HTMLInputElement>(null)

  const getFocus = () => {
    // 3. 调用 focus API，让文本框获取焦点
    iptRef.current?.focus()
  }

  return (
    <>
      {/* 2. 绑定 ref 引用 */}
      <input type="text" ref={iptRef} />
      <button onClick={getFocus}>点击获取焦点</button>
    </>
  )
}


```

-  forwardRef `React.forwardRef` 会创建一个 React 组件，这个组件能够将其接收到的 ref 属性转发到自己的组件树。

```tsx
const Child = React.forwardRef((props, ref) => {
  // 省略子组件内部的具体实现
})
```

- useImperativeHandle可以自定义暴露给外部组件哪些功能函数或属性

```tsx
const Child = React.forwardRef((_, ref) => {
  useImperativeHandle(ref, () => ({
    count,
    setCount
  }))
})

```

## 03.useEffect

-  如果没有为 useEffect 指定依赖项数组，则 Effect 中的副作用函数，会在函数组件**每次**渲染**完成后**执行
- 如果为 useEffect 指定了一个空数组 `[]` 作为 deps 依赖项，则副作用函数只会在组件首次渲染完成后执行唯一的一次。当组件 rerender 的时候不会触发副作用函数的重新执行
- React 会在组件每次渲染完成后，对比渲染前后的每一个依赖项是否发生了变化，只要任何一个依赖项发生了变化，都会触发副作用函数的重新执行。否则，如果所有依赖项在渲染前后都没有发生变化，则不会触发副作用函数的重新执行。

```tsx
import React, { useState, useEffect } from "react";
export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    console.log(document.querySelector('h2')?.innerText)
  },[count]);
  return (
    <>
      <h2>counter的值：{count}</h2>
      <button onClick={add}>加1</button>
    </>
  );
};
```

| hooks 名称      | 执行时机                         | 执行过程                     |
| :-------------- | :------------------------------- | :--------------------------- |
| useEffect       | 在浏览器重新绘制屏幕**之后**触发 | 异步执行，不阻塞浏览器绘制   |
| useLayoutEffect | 在浏览器重新绘制屏幕**之前**触发 | 同步执行，阻塞浏览器重新绘制 |
