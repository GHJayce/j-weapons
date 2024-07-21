import { expect, test } from '@jest/globals'
import '@/common/string'

test('getShowCount', (): void => {
  const str1: string = 'banana'
  expect(str1.getShowCount('c')).toBe(0)
  expect(str1.getShowCount('n')).toBe(2)

  const str2: string = 'apple'
  expect(str2.getShowCount('a')).toBe(1)
})
