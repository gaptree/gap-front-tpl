# Gap Front Tpl

## Install

```
$ yarn add gap-node-tpl
```

## Usage

```javascript
import {tpl, escapeHtml, scriptJson} from 'gap-front-tpl';

escapeHtml('<p>hello</p>'); //'&lt;p&gt;hello&lt;/p&gt;'

scriptJson({k1: 'v1'}); // '<script type="text/javascript">{"k1":"v1"}</script><div class="data-rendering"></div>'

tpl`
<div>
    <h1>Gap Front Tpl</h1>
    <pre>$${'<code>coding here</code>'}</pre>
</div>
`
/*
<div> <h1>Gap Front Tpl</h1> <pre>&lt;code&gt;coding here&lt;/code&gt;</pre> </div>
*/

```
