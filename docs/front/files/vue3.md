# vue

## vite创建项目

- vite 创建项目 ` npm create vite@latest `

## vite配置别名

```

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

