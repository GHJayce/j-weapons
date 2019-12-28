
const getUrlParams = require('../../src/url/getUrlParams');

test('getUrlParams', () => {
    const rootUrl = 'https://api.github.com/search/repositories';
    const urlQ = 'j-weapons';
    const urlPerPage = '1';
    const urlP = '1';
    const urlSort = 'stargazers_count';

    const url1 = rootUrl + '?q=j-weapons&per_page=1&p=1&sort=stargazers_count';
    expect(getUrlParams(url1)).toEqual({
        q: urlQ,
        per_page: urlPerPage,
        p: urlP,
        sort: urlSort,
    });


    const url2 = '?q=j-weapons&per_page=1&p=1&sort=stargazers_count#a=123&b=456';
    expect(getUrlParams(url2)).toEqual({
        q: urlQ,
        per_page: urlPerPage,
        p: urlP,
        sort: urlSort,
    });


    const url3 = rootUrl + '?q=j-weapons&per_page=1&p=1&sort=stargazers_count?abc=123?test=cc&b=123#&c=123';
    expect(getUrlParams(url3)).toEqual({
        q: urlQ,
        per_page: urlPerPage,
        p: urlP,
        sort: urlSort + '?abc=123?test=cc',
        b: '123',
    });
});