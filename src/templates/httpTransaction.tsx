import * as Op from '../operations';
import * as El from '../elements';
import { render } from './render';
import { h } from 'preact';

interface HttpTransactionProps {
  element: El.HttpTransactionElement;
}

export function HttpTransaction(props: HttpTransactionProps) {
  const content = props.element.content;

  return (
    <div class="element-httpTransaction">
      {
        Op.map(content, c =>
          render(c)
        )
      }      
    </div>
  )
}
