---
search: false
---

`deepCopy(needle)`

对象/数组深拷贝。

返回值：Array|Object

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|待深拷贝对象|Array \| Object||

```js
var arrOrigin = [1, 2, 3];
var arr0 = JW.deepCopy(arrOrigin);
var arr1 = JW.deepCopy(arr0);
arr0[0] = 0;
console.log(arrOrigin, arr0, arr1);
```
