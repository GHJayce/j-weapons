import { expect, test } from '@jest/globals'
import '@/common/string'

test('clueTrim', (): void => {
  const str1 = ' banana '
  expect(str1.clueTrim()).toBe('banana')

  const str2 = ' dbananad '
  expect(str2.clueTrim(' ,d')).toBe('banana')
})
