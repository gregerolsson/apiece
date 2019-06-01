import * as Op from '../operations';
import * as El from '../elements';
import { render } from './render';
import { h } from 'preact';

interface HttpRequestProps {
  element: El.HttpRequestElement;
}

export function HttpRequest(props: HttpRequestProps) {
  const content = props.element.content;

  return (
    <div class="element-httpRequest">
      {
        Op.map(content, c =>
          render(c)
        )
      }      
    </div>
  )
}
