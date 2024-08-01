---
search: false
---

`isEmpty(needle[, strict])`

检测是否为空。

返回值：Boolean

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|待检测对象|*||
strict|启用严格模式。<br>非严格模式，以下字符串视为空：<br>`'0'` `'null'` `'undefined'` `'false'` `'NaN'`|Boolean||false

```js
console.log(JW.isEmpty(0));
console.log(JW.isEmpty('0'));
console.log(JW.isEmpty('0', 1));
```

