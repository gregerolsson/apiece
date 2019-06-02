import * as Op from '../operations';
import * as El from '../elements';
import * as UI from './ui';
import { render } from './render';
import { h } from 'preact';

import schema from '../tests/schemas/page';

interface ParseResultProps {
  element: El.ParseResultElement;
}

export function ParseResult(props: ParseResultProps) {
  const content = props.element.content;

  return (
    <html>
      <head>
        <title>Apiece</title>
        <link rel="stylesheet" href="./api.css" type="text/css" />
      </head>
      <body>
        <main class="element-parseResult">
          {
            Op.map(content, c =>
              render(c)
            )
          }
          <h1>Schema</h1>
          <UI.Schema schema={schema} />          
        </main>
      </body>
    </html>
  )
}