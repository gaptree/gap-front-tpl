import {tpl} from '../index.js';

test('tpl', () => {
    expect(tpl`
    <div>
        <h1>Gap Front Tpl</h1>
        <pre>$${'<code>coding here</code>'}</pre>
    </div>
    `).toBe('<div> <h1>Gap Front Tpl</h1> <pre>&lt;code&gt;coding here&lt;/code&gt;</pre> </div>');
});
