import { expect, test } from '@jest/globals'
import { pluck } from '@/common/pluck.ts'

test('pluck', (): void => {
  const arr1 = [
    { id: 1, name: 'jay' },
    { id: 2, name: 'jack' },
    { id: 3, name: 'jayce' }
  ]
  expect(pluck(arr1, 'id')).toEqual([1, 2, 3])
  expect(pluck(arr1, 'name')).toEqual(['jay', 'jack', 'jayce'])
  expect(pluck(arr1, 'name', 'id')).toEqual({
    1: 'jay',
    2: 'jack',
    3: 'jayce'
  })
  expect(pluck(arr1, null, 'id')).toEqual({
    1: { id: 1, name: 'jay' },
    2: { id: 2, name: 'jack' },
    3: { id: 3, name: 'jayce' }
  })
})
