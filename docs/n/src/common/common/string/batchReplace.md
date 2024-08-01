---
search: false
---

`String.prototype.batchReplace(needle)`

字符串批量替换。

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
needle|映射对象|Object||

返回值：String

```js
var str1 = 'C = (a + b) * 2';
var str2 = str1.batchReplace({
    a: 10,
    b: 5,
});
console.log(eval(str2));
```
