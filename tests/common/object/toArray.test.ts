import { expect, test } from '@jest/globals'
import { toArray } from '@/common/object/toArray.ts'

test('toArray', (): void => {
  expect(
    toArray({
      a: 1,
      b: 2
    })
  ).toEqual([1, 2])

  expect(
    toArray(
      {
        a: 1,
        b: 2
      },
      2
    )
  ).toEqual([
    {
      a: 1,
      b: 2
    }
  ])
})
