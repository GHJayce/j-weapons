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

declare namespace JW {
  interface ObjectAny {
    [key: string]: any
    [key: number]: any
  }
  type ObjArrStr = Array<any> | String | ObjectAny
  type ObjArr = Array<any> | ObjectAny
  interface ObjectStrStr {
    [key: string]: string
  }
  interface ObjectStrAny {
    [key: string]: any
  }
  export const version: string
  export function getFirstItem(needle: object): object | undefined
  export function getFirstKey(needle: object): object | undefined
  export function getLastItem(needle: object): object | undefined
  export function getLastKey(needle: object): object | undefined
  export function hasKey(haystack: object, needle: string | number | boolean | any): boolean
  export function toArray(needle: object, options?: number): any[]
  export function cache(driverName?: string): object
  export function deepCopy(needle: ObjectAny): ObjectAny
  export function getCallbackArguments(callback: Function): Array<string>
  export function getFirstVal(needle: ObjArrStr): any
  export function getLastVal(needle: ObjArrStr): any
  export function getLength(
    needle: String | Array<any> | ArrayBuffer | SharedArrayBuffer | DataView | Object
  ): number
  export function has(haystack: ObjArrStr, needle: any): boolean
  export function hasGetIndex(haystack: ObjArrStr, needle: any): string | number
  export function pluck(
    haystack: Array<ObjectAny>,
    needle: string | null,
    key?: string | undefined
  ): ObjArr
  export function getType(needle: any): string
  export function isEmpty(needle: any, strict?: boolean | number): boolean
  export function isFloat(needle: any): boolean
  export function isRealNaN(needle?: any): boolean
  export function isSet(needle?: any): boolean
  export function reportExceptType(allowTypes: string | Array<any>, needle: any): void
  export function toNumber(needle: any): number
  export function toObject(needle: string | Array<any>): object
  export function typeofStr(needle: any): string
  export function decodeUrl(needle: string): string
  export function encodeUrl(needle: string): string
  export function getCurrentUrlParam(key: string, defaultVal?: any): any
  export function getCurrentUrlParams(): ObjectStrStr
  export function getUrlParam(url: string, key: string, defaultVal?: any): string | undefined
  export function getUrlParams(url: string): ObjectStrStr
  export function setCurrentUrlParams(
    key: string | number | object,
    val: undefined | string | number
  ): string
  export function setUrlParams(
    url: string,
    key?: string | number | object,
    val?: undefined | string | number | any
  ): string
}
export = JW
export as namespace JW
