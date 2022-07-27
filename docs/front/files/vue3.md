# Vue3

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

## ts-配置路由

- 安装 `npm i vue-router@next -S`
