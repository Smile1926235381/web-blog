# html+css
## css nth-child使用

- 正方向范围  
  - `li:nth-child(n+6)`    选中从第6个开始的子元素
- 负方向范围  
  - ` :nth-child(-n+9)`       选中从第1个到第9个子元素
- 前后限制范围   
  - `:nth-child(n+4):nth-child(-n+8)`    选中第4-8个子元素
- 隔选择子元素  
  - `:nth-child(3n+1)`   选择1,4,7,10
- 范围  
  - `nth-child(n+2):nth-child(odd):nth-child(-n+9)  `     选中的子元素是从第2位到第9位，只包含奇数位

## scss基本使用

```scss
<style lang="scss">
// 声明变量
$color:red;
// 混入
@mixin common {
  height: 100px-20px;
  // 百分比减 calc -号两端要有空格
  width: calc(100% - 500px);
}
.mixin {
  // 调用公共方法
  @include common;
  background: $color;
}
</style>
```
