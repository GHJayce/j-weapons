import { expect, test } from '@jest/globals'
import '@/common/string'

test('clueTrimRight', (): void => {
  const str1 = ' banana '
  expect(str1.clueTrimRight()).toBe(' banana')

  const str2 = ' dbananad '
  expect(str2.clueTrimRight(' ,d')).toBe(' dbanana')
})
