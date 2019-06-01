import * as Op from '../operations';
import * as El from '../elements';
import { render } from './render';
import { h } from 'preact';

interface TransitionProps {
  element: El.TransitionElement;
}

export function Transition(props: TransitionProps) {
  const content = props.element.content;

  return (
    <div class="element-transition">
      {
        Op.map(content, c =>
          render(c)
        )
      }
    </div>
  )
}
