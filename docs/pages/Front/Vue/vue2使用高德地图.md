---
title: vue2使用高德地图
date: 2023-12-07 16:56:17
permalink: /pages/9a9932/
categories:
  - pages
  - Front
  - Vue
tags:
  - 
---
## vue2 使用高德地图

1. **npm i @amap/amap-jsapi-loader --save**
2. 在main.js中引入高德地图，key是在高德地图申请的应用key值，version是版本，plugins是需要的插件，可以根据自己的需要从官网加入

```
import AMapLoader from '@amap/amap-jsapi-loader'
AMapLoader.load({
  key: '832e3a9432fa3502878a346685cf881c',
  version: '2.0',
  plugins: ['AMap.Scale']
}).then((AMap)=> {
  Vue.prototype.AMap = AMap
})
```

3.单页面

```
<template>
    <div id="app">
      <button @click="createMap">惦记</button>
    </div>
</template>

<script>

export default {
  data() {
    return {
      map: ""
    }
  },
  mounted() {
    setTimeout(() => {
      this.createMap()
    }, 1500);
  },

  methods: {
    createMap() {
      this.map = new AMap.Map("app",{
        viewMode: '2D',
        zoom:13,
        center:[116.397428,39.90923],
        mapStyle:"amap://styles/normal"
      })
    }
  }
}
</script>


```

4. eslintrc.js需要设置globals，否则AMap会报错

```
  globals: {
    AMap: true
  }
```

