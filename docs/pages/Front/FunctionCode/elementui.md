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

## select取label值

1. 单选拿label  - 元素加change事件和ref

```js
Change() {
    this.$nextTick(() => {
        this.addForm.xxx = this.$refs.xxxRef.selectedLabel;
    });
},
```



2. 多选拿label

```js
data() {
	return {
		departmentIds: [],
		departmentNames: [],
		dictList: []
	}
},
methods: {
	changeLocationValue(val) {
      this.departmentIds = [] //初始化数据
      this.departmentNames = [] //初始化数据
      for (let i = 0; i <= val.length - 1; i++) {
        this.dictList.find((item) => {
          //这里的options就是数据源
          if (item.value == val[i]) {
            this.departmentIds.push(item.value) 
            this.departmentNames.push(item.label) 
          }
        })
      }
    }
}
```

## 表单验证

1. 手机号校验

```js
phone: [
	{ required: true, message: "请输入手机号", trigger: "blur" },
	{pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57]|19[0-9]|16[0-9])[0-9]{8}$/, 			trigger: "blur", message: "手机号格式不正确"}
]
```

## el-dialog组件

1. 子组件

```vue
<template>
  <div>
    <el-dialog
      :title="addFlag === 1 ? '新增' : addFlag === 2 ? '修改' : '详情'"
      :visible.sync="dialog"
      :width="addFlag === 3 ? '30%' : '40%'"
      append-to-body
      :close-on-click-modal="false"
      @close="addClose"
    >
      <div v-if="[1, 2].includes(addFlag)">新增 修改</div>
      <div v-else>详情</div>
    </el-dialog>
  </div>
</template>
```

```js
<script>
export default {
  props: {
    addDialog: {
      type: Boolean,
    },
    addFlag: {
      type: Number,
    },
    addRow: {
      type: Object,
    },
  },
  data() {
    return {
      addForm: {},
      addRules: {},
      dialogVisible: false,
      subLoading: false,
    }
  },
  watch: {
    addDialog() {
      if (this.addDialog && [2, 3].includes(this.addFlag)) {
        this.addForm = { ...this.addRow }
      } else {
        this.addForm = {}
      }
      this.dialogVisible = this.addDialog
    },
  },
  methods: {
    // 提交
    submit() {
      this.subLoading = true
      this.$refs.addFormRef.validate((valid) => {
        if (valid) {
          // 接口
        } else {
          this.subLoading = false
          this.$message.warning("请填写完整的信息！")
        }
      })
    },
    // 关闭
    addClose(index) {
      if ([1, 2].includes(this.addFlag)) {
        this.$refs.addFormRef.resetFields()
      }
      this.$emit("addClose", index)
    },
  },
}
</script>
```

2. 父组件

```vue
 <Add-Dialog
      :addDialog="addDialog"
      :addFlag="addFlag"
      :addRow="addRow"
      @addClose="addClose">
</Add-Dialog>
```

```js
data() {
	return {
		addDialog: false,
		addFlag: null,
		addRow: {}
	}
},
methods: {
	addClose(index) {
	 	this.addDialog = false
		if(index === 1) {
			//刷新列表
			this.getList()
		}
	}
}
```



## el-form表单

```vue
<el-form
    ref="addFormRef"
    :model="addForm"
    :rules="addRules"
    label-width="110px"
>
	<el-form-item label="输入框：" prop="input">
    	<el-input v-model="addForm.input"></el-input>
    </el-form-item>
    
    <el-form-item label="下拉框" prop="selectId">
    	<el-select
    		clearable
    		ref="xxxRef"
    		style="width: 100%"
    		v-model="addForm.selectId"
    		@change="xxxChange">
    		 <el-option v-for="item in enterpriseList"
             	:key="item.id" :label="item.enterpriseName"
                :value="item.id">
             </el-option>
         </el-select>
    </el-form-item>
    
    <el-form-item label="时间：" prop="time">
        <el-date-picker
            v-model="addForm.time"
            type="datetime"
            placeholder="选择日期时间"
            value-format="yyyy-MM-dd HH:mm:ss
            format="yyyy-MM-dd HH:mm">
        </el-date-picker>
    </el-form-item>
</el-form>
```

## el-table 添加行/单元格样式

```vue
<el-table :data="tableList" v-loading="loading" :row-style="rowStyle"><el-table>
```

```js
 rowStyle(row) {
   if(row.row.loginIp >= 30) {
       return {
         color: "red"
       }
   }
 },
```

## el-table 分页多选隔页选择

```vue
<el-table :row-key="getRowKeys"></el-table>

<el-table-column type="selection" width="55" :reserve-selection="true">
```

```js
getRowKeys(row) {
   return row.id
},
```