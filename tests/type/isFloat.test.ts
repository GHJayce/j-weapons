import { expect, test } from '@jest/globals'
import { isFloat } from '@/type/isFloat.ts'

test('isFloat', (): void => {
  expect(isFloat('banana')).toBe(false)
  expect(isFloat(1)).toBe(false)
  expect(isFloat(1.1)).toBe(true)
  expect(isFloat(NaN)).toBe(false)
  expect(isFloat([])).toBe(false)
  expect(isFloat({})).toBe(false)
  expect(isFloat(true)).toBe(false)
  expect(isFloat(() => {})).toBe(false)
  expect(isFloat(null)).toBe(false)
  expect(isFloat(undefined)).toBe(false)
})
