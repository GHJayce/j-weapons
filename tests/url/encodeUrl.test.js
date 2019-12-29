
const {encodeUrl} = require('../../src/url/encodeUrl');

test('encodeUrl', () => {

    const str1 = 'https://api.github.com/search/repositories?q=j-weapons&per_page=1&p=1&sort=stargazers_count';
    expect(encodeUrl(str1)).toBe('https%3A%2F%2Fapi.github.com%2Fsearch%2Frepositories%3Fq%3Dj-weapons%26per_page%3D1%26p%3D1%26sort%3Dstargazers_count');

});