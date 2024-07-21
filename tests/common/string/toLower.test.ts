import { expect, test } from '@jest/globals'
import '@/common/string'

test('toLower', (): void => {
  const str1 = 'BANANA'
  expect(str1.toLower()).toBe('banana')

  const str2 = 'BAnana'
  expect(str2.toLower()).toBe('banana')
})
