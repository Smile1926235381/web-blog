# javascript

## 数组方法

```
原数组不改变： 
content   slice   join   toString   map   every   some   filter  reduce  map reduceRight

原数组会改变： 
push pop shift unshift  sort  splice  reverse
```

## 数组去重

```js
1. Array.form(new Set())
2. [...new Set()]
3. 双层for循环去重
let arr = [1,1,1,2,45,6,2,4,3,2,1]

for(let i = 0;i<arr.length-1;i++) {
    for(let j = i+1;j<arr.length;j++) {
        if(arr[j]===arr[i]) {
            arr.splice(j,1)
            j--
        }
    }
}

console.log(arr)
```

## 求数组中的最大值

```js
1.通过Math.max.apply(null,arr)
2.通过 reduce方法 let max = arr.reduce((prev,current) => return prev>current?prev:current)
3.通过数组sort方法 let max = arr.sort(function(a,b){return a-b})
```

## 函数防抖节流

- 防抖

  ```js
  // 函数防抖，在一定单位时间内，只触发一次
  function debounce(fn, Interval) {
      let timer
      return (event) => {
          if (timer) return false
          timer = setTimeout(() => {
              clearTimeout(timer)
              timer = null
              fn(event)
          }, Interval)
      }
  }
  			
  window.onresize = debounce(function(event) {
      console.log(event)
  },1000)
  ```

- 节流

  ```js
  let input = document.getElementById('inputId')
  function throttle(fn,Interval) {
      let timer
      return () => {
          clearTimeout(timer)
          timer = setTimeout(fn,Interval)
      }
  }
  
  input.oninput = throttle(function() {
      console.log(input.value)
  },1000)
  ```

## es6特性使用

- 1.合并数据

  ```js
  const a = [1,2,3];
  const b = [1,5,6];
  const c = [...new Set([...a,...b])];//[1,2,3,5,6]
  
  const obj1 = {
    a:1,
  }
  const obj2 = {
    b:1,
  }
  const obj = {...obj1,...obj2};//{a:1,b:1}
  ```

- 2.if 条件判断

  ```js
  const condition = [1,2,3,4];
  
  if( condition.includes(type) ){
     //...
  }
  
  等同于 if(type==1||type==2){}
  ```

- 3.数组扁平化

  ```js
  const deps = {
      '采购部':[1,2,3],
      '人事部':[5,8,12],
      '行政部':[5,14,79],
      '运输部':[3,64,105],
  }
  let member = Object.values(deps).flat(Infinity);
  ```

- 4.输入框非空的判断

  ```js
  if(value !== null && value !== undefined && value !== ''){
      //...
  }
  等同于
  if((value??'') !== ''){
    //...
  }
  ```

- 5.判断数组是否为空

  ```js
  const isNotEmpty = arr => Array.isArray(arr) && arr.length > 0
  
  isNotEmpty([1, 2, 3]) //true
  ```

- 6.获取两个整数之间的随机整数

  ```
  const random  = (min,max) => Math.floor(Math.random * (max-min+1) +min)
  random(1,50)
  ```

- 7.求一组数的平均值

  ```js
  const average = (...args) => args.reduce((a,b) => a+b)/args.length
  
  average(1,2,3,4,5)
  ```


