import { h, ComponentChildren } from 'preact';

interface StructuredListProps {
  captions: string[];
  children?: ComponentChildren;
  class?: string;
}

export function StructuredList(props: StructuredListProps) {
  return (
    <section class={`bx--structured-list ${props.class}`}>
      <div class="bx--structured-list-thead">
        <div class="bx--structured-list-row bx--structured-list-row--header-row">
          {
            props.captions.map(caption =>
              <div class="bx--structured-list-th">{caption}</div>
            )
          }
        </div>
      </div>
      <div class="bx--structured-list-tbody">
        {props.children}
      </div>
    </section>    
  )
}

interface StructuredListRowProps {
  children?: ComponentChildren;
}

export function StructuredListRow(props: StructuredListRowProps) {
  const cells = Array.isArray(props.children)
    ? props.children
    : [props.children]

  return (
    <div class="bx--structured-list-row">
      {
        cells.map(child =>
          <div class="bx--structured-list-td bx--structured-list-content--nowrap">
            {child}
          </div>
        )
      }
    </div>
  )
}