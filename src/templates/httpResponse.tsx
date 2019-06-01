import * as Op from '../operations';
import * as El from '../elements';
import { render } from './render';
import { h } from 'preact';

interface HttpResponseProps {
  element: El.HttpResponseElement;
}

export function HttpResponse(props: HttpResponseProps) {
  const content = props.element.content;

  return (
    <div class="element-httpResponse">
      {
        Op.map(content, c =>
          render(c)
        )
      }      
    </div>
  )
}
