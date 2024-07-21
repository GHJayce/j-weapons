import { expect, test } from '@jest/globals'
import '@/common/string'

test('sprintf', (): void => {
  const a = "Welcome back %s, It's a %s moment."
  expect(a.sprintf('Jayce', 'wonderful')).toBe("Welcome back Jayce, It's a wonderful moment.")
  expect(a.sprintf()).toBe("Welcome back %s, It's a %s moment.")
})
