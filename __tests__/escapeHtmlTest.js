import {escapeHtml} from '../index.js';

test('escapeHtml', () => {
    expect(escapeHtml('<p>hello</p>'))
        .toBe('&lt;p&gt;hello&lt;/p&gt;');
});
