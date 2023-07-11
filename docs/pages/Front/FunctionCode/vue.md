---

title: vue
date: 2023-07-11 11:02:22
permalink: /pages/dfcc9a/
categories:
  - pages
  - Front
  - FunctionCode
tags: vue
  - 
---
## 记住账号密码

```vue
<template>
	<el-checkbox v-model="rememberPwd">记住密码</el-checkbox>
</template>
```

```js
npm install --save js-base64
```

```js
import { Base64 } from 'js-base64';
data() {
	return {
		rememberPwd: false,
	}
},
mounted() {
    let username = localStorage.getItem("username");
    if (username) {
      this.loginForm.username = localStorage.getItem("username");
      this.loginForm.password = Base64.decode(localStorage.getItem("password")); 
      this.rememberPwd = true;
    }
 },
 methods: {
    handleLogin() {
    	if (this.rememberPwd) {
            let password = Base64.encode(this.loginForm.password); 
            localStorage.setItem("username", this.loginForm.username);
            localStorage.setItem("password", password);
          } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
         }
    }
 }
```

## vue通过js修改元素样式

1. 给元素定义ref 属性

```vue
 <el-button ref="btnClick"></el-button>
```

2. 通过js 方法修改元素的样式  修改较多样式时可使用cssText

```js
this.$refs.btnClick.$el.style.cssText = 'background-color:#1F2429;width:66px';
```

3. 修改单一样式时可直接使用样式名称

```js
this.$refs.btnClick.$el.style.color = 'red';
```

## vue-seamless-scroll滚动使用

```
npm install vue-seamless-scroll --save
```

```vue
<vue-seamless-scroll :data="noticeList" class="warp" :class-option="classOption">
    <div v-for="(item, index) in noticeList" :key="index">
		内容
    </div>
</vue-seamless-scroll>
```

```js
import vueSeamlessScroll from "vue-seamless-scroll"

data() {
	return {
		classOption: {
           step: 0.3,
        },
        noticeList: []
	}
},
components: {
	vueSeamlessScroll
},
```

```css
.warp {
    height: 160px;
    overflow: hidden;
    width: 100%;
    padding: 0 20px;
}
```

