import { expect, test } from '@jest/globals'
import '@/common/string'
import { setUrlParams } from '@/url/setUrlParams.ts'

test('setUrlParams', (): void => {
  const urlRoot = 'https://github.com/ghbjayce/j-weapons'

  const url1 = urlRoot
  expect(setUrlParams(url1)).toBe(url1)
  expect(setUrlParams(url1, 'a')).toBe(url1 + '?a=')
  expect(setUrlParams(url1, 'a', 0)).toBe(url1 + '?a=0')
  expect(setUrlParams(url1, 'a', true)).toBe(url1 + '?a=true')
  expect(setUrlParams(url1, 'a', 1.1)).toBe(url1 + '?a=1.1')
  expect(setUrlParams(url1, 'a', 'abc')).toBe(url1 + '?a=abc')
  expect(setUrlParams(url1, 'a', 'abc&a=1')).toBe(url1 + '?a=abc&a=1')
  expect(
    setUrlParams(url1, {
      a: 1,
      b: 'abc'
    })
  ).toBe(urlRoot + '?a=1&b=abc')

  const url2 = urlRoot + '?a=1&b=2?c=3&d=4#e=5'
  expect(setUrlParams(url2, 'a')).toBe(urlRoot + '?a=&b=2?c=3&d=4#e=5')
  expect(setUrlParams(url2, 'e', 6)).toBe(urlRoot + '?a=1&b=2?c=3&d=4&e=6#e=5')
  expect(setUrlParams(url2, 'b', 2)).toBe(urlRoot + '?a=1&b=2&d=4#e=5')

  const url3 = ''
  expect(setUrlParams(url3)).toBe('')
  expect(setUrlParams(url3, 'a')).toBe('?a=')
  expect(setUrlParams(url3, 'a', 1)).toBe('?a=1')
})
