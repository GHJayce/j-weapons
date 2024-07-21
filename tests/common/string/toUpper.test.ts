import { expect, test } from '@jest/globals'
import '@/common/string'

test('toUpper', (): void => {
  const str1 = 'banana'
  expect(str1.toUpper()).toBe('BANANA')

  const str2 = 'BAnana'
  expect(str2.toUpper()).toBe('BANANA')
})
