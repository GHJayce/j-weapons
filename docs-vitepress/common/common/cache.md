---
search: false
---

`cache([name])`

本地缓存封装，支持对象格式、数值递增、递减等

返回值：Mixed

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
name|本地缓存驱动|String|`local`、`session`|`local`

```js
JW.cache().set('name', 'jayce');
JW.cache().get('name');
JW.cache().incr('age');
JW.cache().incr('age', 10);
JW.cache().decr('age');
JW.cache().hSet('obj', {
    name: 'jayce',
});
JW.cache().hGet('obj'); // {name: 'jayce'}
JW.cache('session').clear(); // 清空所有key
JW.cache().del('name', 'age'); // 删除key
```
