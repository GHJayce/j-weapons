import { expect, test } from '@jest/globals'
import { has } from '@/common/has.ts'

test('has', (): void => {
  const str1 = ''
  expect(has(str1, 'a')).toBe(false)

  const str2 = 'banana'
  expect(has(str2, 'c')).toBe(false)

  const str4: any[] = []
  expect(has(str4, 'a')).toBe(false)

  const str6 = {}
  expect(has(str6, 1)).toBe(false)

  const str7 = {
    c: 1,
    a: 1,
    b: 2
  }
  expect(has(str7, 1)).toBe(true)
  expect(has(str7, 2)).toBe(true)
  expect(has(str7, 3)).toBe(false)
})
