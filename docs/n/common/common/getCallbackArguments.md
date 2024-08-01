---
search: false
---

`getCallbackArguments(needle)`

获取函数的形参名。

返回值：Array

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|函数|Function||

```js
console.log(JW.getCallbackArguments((a, b) => {}));
console.log(JW.getCallbackArguments(function (  a,   b) {}));
```
