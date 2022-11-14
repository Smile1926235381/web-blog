# Vue3

## 第一章介绍vue

#### 1. MVVM

- View:视图层 (UI用户界面)
- ViewModek: 业务逻辑层
- Model:数据层( 存储数据及对数据的处理如增删改查 )

#### 2. vue2对比vue3

- vue2逻辑比较分散 可读性差 可维护性差
- vue3逻辑分明 可维护性高
- vue2基于Object.definedProto()实现
- vue3基于Proxy
- vue3优化Vdom
- vue3允许多个根节点
- vue3 Composition api SetUp函数式编程 vue hook

## vite2创建项目

- vite 创建项目 ` npm create vite@latest `

## vite2配置别名

- vite.config.ts文件配置

- 注：由于node不支持ts，需要安装path模块 `npm install @types/node -D`

```typescript
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
        "@": resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.json', '.ts']
  },
  plugins: [vue()]
})
```

- tsconfig.json

```typescript
"compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "src/*"
      ]
    }
}
```



## ts定义数组

```typescript
<script lang="ts">
import { defineComponent } from 'vue'
type Todo = {
  id: number
  name: string
  completed: boolean
}
export default defineComponent({
  name: 'arrayList',
  data() {
    return {
      items: [] as Todo[],
    }
  },
  created() {
    this.items.push({
      id: 1,
      name: 'VUE3',
      completed: false,
    })
  },
})
</script>

```

## ts-demo

```vue
<template>
  <div>
    <div>{{ counter }}</div>
    <div>{{ doubleCounter }}</div>
    <div v-for="(item, index) in list" :key="index">
      <span>{{ item.id }}</span>
      <span>{{ item.name }}</span>
      <span>{{ item.complate }}</span>
    </div>
    <input
      type="text"
      v-model="todoName"
      @keydown.enter="addItems(newTodo(todoName))"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
type Todo = {
  id: number;
  name: string;
  complate: boolean;
};

const counter = ref(1);
const todoName = ref("");
const doubleCounter = computed((): number => counter.value * 2);
const list = ref([] as Todo[]);
list.value.push({
  id: 1,
  name: "张三",
  complate: false,
});
const newTodo = (todoName: string): Todo => {
  return {
    id: list.value.length + 1,
    name: todoName,
    complate: false,
  };
};
const addItems = (todo: Todo): void => {
  list.value.push(todo);
  todoName.value = "";
};
</script>


```

### 01-ref系列

- ref使用

```vue
import { ref, Ref, isRef, shallowRef, triggerRef } from 'vue'

let message:Ref<string> = ref('我是message')
const messageChange =()=> {
  message.value = '修改后的message'
}
```

-  isRef判断是不是一个ref对象

```
let num:number = 123
console.log(isRef(message))  //true
console.log(isRef(num))  //false
```

- shallowRef  禁止响应式  triggerRef 强制更新DOM

```js
type Obj = {
  name:string
}
let msgObj:Ref<Obj> = shallowRef({
  name: '小满'
})
const changeMsg = ()=> {
  // 监听不到
  msgObj.value.name = '王昭君'
  triggerRef(msgObj)
  // 可以监听到
  // msgObj.value = {name: '小黑'}
}
```

### 02-reactive

- reactive 引用类型 Array Object, 不可直接赋值，可以push加解构进行赋值

```js
import { reactive } from 'vue'
let person = reactive<number[]>([])
setTimeout(() => {
  const arr = [1, 2, 3]
  person.push(...arr)
  console.log(person);
  
},1000)
```

- readonly 拷贝一份proxy对象将其设置为只读
- shallowReactive 只能对浅层的数据 如果是深层的数据只会改变值 不会改变视图

## 03-computed

- 计算属性就是当依赖的属性的值发生变化的时候，才会触发他的更改，如果依赖的值，不发生变化的时候，使用的是缓存中的属性值。

```js
let price:Ref<number> = ref(0)
let allPrice = computed<string>(()=> {
    return `$` + price.value
})
```

## 04-watch侦听器

- 参数1：监听源，参数2：回调函数，参数3：配置对象
- ref

```js
import { watch, reactive, Ref, ref } from 'vue'

let price:Ref<number> = ref(78)

watch(price,(newValue,oldValue) => {
    console.log('新的值----', newValue);
    console.log('旧的值----', oldValue);
},{
    immediate: true,
    deep: true
})

//监听多个值
watch([message,message2], (newVal, oldVal) => {
    console.log('新的值----', newVal);
    console.log('旧的值----', oldVal);
})
```

- reactive 监听单个值

```js
watch(()=>message.name, (newVal, oldVal) => {
    console.log('新的值----', newVal);
    console.log('旧的值----', oldVal);
})
```

## 05-生命周期

- `onBeforeMount()`在组件DOM实际渲染安装之前调用。在这一步中，根元素还不存在。
- `onMounted()`在组件的第一次渲染后调用，该元素现在可用，允许直接DOM访问
- `onBeforeUpdate()`数据更新时调用，发生在虚拟 DOM 打补丁之前。
- `onUpdated()`DOM更新后，`updated`的方法即会调用。

- `onBeforeUnmount()`在卸载组件实例之前调用。在这个阶段，实例仍然是完全正常的。
- `onUnmounted()`卸载组件实例后调用。调用此钩子时，组件实例的所有指令都被解除绑定，所有事件侦听器都被移除，所有子组件实例被卸载。

## 06-keep-alive缓存组件

- 开启keep-alive生命周期变化
  - 初次进：onMounted>onActivated
  - 退出后触发 deactivated
  - 再次进去：onActivated
- include: 记录那些组件可以被缓存
- exclude:记录那些组件不能被缓存
- max:记录最大缓存数

```js
 <keep-alive :include="" :exclude="" :max=""></keep-alive>
```

## 07-父子组件传值

- 父传子  

```js
父：
<AppHeader :data="data" :title="title" @on-click="getList"></AppHeader>
const data = reactive<number[]>([1, 2, 3])
let title: Ref<string> = ref('您好')

子：
type Props = {
  title?: string
  data?: number[]
}
defineProps<Props>()
```

- 父传子定义默认值

```js
// 声明类型
type Props = {
  title?: string
  data?: number[]
}
withDefaults(defineProps<Props>(), {
  title: '张三',
  data: () => [7, 8, 9],
})
```

- 子传父

```js
子：
<button @click="clickTap">派发事件</button>
let list = reactive<string[]>(['q', 'w', 'e', 'r'])
const emit = defineEmits(['on-click'])  //可传递多个
const clickTap = () => {
  emit('on-click', list) //可传递多个
}

父：
<AppHeader :data="data" @on-click="getList"></AppHeader>
const getList = (list: string[]) => {}
```

- 父取子

```js
父：
<AppHeader ref="appHeaderRef"></AppHeader>

取：
const appHeaderRef = ref()
appHeaderRef.value.title

子：
const title:Ref<string> = ref('zhangshan')
defineExpose({
  title
})
```

