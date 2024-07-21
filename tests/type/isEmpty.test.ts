import { expect, test } from '@jest/globals'
import '@/common/string'
import { isEmpty } from '@/type/isEmpty.ts'
import { JWeapons } from '@type/index'

test('isEmpty', (): void => {
  let obj: JWeapons.ObjectAny = {}

  expect(isEmpty(null)).toBe(true)
  expect(isEmpty('null')).toBe(true)
  expect(isEmpty('null', 1)).toBe(false)

  expect(isEmpty(undefined)).toBe(true)
  expect(isEmpty('undefined')).toBe(true)
  expect(isEmpty('undefined', 1)).toBe(false)

  expect(isEmpty(0)).toBe(true)
  expect(isEmpty('0')).toBe(true)
  expect(isEmpty('0', 1)).toBe(false)

  expect(isEmpty(false)).toBe(true)
  expect(isEmpty('false')).toBe(true)
  expect(isEmpty('false', 1)).toBe(false)

  expect(isEmpty(NaN)).toBe(true)
  expect(isEmpty('NaN')).toBe(true)
  expect(isEmpty('NaN', 1)).toBe(false)

  expect(isEmpty([])).toBe(true)
  expect(isEmpty([0])).toBe(false)

  expect(isEmpty({})).toBe(true)
  expect(isEmpty(obj.a)).toBe(true)
  expect(isEmpty({ a: 1 })).toBe(false)

  expect(isEmpty('a')).toBe(false)

  expect(isEmpty(true)).toBe(false)

  expect(isEmpty(new ArrayBuffer(0))).toBe(true)
  expect(isEmpty(new ArrayBuffer(2))).toBe(false)

  expect(isEmpty(new Date())).toBe(false)

  // expect(isEmpty(new File(['JW'], 'readme.md', {
  //     type: 'text/plain'
  // }))).toBe(false)

  expect(isEmpty(function () {})).toBe(false)
  expect(isEmpty(() => {})).toBe(false)

  expect(isEmpty(Math)).toBe(false)

  expect(isEmpty(new RegExp(''))).toBe(false)
})
