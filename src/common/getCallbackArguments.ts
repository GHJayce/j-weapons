import { reportExceptType } from '@/type/reportExceptType.ts'
import { isEmpty } from '@/type/isEmpty.ts'
import type { GetCallbackArguments } from '@type/common/getCallbackArguments.ts'

/**
 * 获取函数的形参名
 * @param {Function} callback
 * @returns {Array}
 */
export const getCallbackArguments = (
  callback: GetCallbackArguments.Callback
): GetCallbackArguments.Return => {
  reportExceptType('function', callback)

  const callbackStr: string = callback.toString()
  const match: RegExpExecArray | null = /[function[\s\S]*?]{0,}\(([\s\S]*?)\)/.exec(callbackStr)
  let argumentList: any = []

  if (match && !isEmpty(match[1])) {
    argumentList = match[1].replace(/\s/g, '').split(',')
  }
  return argumentList
}
