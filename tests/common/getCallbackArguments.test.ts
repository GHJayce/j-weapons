import { expect, test } from '@jest/globals'
import '@/common/string'
import { getCallbackArguments } from '@/common/getCallbackArguments.ts'

test('getCallbackArguments', (): void => {
  const fun1 = (a: any, b: any): any[] => {
    return [a, b]
  }
  expect(getCallbackArguments(fun1)).toEqual(['a', 'b'])

  const fun2 = function (a: any, b: any): any[] {
    return [a, b]
  }
  expect(getCallbackArguments(fun2)).toEqual(['a', 'b'])
})
