import { expect, test } from '@jest/globals'
import { getFirstKey } from '@/common/object/getFirstKey.ts'

test('getFirstKey', (): void => {
  expect(getFirstKey({})).toBe(undefined)

  expect(
    getFirstKey({
      a: 1,
      b: 2,
      c: 3
    })
  ).toBe('a')

  expect(
    getFirstKey({
      c: 3,
      b: 2,
      a: [1, 2, 3]
    })
  ).toBe('c')
})
