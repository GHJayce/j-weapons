import { expect, test } from '@jest/globals'
import '@/common/string'

test('getShowCounts', (): void => {
  const str1 = ' '
  expect(str1.getShowCounts()).toEqual({})

  const str2 = 'apple'
  expect(str2.getShowCounts()).toEqual({
    a: 1,
    p: 2,
    l: 1,
    e: 1
  })

  const str3 = '`11!@#$%^&*()_+-=aa[]\';\\\\,./<>?:"|{}'
  expect(str3.getShowCounts()).toEqual({
    '`': 1,
    1: 2,
    '!': 1,
    '@': 1,
    '#': 1,
    $: 1,
    '%': 1,
    '^': 1,
    '&': 1,
    '*': 1,
    '(': 1,
    ')': 1,
    _: 1,
    '+': 1,
    '-': 1,
    '=': 1,
    a: 2,
    '[': 1,
    ']': 1,
    "'": 1,
    ';': 1,
    '\\': 2,
    ',': 1,
    '.': 1,
    '/': 1,
    '<': 1,
    '>': 1,
    '?': 1,
    ':': 1,
    '"': 1,
    '|': 1,
    '{': 1,
    '}': 1
  })
})
