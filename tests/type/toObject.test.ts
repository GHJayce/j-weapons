import { expect, test } from '@jest/globals'
import { toObject } from '@/type/toObject.ts'

test('toObject', (): void => {
  expect(toObject([1, 2])).toEqual({
    0: 1,
    1: 2
  })

  expect(toObject('abc')).toEqual({
    0: 'a',
    1: 'b',
    2: 'c'
  })
})
