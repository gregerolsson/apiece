import * as El from '../elements';
import * as Op from '../operations';
import * as UI from './ui';
import { Markdown } from './markdown';
import { h } from 'preact';

interface RequestProps {
  element: El.CopyElement;
}

export function Copy(props: RequestProps) {
  const markup = Op.string(props.element.content);

  return (
    <div class="element-copy">
      <Markdown markup={markup} />
      <UI.StructuredList class="apidoc" captions={['Class', 'Property', 'px / rem', 'Spacing tokens']}>
        <UI.StructuredListRow>
          <code>.bx--list-box</code>
          <span>height</span>
          <span>40 / 2.5</span>
          <span>&mdash;</span>
        </UI.StructuredListRow>
        <UI.StructuredListRow>
          <code>.bx--list-box__menu-item</code>
          <span>height</span>
          <span>40 / 2.5</span>
          <code>$spacing-05</code>
        </UI.StructuredListRow>
      </UI.StructuredList>
    </div>
  )
}