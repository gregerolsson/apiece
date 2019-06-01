import * as UI from './templates';
import { render } from 'preact-render-to-string';
import { h } from 'preact';

import result from './tests/b';

const vnode = <UI.ParseResult element={result} />;

console.log(vnode)

//console.log('<!DOCTYPE html>')
//console.log(render(<UI.ParseResult element={result} />));