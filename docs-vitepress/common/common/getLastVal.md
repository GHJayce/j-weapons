---
search: false
---

`getLastVal(needle)`

获取最后一个元素值。

返回值：Mixed

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|待获取对象|String \| Array \| Object||

```js
console.log(JW.getLastVal('123'));
console.log(JW.getLastVal([1, 2, 3]));
console.log(JW.getLastVal({
    a: 1,
    b: 2,
    c: 3,
}));
```
