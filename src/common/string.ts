import type { ObjectAny } from '@/type.d'

declare global {
  interface String {
    clueTrim(needle?: string): string
    clueTrimLeft(needle?: string): string
    clueTrimRight(needle?: string): string
    toLower(): string
    toUpper(): string
    insert(needle: string, index: number): string
    indexReplace(needle: string, index: number): string
    rangeIndexReplace(needle: string, startIndex?: number, endIndex?: number): string
    getShowCount(needle: string): number
    getShowCounts(): object
    batchReplace(needle: object): string
    sprintf(...params: string[]): String
  }
}

const trimCommon = (needle?: string): string => {
  needle = needle || '\\s'
  const rules: string[] = needle.split(',')
  return rules.join('|')
}

/**
 * 去除首尾字符
 * @param {String} needle 默认空白符，可指定要去除字符，多个字符使用英文逗号分隔
 * @returns {String}
 */
if (!String.prototype.hasOwnProperty('clueTrim')) {
  String.prototype.clueTrim = function (needle?: string): string {
    const core: string = trimCommon(needle)
    const rule: string = `^([${core}]*)|([${core}]*)$`
    return this.replace(new RegExp(rule, 'g'), '')
  }
}

/**
 * 去除开头字符
 * @param {String} needle 默认空白符，可指定要去除字符，多个字符使用英文逗号分隔
 * @returns {String}
 */
if (!String.prototype.hasOwnProperty('clueTrimLeft')) {
  String.prototype.clueTrimLeft = function (needle?: string): string {
    const core: string = trimCommon(needle)
    const rule: string = `^([${core}]*)`
    return this.replace(new RegExp(rule), '')
  }
}

/**
 * 去除结尾字符
 * @param {String} needle 默认空白符，可指定要去除字符，多个字符使用英文逗号分隔
 * @returns {String}
 */
if (!String.prototype.hasOwnProperty('clueTrimRight')) {
  String.prototype.clueTrimRight = function (needle?: string): string {
    const core: string = trimCommon(needle)
    const rule: string = `([${core}]*)$`
    return this.replace(new RegExp(rule, 'g'), '')
  }
}

/**
 * 转化为小写
 * @returns {String}
 */
if (!String.prototype.hasOwnProperty('toLower')) {
  String.prototype.toLower = function (): string {
    return this.toLocaleLowerCase()
  }
}

/**
 * 转化为大写
 * @returns {String}
 */
if (!String.prototype.hasOwnProperty('toUpper')) {
  String.prototype.toUpper = function (): string {
    return this.toLocaleUpperCase()
  }
}

/**
 * 插入字符串
 * @param {String} needle 要插入的字符串
 * @param {Number} index 插入的索引位置
 * @returns {String}
 */
if (!String.prototype.hasOwnProperty('insert')) {
  String.prototype.insert = function (needle: string, index: number): string {
    const str1: string = this.substring(0, index)
    const str2: string = this.substring(index)
    return str1 + needle + str2
  }
}

/**
 * 索引位置替换
 * @param {String} needle 替换值
 * @param {Number} index 被替换值的位置
 * @returns {String}
 */
if (!String.prototype.hasOwnProperty('indexReplace')) {
  String.prototype.indexReplace = function (needle: string, index: number): string {
    const strArr: string[] = this.split('')
    strArr.splice(index, 1, needle)
    return strArr.join('')
  }
}

/**
 * 索引范围替换
 * @param {String} needle 替换值
 * @param {Number} startIndex 开始替换的索引位置
 * @param {Number} endIndex 结束替换的索引位置
 */
if (!String.prototype.hasOwnProperty('rangeIndexReplace')) {
  String.prototype.rangeIndexReplace = function (
    needle: string,
    startIndex?: number,
    endIndex?: number
  ): string {
    const length: number = this.length
    if (startIndex === undefined) {
      return this.toString()
    }
    endIndex = endIndex || length
    if (endIndex < startIndex) {
      return this.toString()
    }

    endIndex = endIndex >= length ? length : endIndex
    startIndex = startIndex >= length ? length : startIndex

    const strBegin: string = this.substring(0, startIndex)
    const strEnd: string = this.substring(endIndex + 1, this.length)
    return strBegin + needle + strEnd
  }
}

/**
 * 获取指定字符串出现次数
 *
 * @param {String} needle
 * @returns {Number}
 */
if (!String.prototype.hasOwnProperty('getShowCount')) {
  String.prototype.getShowCount = function (needle: string): number {
    return this.split(needle).length - 1
  }
}

/**
 * 统计字符串中的字符出现次数
 * @returns {Object}
 */
if (!String.prototype.hasOwnProperty('getShowCounts')) {
  String.prototype.getShowCounts = function (): object {
    let result: object = {}
    if (this && this !== '' && this.trim() !== '') {
      let matchRes: RegExpMatchArray | null = this.split('')
        .sort()
        .join('')
        .match(/(.)\1*/g)
      if (matchRes) {
        return matchRes.reduce((res: ObjectAny, cur: string) => {
          res[cur[0]] = cur.length
          return res
        }, {})
      }
    }
    return result
  }
}

/**
 * 批量替换字符串
 * @param {Object} needle 替换值的映射对象
 * @returns {String}
 */
if (!String.prototype.hasOwnProperty('batchReplace')) {
  String.prototype.batchReplace = function (needle: ObjectAny): string {
    let match: string[] = Object.keys(needle)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
    const escape: string[] = [
      '\\',
      '(',
      ')',
      '[',
      ']',
      '{',
      '}',
      '|',
      '-',
      '+',
      '*',
      '?',
      '!',
      '^',
      '$',
      '.'
    ]
    let i: string
    for (i in match) {
      let index: number = escape.indexOf(match[i])
      if (index !== -1) {
        match[i] = '\\' + escape[index]
      }
    }
    const rule: string = '(' + match.join('|') + ')'
    const reg: RegExp = new RegExp(rule, 'g')
    return this.replace(reg, function (_a: string, key) {
      return needle[key]
    })
  }
}

/**
 * 占位符替换
 * @param {string[]} params 替换值
 * @returns {String}
 */
if (!String.prototype.hasOwnProperty('sprintf')) {
  String.prototype.sprintf = function (...params: string[]): String {
    let str: String = this
    //const args: IArguments = arguments

    let i: string
    for (i in params) {
      str = str.replace(/%s/, params[i])
    }
    return str
  }
}
