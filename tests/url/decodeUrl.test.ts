import { expect, test } from '@jest/globals'
import { decodeUrl } from '@/url/decodeUrl.ts'

test('decodeUrl', (): void => {
  const str1 =
    'https%3a%2f%2fapi.github.com%2fsearch%2frepositories%3fq%3dj-weapons%26per_page%3d1%26p%3d1%26sort%3dstargazers_count'
  expect(decodeUrl(str1)).toBe(
    'https://api.github.com/search/repositories?q=j-weapons&per_page=1&p=1&sort=stargazers_count'
  )
})
