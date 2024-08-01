---
search: false
---

`isSet(needle)`

检测是否设置，以下类型视为未设置：`undefined` `NaN` `null` `false`。

返回值：Boolean

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|待检测对象|*||

```js
console.log(JW.isSet(undefined));
console.log(JW.isSet(NaN));
console.log(JW.isSet(null));
console.log(JW.isSet(false));
console.log(JW.isSet(0));
```
