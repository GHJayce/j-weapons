---
search: false
---

`pluck(haystack, needle, key)`

类似PHP的array_column，摘取数组中对象元素的某个key成为一个集合。

返回值：Array|Object

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
haystack|需要摘取的数组|Array||
needle|需要摘下的字段|string|null|
key|作为摘下字段的key下标|string||undefined

```js
const arr1 = [{id: 1, name: 'jay'}, {id: 2, name: 'jack'}]
JW.pluck(arr1, 'id'); // [1,2]
JW.pluck(arr1, 'name', 'id'); // {1:'jay',2:'jack'}
JW.pluck(arr1, null, 'id'); // {1: {id:1, name:'jay'}, 2: {id:2, name:'jack'}}
```
