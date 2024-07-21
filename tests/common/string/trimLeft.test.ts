import { expect, test } from '@jest/globals'
import '@/common/string'

test('clueTrimLeft', (): void => {
  const str1 = ' banana '
  expect(str1.clueTrimLeft()).toBe('banana ')

  const str2 = ' dbananad '
  expect(str2.clueTrimLeft(' ,d')).toBe('bananad ')
})
