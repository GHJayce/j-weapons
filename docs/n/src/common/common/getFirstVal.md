---
search: false
---

`getFirstVal(needle)`

获取第一个元素值。

返回值：Mixed

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|待获取对象|String \| Array \| Object||

```js
console.log(JW.getFirstVal('123'));
console.log(JW.getFirstVal([1, 2, 3]));
console.log(JW.getFirstVal({
    a: 1,
    b: 2,
    c: 3,
}));
```
