import * as Op from '../operations';
import * as El from '../elements';
import * as UI from './ui';
import { render } from './render';
import { h } from 'preact';

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
        </main>
      </body>
    </html>
  )
}