import { getType } from '@/type/getType.ts'
import { isEmpty } from '@/type/isEmpty.ts'
import { isFloat } from '@/type/isFloat.ts'
import { isRealNaN } from '@/type/isRealNaN.ts'
import { isSet } from '@/type/isSet.ts'
import { reportExceptType } from '@/type/reportExceptType.ts'
import { toNumber } from '@/type/toNumber.ts'
import { toObject } from '@/type/toObject.ts'
import { typeofStr } from '@/type/typeofStr.ts'
import { decodeUrl } from '@/url/decodeUrl.ts'
import { encodeUrl } from '@/url/encodeUrl.ts'
import { getCurrentUrlParam } from '@/url/getCurrentUrlParam.ts'
import { getCurrentUrlParams } from '@/url/getCurrentUrlParams.ts'
import { getUrlParam } from '@/url/getUrlParam.ts'
import { getUrlParams } from '@/url/getUrlParams.ts'
import { setCurrentUrlParams } from '@/url/setCurrentUrlParams.ts'
import { setUrlParams } from '@/url/setUrlParams.ts'
import { getFirstItem as getFirstItem } from '@/common/object/getFirstItem.ts'
import { getFirstKey } from '@/common/object/getFirstKey.ts'
import { getLastItem } from '@/common/object/getLastItem.ts'
import { getLastKey } from '@/common/object/getLastKey.ts'
import { hasKey } from '@/common/object/hasKey.ts'
import { toArray } from '@/common/object/toArray.ts'
import { cache } from '@/common/cache.ts'
import { deepCopy } from '@/common/deepCopy.ts'
import { getCallbackArguments } from '@/common/getCallbackArguments.ts'
import { getFirstVal } from '@/common/getFirstVal.ts'
import { getLastVal } from '@/common/getLastVal.ts'
import { getLength } from '@/common/getLength.ts'
import { has } from '@/common/has.ts'
import { hasGetIndex } from '@/common/hasGetIndex.ts'
import { pluck } from '@/common/pluck.ts'
import '@/common/string.ts'

const version: string = '1.6.0'

const JW = {
  version: version,
  getFirstItem: getFirstItem,
  getFirstKey: getFirstKey,
  getLastItem: getLastItem,
  getLastKey: getLastKey,
  hasKey: hasKey,
  toArray: toArray,
  cache: cache,
  deepCopy: deepCopy,
  getCallbackArguments: getCallbackArguments,
  getFirstVal: getFirstVal,
  getLastVal: getLastVal,
  getLength: getLength,
  has: has,
  hasGetIndex: hasGetIndex,
  pluck: pluck,
  getType: getType,
  isEmpty: isEmpty,
  isFloat: isFloat,
  isRealNaN: isRealNaN,
  isSet: isSet,
  reportExceptType: reportExceptType,
  toNumber: toNumber,
  toObject: toObject,
  typeofStr: typeofStr,
  decodeUrl: decodeUrl,
  encodeUrl: encodeUrl,
  getCurrentUrlParam: getCurrentUrlParam,
  getCurrentUrlParams: getCurrentUrlParams,
  setCurrentUrlParams: setCurrentUrlParams,
  getUrlParam: getUrlParam,
  getUrlParams: getUrlParams,
  setUrlParams: setUrlParams
}

export default JW
