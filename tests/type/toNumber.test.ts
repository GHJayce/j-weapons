import { expect, test } from '@jest/globals'
import { toNumber } from '@/type/toNumber.ts'

test('toNumber', (): void => {
  expect(toNumber('1')).toEqual(1)
})
