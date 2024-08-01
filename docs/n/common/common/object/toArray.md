---
search: false
---

`toArray(needle[, options])`

将对象转化为数组。

返回值：Array

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|待转换对象|Object||
options|选项|Number|`1` 对象所有属性值组成的数组<br>`2` 保留结构，外面套一层数组|1

```js
console.log(JW.toArray({a: 1, b: 2}));
console.log(JW.toArray({a: 1, b: 2}, 2));
```
