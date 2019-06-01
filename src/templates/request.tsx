import * as E from '../elements';
import { h } from 'preact';

interface RequestProps {
  element: E.HttpRequestElement;
}

export function Request(props: RequestProps) {
  return (
    <div class="element-request">
      <h2>{props.element.meta}</h2>
    </div>
  )
}