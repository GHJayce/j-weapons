
import { DefaultTheme } from "vitepress/types/default-theme";

const config:DefaultTheme.SidebarItem[] = [
  {
    text: '简介',
    items: [
      { text: '什么是j-weapons？', link: '/v1.5.x/index' },
      { text: '快速开始', link: '/v1.5.x/quick-start' }
    ]
  },
  {
    text: '武器库',
    items: [
      {
        text: '类型',
        items: [
          { text: 'getType', link: '/v1.5.x/type/getType' },
          { text: 'isEmpty', link: '/v1.5.x/type/isEmpty' },
          { text: 'isFloat', link: '/v1.5.x/type/isFloat' },
          { text: 'isRealNaN', link: '/v1.5.x/type/isRealNaN' },
          { text: 'isSet', link: '/v1.5.x/type/isSet' },
          { text: 'toNumber', link: '/v1.5.x/type/toNumber' },
          { text: 'toObject', link: '/v1.5.x/type/toObject' },
          { text: 'typeofStr', link: '/v1.5.x/type/typeofStr' },
        ]
      },
      {
        text: 'URL',
        items: [
          { text: 'decodeUrl', link: '/v1.5.x/url/decodeUrl' },
          { text: 'encodeUrl', link: '/v1.5.x/url/encodeUrl' },
          { text: 'getUrlParams', link: '/v1.5.x/url/getUrlParams' },
          { text: 'getCurrentUrlParams', link: '/v1.5.x/url/getCurrentUrlParams' },
          { text: 'getUrlParam', link: '/v1.5.x/url/getUrlParam' },
          { text: 'getCurrentUrlParam', link: '/v1.5.x/url/getCurrentUrlParam' },
          { text: 'setUrlParams', link: '/v1.5.x/url/setUrlParams' },
          { text: 'setCurrentUrlParams', link: '/v1.5.x/url/setCurrentUrlParams' },
        ]
      },
      {
        text: '对象',
        items: [
          { text: 'getFirstKey', link: '/v1.5.x/common/object/getFirstKey' },
          { text: 'getFirstItem', link: '/v1.5.x/common/object/getFirstItem' },
          { text: 'getLastKey', link: '/v1.5.x/common/object/getLastKey' },
          { text: 'getLastItem', link: '/v1.5.x/common/object/getLastItem' },
          { text: 'toArray', link: '/v1.5.x/common/object/toArray' },
          { text: 'hasKey', link: '/v1.5.x/common/object/hasKey' },
        ]
      },
      {
        text: '字符串',
        items: [
          { text: 'trim', link: '/v1.5.x/common/string/trim' },
          { text: 'trimLeft', link: '/v1.5.x/common/string/trimLeft' },
          { text: 'trimRight', link: '/v1.5.x/common/string/trimRight' },
          { text: 'toLower', link: '/v1.5.x/common/string/toLower' },
          { text: 'toUpper', link: '/v1.5.x/common/string/toUpper' },
          { text: 'insert', link: '/v1.5.x/common/string/insert' },
          { text: 'indexReplace', link: '/v1.5.x/common/string/indexReplace' },
          { text: 'rangeIndexReplace', link: '/v1.5.x/common/string/rangeIndexReplace' },
          { text: 'getShowCount', link: '/v1.5.x/common/string/getShowCount' },
          { text: 'getShowCounts', link: '/v1.5.x/common/string/getShowCounts' },
          { text: 'batchReplace', link: '/v1.5.x/common/string/batchReplace' },
          { text: 'sprintf', link: '/v1.5.x/common/string/sprintf' },
        ]
      },
      {
        text: '公共',
        items: [
          { text: 'getLength', link: '/v1.5.x/common/getLength' },
          { text: 'deepCopy', link: '/v1.5.x/common/deepCopy' },
          { text: 'getFirstVal', link: '/v1.5.x/common/getFirstVal' },
          { text: 'getLastVal', link: '/v1.5.x/common/getLastVal' },
          { text: 'getCallbackArguments', link: '/v1.5.x/common/getCallbackArguments' },
          { text: 'hasGetIndex', link: '/v1.5.x/common/hasGetIndex' },
          { text: 'has', link: '/v1.5.x/common/has' },
          { text: 'pluck', link: '/v1.5.x/common/pluck' },
          { text: 'cache', link: '/v1.5.x/common/cache' },
        ]
      },
    ]
  }
]

export default config