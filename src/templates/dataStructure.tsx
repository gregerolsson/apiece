import * as Op from '../operations';
import * as El from '../elements';
import { h } from 'preact';

interface DataStructureProps {
  element: El.DataStructureElement;
}

export function DataStructure(props: DataStructureProps) {
  const content = props.element.content;

  return (
    <div class="element-dataStructure">
    </div>
  )
}
