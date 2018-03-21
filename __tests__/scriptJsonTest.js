import {scriptJson} from '../index.js';

test('scriptJson', () => {
    expect(scriptJson({k1: 'v1'}))
        .toBe('<script type="text/javascript">{"k1":"v1"}</script><div class="data-rendering"></div>');
});
