
require('../../../src/common/string');

test('sprintf', () => {
    const a = 'Welcome back %s, It\'s a %s moment.';
    expect(a.sprintf('Jayce', 'wonderful')).toBe('Welcome back Jayce, It\'s a wonderful moment.');
    expect(a.sprintf()).toBe('Welcome back %s, It\'s a %s moment.');
});