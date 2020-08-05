
require('../../../src/common/string');

test('batchReplace', () => {
    const str1 = 'bdqdqd/\\.-=+*?[]()^{}$!|:&%#';

    expect(str1.batchReplace({
        d: 'a',
        q: 'n',
        '/': 1,
        '\\': 2,
        '.': 3,
        '-': 4,
        '=': 5,
        '+': 6,
        '*': 7,
        '?': 8,
        '[': 9,
        ']': 10,
        '(': 11,
        ')': 12,
        '^': 13,
        '{': 14,
        '}': 15,
        '$': 16,
        '!': 17,
        '|': 18,
        ':': 19,
        '&': 20,
        '%': 21,
        '#': 22,
    })).toBe('banana12345678910111213141516171819202122');

    const str2 = 'a * (b + c)';
    const str3 = str2.batchReplace({
        a: 10,
        b: 45,
        c: 55,
    });
    expect(str3).toBe('10 * (45 + 55)');

    expect(eval(str3)).toBe(1000);
});