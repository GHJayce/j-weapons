---
search: false
---

`setCurrentUrlParams(key[, val])`

设置当前URL单个或多个参数。设置已存在的参数名称，旧值会被覆盖。

返回值：String

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
key|参数名称|String \| Number \| Object||
val|参数值|Undefined \| String \| Number||

```js
console.log(JW.setCurrentUrlParams('q'));
console.log(JW.setCurrentUrlParams('author', 'GHBJayce'));
console.log(JW.setCurrentUrlParams({
    author: 'GHBJayce'
}));
```
