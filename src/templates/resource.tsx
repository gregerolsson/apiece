import * as Op from '../operations';
import * as El from '../elements';
import { render } from './render';
import { h } from 'preact';

interface ResourceProps {
  element: El.ResourceElement;
}

export function Resource(props: ResourceProps) {
  const { attributes, content } = props.element;

  return (
    <div class="element-resource">
      <h2>{Op.title(props.element)} {Op.string(attributes.href)}</h2>
      {
        Op.map(content, c =>
          render(c)
        )
      }
    </div>
  )
}
