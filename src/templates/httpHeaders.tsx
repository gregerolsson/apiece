import * as Op from '../operations';
import * as El from '../elements';
import { h } from 'preact';

interface HttpHeadersProps {
  element: El.HttpHeadersElement;
}

export function HttpHeaders(props: HttpHeadersProps) {
  const content = props.element.content;

  return (
    <div class="element-httpHeaders">
    </div>
  )
}
