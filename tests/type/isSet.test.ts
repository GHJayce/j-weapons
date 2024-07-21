import { expect, test } from '@jest/globals'
import { isSet } from '@/type/isSet.ts'

test('isSet', (): void => {
  expect(isSet()).toBe(false)
  expect(isSet(undefined)).toBe(false)
  expect(isSet(null)).toBe(false)
  expect(isSet(false)).toBe(false)
  expect(isSet(NaN)).toBe(false)
  expect(isSet('')).toBe(true)
  expect(isSet([])).toBe(true)
  expect(isSet({})).toBe(true)
  expect(isSet(0)).toBe(true)
})
