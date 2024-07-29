import '@/common/string.ts'

import { getFirstItem } from '@/common/object/getFirstItem.ts'
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
import { setCurrentUrlParams } from '@/url/setCurrentUrlParams.ts'
import { getUrlParam } from '@/url/getUrlParam.ts'
import { getUrlParams } from '@/url/getUrlParams.ts'
import { setUrlParams } from '@/url/setUrlParams.ts'

const version: string = '1.6.0'

export {
  version,
  getFirstItem,
  getFirstKey,
  getLastItem,
  getLastKey,
  hasKey,
  toArray,
  cache,
  deepCopy,
  getCallbackArguments,
  getFirstVal,
  getLastVal,
  getLength,
  has,
  hasGetIndex,
  pluck,
  getType,
  isEmpty,
  isFloat,
  isRealNaN,
  isSet,
  reportExceptType,
  toNumber,
  toObject,
  typeofStr,
  decodeUrl,
  encodeUrl,
  getCurrentUrlParam,
  getCurrentUrlParams,
  setCurrentUrlParams,
  getUrlParam,
  getUrlParams,
  setUrlParams
}
