import { Marked, Renderer } from 'marked-ts';
import { h } from 'preact';

Marked.setOptions({
  renderer: new Renderer,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

interface MarkdownProps {
  markup: string;
}

export function Markdown(props: MarkdownProps) {
  const markup = { __html: Marked.parse(props.markup) };

  return (
    <div class="markdown" dangerouslySetInnerHTML={markup} />
  )
}