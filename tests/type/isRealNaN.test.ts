import { expect, test } from '@jest/globals'
import { isRealNaN } from '@/type/isRealNaN.ts'

test('isRealNaN', (): void => {
  expect(isRealNaN()).toBe(false)
  expect(isRealNaN(null)).toBe(false)
  expect(isRealNaN(undefined)).toBe(false)
  expect(isRealNaN([])).toBe(false)
  expect(isRealNaN([1, 2])).toBe(false)
  expect(isRealNaN({})).toBe(false)
  expect(isRealNaN({ a: 1 })).toBe(false)
  expect(isRealNaN(NaN)).toBe(true)
  expect(isRealNaN('NaN')).toBe(false)
})
