import { Marked as Markdown, Renderer } from 'marked-ts';
import * as El from '../elements';
import * as Op from '../operations';
import { h } from 'preact';

Markdown.setOptions({
  renderer: new Renderer,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

interface RequestProps {
  element: El.CopyElement;
}

export function Copy(props: RequestProps) {
  const markup = { __html: Markdown.parse(Op.string(props.element.content)) };

  return (
    <div class="element-copy">
      <div dangerouslySetInnerHTML={markup}></div>      
    </div>
  )
}