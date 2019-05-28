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

export type AttributesType = { [name: string]: AnyElement }

/**
 * ...
 */
export interface PrimitiveAttributes<T> {
  typeAttributes?: ArrayPrimitive<StringPrimitive>;
  samples?: ArrayPrimitive<T>;
  default?: T;
}

/**
 * Any of the following properties MAY be an entry of any Element’s `meta`.
 * 
 * @see http://apielements.org/en/latest/element-definitions.html#reserved-meta-properties
 */
export interface MetaType {

  /** Unique name of this Element; defines a named type; MUST be unique with respect to other `id`s in a document */
  id?: StringPrimitive;

  /** Pointer to referenced element or type */
  ref?: RefElement;

  /** Classifications for given element */
  classes?: ArrayPrimitive<StringPrimitive>;

  /** Human-readable title of element */
  title?: StringPrimitive;

  /** Human-readable description of element */
  description?: StringPrimitive;

  /** Meta links for a given element */
  links?: ArrayPrimitive<LinkElement>;
}

/**
 * An Element SHALL be a tuple (`element`, `meta`, `attributes`, `content`) where
 * 
 * `element` SHALL be a non-empty, finite character string identifying the type of this Element
 * `meta` SHALL be a set of properties, some of which have reserved semantics
 * `attributes` SHALL be a set of properties defined by the type of this Element
 * `content` SHALL be defined by the type of this Element
 *
 * @see http://apielements.org/en/latest/element-definitions.html#element
 */
export interface Element<ContentType, AttributesType = {}> {

  /** A non-empty, finite character string identifying the type of this Element */
  element: ElementType;

  /** A set of properties, some of which have reserved semantics @see MetaType */
  meta?: MetaType,

  /** A set of properties defined by the type of this Element */
  attributes?: AttributesType;

  /** Element value defined by the type of this Element */
  content?: ContentType;
}

/*
 * ...
 */
export type StringPrimitive = string | StringElement;
export type BooleanPrimitive = boolean | BooleanElement;
export type NumberPrimitive = number | NumberElement;
export type NullPrimitive = null | NullElement;
export type ArrayPrimitive<T> = T[] | ArrayElement<T>; 

/** Any type of element */
export type AnyElement = Element<any>;

/*
export type AnyPrimitive =
  StringPrimitive  |
  BooleanPrimitive |
  NumberPrimitive  |
  NullPrimitive    |
  ArrayPrimitive<any>

export type AnyElementOrPrimitive = AnyElement | AnyPrimitive;
*/

/*
 * - - - - - - - - - - - - - - - -
 */

type StringAttributes = PrimitiveAttributes<StringPrimitive>;

/**
 * Type with domain of all finite character strings.
 * 
 * @see http://apielements.org/en/latest/element-definitions.html#string-element
 */
export interface StringElement extends Element<string, StringAttributes> {
  element: "string";
}

type ArrayAttributes<T> = PrimitiveAttributes<ArrayPrimitive<T>>;

export interface ArrayElement<T> extends Element<T[], ArrayAttributes<T>> {
  element: "array";
}

export interface NullElement {
  element: "null";
}

type BooleanAttributes = PrimitiveAttributes<BooleanPrimitive>;

export interface BooleanElement extends Element<boolean, BooleanAttributes> {
  element: "null";
}

type NumberAttributes = PrimitiveAttributes<NumberPrimitive>;

export interface NumberElement extends Element<number, NumberAttributes> {
  element: "number";
}

export interface MemberContent {
  key: StringElement;
  value: AnyElement;
}

export interface MemberAttributes {
  typeAttributes: {
    required: StringPrimitive;
    optional: StringPrimitive;
  }
  variable: BooleanPrimitive;
}

export interface MemberElement extends Element<MemberContent, MemberAttributes> {
  element: "member";
}

export type ObjectContent =
  MemberElement |
  ExtendElement |
  SelectElement |
  RefElement;

export type ObjectAttributes = PrimitiveAttributes<ObjectElement>;

export interface ObjectElement extends Element<ArrayElement<ObjectContent>> {
  element: "object";
}

export interface EnumAttributes extends PrimitiveAttributes<AnyElement> {
  enumerations: ArrayElement<AnyElement>;
}

export interface EnumElement extends Element<AnyElement, EnumAttributes> {
  element: "enum";
}

export interface OptionElement {
  element: "option";
}

export interface SelectElement extends Element<ArrayElement<OptionElement>> {
  element: "select";
}

export interface ExtendElement {
  element: "extend";
}

/**
 * Hyperlinking MAY be used to link to other resources, provide links to instructions on how to process a
 * given element (by way of a profile or other means), and may be used to provide meta data about the element
 * in which it’s found. The meaning and purpose of the hyperlink is defined by the link relation according
 * to RFC 5988.
 * 
 * @see http://apielements.org/en/latest/element-definitions.html#link-element
 * @see http://apielements.org/en/latest/element-definitions.html#profiles
 * @see https://tools.ietf.org/html/rfc5988
 */
export interface LinkElement {
  element: "link";

  attributes: {
    relation: StringPrimitive;
    href: StringPrimitive;
  }
}

export interface RefElement {
  element: "ref";
}

export type ParseResultContent =
  CategoryElement |
  AnnotationElement;

export interface ParseResultElement extends Element<ArrayPrimitive<ParseResultContent>> {
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
  element: "sourceMap";
}

export interface HrefElement extends Element<string> {
  element: "href"
}

export interface TemplatedHrefElement extends Element<string> {
  element: "templatedHref"
}

export interface HrefVariablesElement {
  element: "hrefVariables";
}

export interface AnnotationAttributes {
  code: NumberPrimitive;
  sourceMap: ArrayElement<SourceMapElement>;
}

export interface AnnotationElement extends Element<string, AnnotationAttributes> {
  element: 'annotation'
}
