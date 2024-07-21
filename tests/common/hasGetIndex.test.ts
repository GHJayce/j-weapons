import { expect, test } from '@jest/globals'
import { hasGetIndex } from '@/common/hasGetIndex.ts'

test('hasGetIndex', (): void => {
  const str1 = ''
  expect(hasGetIndex(str1, 'a')).toBe(-1)

  const str2 = 'banana'
  expect(hasGetIndex(str2, 'c')).toBe(-1)

  const str3 = 'banana  .'
  expect(hasGetIndex(str3, '.')).toBe(8)

  const str4: any[] = []
  expect(hasGetIndex(str4, 'a')).toBe(-1)

  const str5 = ['a', 'b']
  expect(hasGetIndex(str5, 'a')).toBe(0)

  const str6 = {
    c: 1,
    a: 1,
    b: 2
  }
  expect(hasGetIndex(str6, 1)).toBe('c')

  const str7 = {
    c: 1,
    a: 1,
    b: 2
  }
  expect(hasGetIndex(str7, '1')).toBe(-1)
})
