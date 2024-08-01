---
search: false
---

`getCurrentUrlParam(key[, defaultVal])`

获取当前浏览器url的指定参数。

返回值：Mixed

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
key|参数名称|String||
defaultVal|未设定（`JW.isSet`）时的默认值|*||

```js
console.log(JW.getCurrentUrlParam('q'));
console.log(JW.getCurrentUrlParam('author', 'GHBJayce'));
```
