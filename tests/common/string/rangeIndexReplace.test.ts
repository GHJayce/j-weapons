import { expect, test } from '@jest/globals'
import '@/common/string'

test('rangeIndexReplace', (): void => {
  const str1 = 'zxcvbnm'
  expect(str1.rangeIndexReplace('abc')).toBe(str1)
  expect(str1.rangeIndexReplace('abc', 3)).toBe('zxcabc')
  expect(str1.rangeIndexReplace('abc', 3, 4)).toBe('zxcabcnm')
  expect(str1.rangeIndexReplace('abc', 6, 6)).toBe('zxcvbnabc')
  expect(str1.rangeIndexReplace('abc', 7, 6)).toBe(str1)
  expect(str1.rangeIndexReplace('abc', 7, 7)).toBe(str1 + 'abc')
  expect(str1.rangeIndexReplace('abc', 7, 8)).toBe(str1 + 'abc')

  const str2 = ''
  expect(str2.rangeIndexReplace('abc', 0, 0)).toBe('abc')
})
