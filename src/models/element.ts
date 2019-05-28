
export type ElementType =
  "annotation"      |
  "array"           |
  "asset"           |
  "boolean"         |
  "category"        |
  "copy"            |
  "dataStructure"   |
  "enum"            |
  "extend"          |
  "fail"            |
  "href"            |
  "hrefVariables"   |
  "httpHeaders"     |
  "httpRequest"     |
  "httpResponse"    |
  "httpTransaction" |
  "link"            |
  "member"          |
  "null"            |
  "number"          |
  "object"          |
  "option"          |
  "parseResult"     |
  "ref"             |
  "resource"        |
  "select"          |
  "sourceMap"       |
  "string"          |
  "templatedHref"   |
  "transition"

export type AttributesType<T = Element<any>> = { [name: string]: T }

export interface MetaType {
  id?: StringElement;
  classes?: ArrayElement<AnyElement>;
  title?: string;
  description?: StringElement;
  links?: LinkElement[];
}

export interface Element<ContentType, AttributesType = {}> {
  element: ElementType;
  meta?: MetaType,
  attributes?: AttributesType;
  content?: ContentType;
}

export type AnyElement = Element<any>;

/*
 * ...
 */
export type StringPrimitive = string | StringElement;
export type BooleanPrimitive = boolean | BooleanElement;
export type NumberPrimitive = number | NumberElement;
export type NullPrimitive = null | NullElement;
export type ArrayPrimitive<T> = T[] | ArrayElement<T>; 

/**
 * export type with domain of all finite character strings.
 */
export interface StringElement extends Element<string> {
  element: "string";
  content: string;
  default?: StringPrimitive;
  typedAttributes?: StringPrimitive[];
  samples?: StringPrimitive[];
}

export interface LinkElement {
  element: "link";
  attributes: {
    relation: StringPrimitive;
    href: StringPrimitive;
  }
}

export interface ArrayElement<T> extends Element<T[]> {
  element: "array"
}

export interface NullElement {

}

export interface BooleanElement {
  content: boolean;
}

export interface NumberElement {
  content: number;
}

export interface StringElement extends Element<string> {
  
}

let s: StringElement;

export interface MemberContent {
  key: StringElement;
  value: AnyElement;
}

export interface MemberAttributes {

}

export interface MemberElement extends Element<MemberContent> {

}

export type ObjectContent =
  MemberElement |
  ExtendElement |
  SelectElement |
  RefElement;

export interface ObjectElement extends Element<ArrayElement<ObjectContent>> {

}

export interface EnumAttributes {
  enumerations: ArrayElement<AnyElement>;
  default: AnyElement;
}

export interface EnumElement extends Element<AnyElement, EnumAttributes> {

}

export interface OptionElement {

}

export interface SelectElement extends Element<ArrayElement<OptionElement>> {

}

export interface ExtendElement {

}

export interface RefElement {

}

export type ParseResultContent = ArrayPrimitive<CategoryElement | AnnotationElement>;

export interface ParseResultElement extends Element<ParseResultContent> {
  element: "parseResult";
}

export interface ResourceElement extends Element<null> {
  element: "resource";
}

export interface CategoryAttributes {
  metadata: ArrayPrimitive<any>;
  version: string;
}

export interface CategoryElement extends Element<any> {
  element: "category"
}

export type SourceMapContent = ArrayElement<ArrayElement<NumberPrimitive>>;

export interface SourceMapElement extends Element<SourceMapContent> {

}

export interface HrefElement extends Element<string> {
  element: "href"
}

export interface TemplatedHrefElement extends Element<string> {
  element: "templatedHref"
}

export interface HrefVariablesElement {

}

export interface AnnotationAttributes {
  code: NumberPrimitive;
  sourceMap: ArrayElement<SourceMapElement>;
}

export interface AnnotationElement extends Element<string, AnnotationAttributes> {
  element: 'annotation'
}

function find<E>(root: AnyElement, type: ElementType) {
  if (root.element === type)  {
    return root;
  }

  root.content
}

/**
 * Iterates over an ArrayPrimitive which may be either an action Array or
 * an ArrayElement.
 * 
 * @param array ArrayElement<T> | T[] to iterate over
 * @param iter Iterator function
 */
export function forEach<T>(array: ArrayPrimitive<T>, iter: (e: T) => void) {
  if (Array.isArray(array)) {
    array.forEach(iter);
  }
  else {
    array.content.forEach(iter);
  }
}

function processElement() {

}

function processResource(e: ResourceElement) {

}