import { expect, test } from '@jest/globals'
import { getLastVal } from '@/common/getLastVal.ts'

test('getLastVal', (): void => {
  expect(getLastVal('123')).toBe('3')

  expect(getLastVal([1, 2, 3])).toBe(3)

  expect(
    getLastVal([
      2,
      3,
      {
        a: 1
      }
    ])
  ).toEqual({
    a: 1
  })

  expect(
    getLastVal({
      a: 1,
      b: 2,
      c: 3
    })
  ).toBe(3)

  expect(
    getLastVal({
      b: 2,
      c: 3,
      a: [1, 2, 3]
    })
  ).toEqual([1, 2, 3])

  expect(
    getLastVal({
      b: 2,
      c: 3,
      a: {
        aa: 1,
        bb: 2
      }
    })
  ).toEqual({
    aa: 1,
    bb: 2
  })
})
