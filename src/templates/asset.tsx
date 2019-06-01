import * as Op from '../operations';
import * as El from '../elements';
import { h } from 'preact';

interface AssetProps {
  element: El.ParseResultElement;
}

export function Asset(props: AssetProps) {
  const content = props.element.content;

  return (
    <div class="element-asset">
      Asset
    </div>
  )
}
