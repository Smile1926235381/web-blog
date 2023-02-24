# typescript

### 安装typescript

```
npm install -g typescript
```

### 查看版本

```
tsc -v
```

### 对象

```
interface Iform = {
	id: number,
	name：string，
	[proName:string]:any
}

let form:Iform = {
	id:1,
	name: "zhangshan"
}
```

### 数组

```
interface Iarr = {
	id: number,
	name: string
}

let list:Iarr[] = [
	{
		id: 1,
		name: '王武'
	}
]
```

