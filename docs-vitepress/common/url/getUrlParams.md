---
search: false
---

`getUrlParams(url)`

获取指定url的所有参数。

返回值：Object

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
url|链接|String||

```js
console.log(JW.getUrlParams('https://api.github.com/search/repositories?q=j-weapons&per_page=1&p=1&sort=stargazers_count'));
```
