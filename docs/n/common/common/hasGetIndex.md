---
search: false
---

`hasGetIndex(haystack, needle)`

检查是否存在值，存在返回索引/key，不存在返回-1。

返回值：String|Number

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
haystack|查找范围|String \| Array \| Object||
needle|要查找的值|*||

```js
console.log(JW.hasGetIndex('banana', 'c'));
console.log(JW.hasGetIndex('', 'a'));
```
