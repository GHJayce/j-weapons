import { reportExceptType } from '@/type/reportExceptType'
import { isEmpty } from '@/type/isEmpty'

/**
 * 获取函数的形参名
 * @param {Function} callback
 * @returns {Array}
 */
export function getCallbackArguments(callback: Function): Array<string> {
  reportExceptType('function', callback)

  const callbackStr: string = callback.toString()
  const match: RegExpExecArray | null = /[function[\s\S]*?]{0,}\(([\s\S]*?)\)/.exec(callbackStr)
  let argumentList: any = []

  if (match && !isEmpty(match[1])) {
    argumentList = match[1].replace(/\s/g, '').split(',')
  }
  return argumentList
}
