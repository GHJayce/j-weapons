
const {getUrlParam} = require('../../src/url/getUrlParam');

test('getUrlParam', () => {

    const rootUrl = 'https://api.github.com/search/repositories';
    const urlQ = 'j-weapons';
    const urlPerPage = '1';
    const urlP = '1';
    const urlSort = 'stargazers_count';

    const url1 = rootUrl + '?q=j-weapons&per_page=1&p=1&sort=stargazers_count';
    expect(getUrlParam(url1, 'q')).toBe(urlQ);
    expect(getUrlParam(url1, 'author')).toBe(undefined);
    expect(getUrlParam(url1, 'author', 'GHBJayce')).toBe('GHBJayce');
    expect(getUrlParam(url1, 'object', {a:1})).toEqual({a:1});

});