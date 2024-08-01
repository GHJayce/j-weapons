---
search: false
---

`getLength(needle)`

获取数据长度。

返回值：Number

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|待获取长度对象|String \| Array \| Object||

```js
console.log(JW.getLength('banana'));
console.log(JW.getLength('banana'.split('')));
console.log(JW.getLength({a: 1, b: 1}));
```
