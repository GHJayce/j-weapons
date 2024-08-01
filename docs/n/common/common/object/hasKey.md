---
search: false
---

`hasKey(haystack, needle)`

将对象转化为数组。

返回值：Array

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
haystack|待检查对象|Object||
needle|待查找的key|String\|Number\|Boolean||

```js
console.log(JW.hasKey({a: 1, b: 2}, 'd')); // false
console.log(JW.hasKey({a: 1, b: 2, 1: 2}, 1)); // true
console.log(JW.hasKey({a: 1, b: 2, true: 1}, true)); // true
```

