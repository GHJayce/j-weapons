import { expect, test } from '@jest/globals'
import '@/common/string'

test('indexReplace', (): void => {
  const str1 = 'banena'
  expect(str1.indexReplace('a', 3)).toBe('banana')
})
