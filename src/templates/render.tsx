import { h } from 'preact'
import * as El from '../elements';
import { Asset } from './asset';
import { Category } from './category';
import { Copy } from './copy';
import { DataStructure } from './dataStructure';
import { Enum } from './enum';
import { HttpHeaders } from './httpHeaders';
import { HttpRequest } from './httpRequest';
import { HttpResponse } from './httpResponse';
import { HttpTransaction } from './httpTransaction';
import { ParseResult } from 'templates';
import { Resource } from './resource';
import { TemplatedHref } from './templatedHref';
import { Transition } from './transition';

interface ComponentProps<T> {
  element: El.Element<T>
}

type ElementComponent = (props: ComponentProps<any>) => JSX.Element

export const components: Partial<{ [key in El.ElementType]: ElementComponent }> = {
  asset: Asset,
  category: Category,
  copy: Copy,
  dataStructure: DataStructure,
  enum: Enum,
  httpHeaders: HttpHeaders,
  httpRequest: HttpRequest,
  httpResponse: HttpResponse,
  httpTransaction: HttpTransaction,
  parseResult: ParseResult,
  resource: Resource,
  transition: Transition,
  templatedHref: TemplatedHref
}

export function render(el: El.AnyElement) {
  const Component = components[el.element];
  return <Component element={el} />
}