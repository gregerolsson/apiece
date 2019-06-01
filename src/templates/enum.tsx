import * as Op from '../operations';
import * as El from '../elements';
import { h } from 'preact';

interface EnumProps {
  element: El.EnumElement;
}

export function Enum(props: EnumProps) {
  const content = props.element.content;

  return (
    <div class="element-enum">
    </div>
  )
}
