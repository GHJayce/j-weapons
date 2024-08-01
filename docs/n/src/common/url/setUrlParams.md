---
search: false
---

`setUrlParams(url, key[, val])`

设置指定URL单个或多个参数。设置已存在的参数名称，旧值会被覆盖。

返回值：String

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
url|待设定参数链接|*||
key|参数名称|String \| Number \| Object||
val|参数值|Undefined \| String \| Number||

```js
var url = 'https://github.com/GHBJayce/j-weapons';
console.log(JW.setUrlParams(url, 'q'));
console.log(JW.setUrlParams(url, 'author', 'GHBJayce'));
console.log(JW.setUrlParams(url, {
    author: 'GHBJayce'
}));
```
