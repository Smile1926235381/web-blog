# vue

## style与class

```html
<div :class="[colorIndex?'box2':'box3','box']">//含有判断和不判断的  测试:class</div>
 
<div :style="{color:colorTwo,height:'30px',width:'100%',background:num==1?'pink':'yellow'}">测试:style</div>
 
//data变量的方式 color:colorTwo     colorTwo：‘red’
 
<div :style="[{color:colorTwo,background:num==1?'pink':'yellow'},whthTwo]">测试:style</div>

//多个对象  data whthTwo:{height: '44px',width: '100%'}
```



## core.js报错

- core-js版本太高 
  - 解决办法： `cnpm install core-js@2`
- scss报错  版本冲突   
  - 解决办法：`npm install node-sass@4.14.1 sass-loader@8.0.0 --dev`

