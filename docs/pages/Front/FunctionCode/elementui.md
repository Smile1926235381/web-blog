---
title: elementui
date: 2023-07-11 11:38:57
permalink: /pages/e2ee05/
categories:
  - pages
  - Front
  - FunctionCode
tags:
  -  elementui
---

## 日期选择器时间选择范围限制

1. 设置选择今天以及今天之后的日期

```js
data (){
   return {
       pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },  
   }     
}
```

2. 设置选择今天以及今天以前的日期

```js
data (){
   return {
       pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now() - 8.64e6
          }
        },  
   }     
}
```

## 表格列筛选功能

1. el-table-column需要绑定filter筛选项

```vue
<el-table-column
  prop="tag"
  label="标签"
  :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]">
</el-table-column>
```

2. el-table绑定filter-change事件

```vue
<el-table
   :data="tableData"
   @filter-change="handleFilterChange">
</el-table>

//调用接口传参数
handleFilterChange(item) {}
```

