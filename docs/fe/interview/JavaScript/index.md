# JavaScript
## 1.数据类型
### 1.1 分类
- 基本/原始数据类型：`undefined` `null` `boolean` `string` `number` `symbol` `bigint`
- 复杂/引用数据类型：`object`
### 1.2 存储位置
- 原始数据类型存储在栈中，占据空间小、大小固定，属于频繁使用数据
- 复杂/引用数据类型存储在堆中，占据空间大，大小不固定；在栈中存储了指针，该指针指向了堆中的实体地址
### 1.3 数据类型检测
- `typeof()`：数组、对象、null 都会被判定为 object
🌰
```javascript
console.log(typeof 1)	// number
console.log(typeof 'str') // string
console.log(typeof undefined) // undefined
console.log(typeof null) // object
console.log(typeof true) // boolean
console.log(typeof function(){})  // function
console.log(typeof Symbol("foo")) // symbol
console.log(typeof 2172141653n) // bigint

// 不能判别
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof null); // object
```
- `instanceof`：检测当前实例是否属于这个类；不能检测基本数据类型
- `constructor`：支持基本类型；可以随意修改，不准确
- `Object.prototype.toString.call([val])`
```javascript
console.info( getType(null) ) // null
console.info( getType(undefined) ) // undefined
console.info( getType(100) ) // number
console.info( getType('abc') ) // string
console.info( getType(true) ) // boolean
console.info( getType(Symbol()) ) // symbol
console.info( getType({}) ) // object
console.info( getType([]) ) // array
console.info( getType(() => {}) ) // function
console.info( getType(new Date()) ) // date
console.info( getType(new RegExp('')) ) // regexp
console.info( getType(new Map()) ) // map
console.info( getType(new Set()) ) // set
console.info( getType(new WeakMap()) ) // weakmap
console.info( getType(new WeakSet()) ) // weakset
console.info( getType(new Error()) ) // error
console.info( getType(new Promise(() => {})) ) // promise
```


