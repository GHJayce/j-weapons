---
search: false
---

`getUrlParam(url, key[, defaultVal])`

获取指定url的指定参数。

返回值：Mixed

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
url|链接|String||
key|参数名称|String||
defaultVal|未设定（`JW.isSet`）时的默认值|*||

```js
var url = 'https://api.github.com/search/repositories?q=j-weapons&per_page=1&p=1&sort=stargazers_count';
console.log(JW.getUrlParam(url, 'q'));
console.log(JW.getUrlParam(url, 'author', 'GHBJayce'));
```
