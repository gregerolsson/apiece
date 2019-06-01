/** The `element` attribute on an element may be any of these strings */
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

/** Any type of known element */
export type AnyElement =
  AnnotationElement      |
  ArrayElement<any>      |
  AssetElement           |
  BooleanElement         |
  CategoryElement        |
  CopyElement            |
  DataStructureElement   |
  EnumElement            |
  ExtendElement          |
  FailElement            |
  HrefElement            |
  HrefVariablesElement   |
  HttpHeadersElement     |
  HttpRequestElement     |
  HttpResponseElement    |
  HttpTransactionElement |
  LinkElement            |
  MemberElement          |
  NullElement            |
  NumberElement          |
  ObjectElement          |
  OptionElement          |
  ParseResultElement     |
  RefElement             |
  ResourceElement        |
  SelectElement          |
  SourceMapElement       |
  StringElement          |
  TemplatedHrefElement   |
  TransitionElement

/** Any type of element used for data structures */
export type AnyDataStructureElement =
  NullPrimitive       |
  BooleanPrimitive    |
  NumberPrimitive     |
  StringPrimitive     |
  ArrayPrimitive<any> |
  ObjectElement       |
  MemberElement       |
  EnumElement         |
  SelectElement       |
  ExtendElement       |
  RefElement

/*
 * ...
 */
export type StringPrimitive = string | StringElement;
export type BooleanPrimitive = boolean | BooleanElement;
export type NumberPrimitive = number | NumberElement;
export type NullPrimitive = null | NullElement;
export type ArrayPrimitive<T> = T[] | ArrayElement<T>; 
export type TemplatedHrefPrimitive = string | TemplatedHrefElement;

/** Attributes is a key/value map of names to elements */
export type AttributesType = { [name: string]: AnyElement }

/**
 * ...
 */
export interface PrimitiveAttributes<ContentType> {
  typeAttributes?: ArrayPrimitive<StringPrimitive>;
  samples?: ArrayPrimitive<ContentType>;
  default?: ContentType;
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
 * An Element SHALL be a tuple (`element`, `meta`, `attributes`, `content`)
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
 * Element Definitions
 */

export interface AnnotationAttributes {
  code: NumberPrimitive;
  sourceMap: ArrayPrimitive<SourceMapElement>;
}

/**
 * @see https://apielements.org/en/latest/element-definitions.html#annotation-string
 */
export interface AnnotationElement extends Element<string, AnnotationAttributes> {
  element: 'annotation'
}

type ArrayAttributes<T> = PrimitiveAttributes<ArrayPrimitive<T>>;

/**
 * @see https://apielements.org/en/latest/element-definitions.html#array-element
 */
export interface ArrayElement<T> extends Element<T[], ArrayAttributes<T>> {
  element: "array";
}

export interface AssetAttributes {
  contentType: StringPrimitive;
  href: HrefElement;
}

/**
 * @see https://apielements.org/en/latest/element-definitions.html#asset-string
 */
export interface AssetElement extends Element<string, AssetAttributes> {
  element: "asset";
}

type BooleanAttributes = PrimitiveAttributes<BooleanPrimitive>;

/**
 * @see https://apielements.org/en/latest/element-definitions.html#boolean-element
 */
export interface BooleanElement extends Element<boolean, BooleanAttributes> {
  element: "null";
}

export interface CategoryAttributes {
  metadata: ArrayPrimitive<any>;
  version: string;
}

/**
 * @see https://apielements.org/en/latest/element-definitions.html#category
 */
export interface CategoryElement extends Element<ArrayPrimitive<AnyElement>, CategoryAttributes> {
  element: "category"
}

export interface CopyElementAttributes {
  contentType: StringPrimitive;
}

/**
 * @see https://apielements.org/en/latest/element-definitions.html#copy-string
 */
export interface CopyElement extends Element<StringPrimitive, CopyElementAttributes> {
  element: "copy"
}

/**
 * @see https://apielements.org/en/latest/element-definitions.html#data-structure
 */
export interface DataStructureElement extends Element<ArrayPrimitive<AnyDataStructureElement>> {
  element: 'dataStructure'
}

export interface EnumAttributes extends PrimitiveAttributes<AnyElement> {
  enumerations: ArrayPrimitive<AnyElement>;
}

/**
 * @see https://apielements.org/en/latest/element-definitions.html#enum-element
 */
export interface EnumElement extends Element<AnyElement, EnumAttributes> {
  element: "enum";
}

type ExtendContent =
  ArrayPrimitive<any> |
  ObjectElement       |
  SelectElement       |
  StringPrimitive     |
  BooleanPrimitive    |
  NumberPrimitive     |
  RefElement

/**
 * @see https://apielements.org/en/latest/element-definitions.html#extend-element
 */
export interface ExtendElement extends Element<ArrayPrimitive<ExtendContent>> {
  element: "extend";
}

/**
 * @see https://apielements.org/en/latest/element-definitions.html#fail-element
 */
export interface FailElement extends Element<any> {
  element: "fail";
}

/**
 * @see https://apielements.org/en/latest/element-definitions.html#href-string
 */
export interface HrefElement extends Element<StringPrimitive> {
  element: "href"
}

/**
 * @see https://apielements.org/en/latest/element-definitions.html#href-variables-object
 */
export interface HrefVariablesElement {
  element: "hrefVariables";
}

/**
 * @see https://apielements.org/en/latest/element-definitions.html#http-headers-object
 */
export interface HttpHeadersElement extends Element<ArrayPrimitive<MemberElement>> {
  element: "httpHeaders";
}

interface HttpMessageAttributes {
  headers: HttpHeadersElement;
}

type HttpMessagePayload =
  CopyElement |
  DataStructureElement |
  AssetElement;

interface HttpRequestAttributes extends HttpMessageAttributes {
  method: StringPrimitive;
  href?: TemplatedHrefElement;
  hrefVariables?: HrefVariablesElement;
}

/**
 * @see https://apielements.org/en/latest/element-definitions.html#http-request-message-http-message-payload
 */
export interface HttpRequestElement extends Element<ArrayPrimitive<HttpMessagePayload>, HttpRequestAttributes> {
  element: "httpRequest";
}

export interface HttpResponseAttributes extends HttpMessageAttributes {
  statusCode: NumberPrimitive;
}

/**
 * @see https://apielements.org/en/latest/element-definitions.html#http-response-message-http-message-payload
 */
export interface HttpResponseElement extends Element<ArrayPrimitive<HttpMessagePayload>, HttpResponseAttributes> {
  element: "httpResponse";
}

interface HttpTransactionAttributes {
  authSchemes: ArrayPrimitive<StringElement>; // FIXME
}

type HttpTransactionContent =
  CopyElement         |
  HttpRequestElement  |
  HttpResponseElement;

/**
 * @see https://apielements.org/en/latest/element-definitions.html#asset-string
 */
export interface HttpTransactionElement extends Element<ArrayPrimitive<HttpTransactionContent>, HttpTransactionAttributes> {
  element: "httpTransaction";
}


/**
 * @see http://apielements.org/en/latest/element-definitions.html#link-element
 */
export interface LinkElement {
  element: "link";

  attributes: {
    relation: StringPrimitive;
    href: StringPrimitive;
  }
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

/**
 * @see https://apielements.org/en/latest/element-definitions.html#member-element
 */
export interface MemberElement extends Element<MemberContent, MemberAttributes> {
  element: "member";
}

/**
 * @see https://apielements.org/en/latest/element-definitions.html#null-element
 */
export interface NullElement {
  element: "null";
}

type NumberAttributes = PrimitiveAttributes<NumberPrimitive>;

/**
 * @see https://apielements.org/en/latest/element-definitions.html#number-element
 */
export interface NumberElement extends Element<number, NumberAttributes> {
  element: "number";
}

export type ObjectContent =
  MemberElement |
  ExtendElement |
  SelectElement |
  RefElement;

export type ObjectAttributes = PrimitiveAttributes<ObjectElement>;

/**
 * @see https://apielements.org/en/latest/element-definitions.html#object-element
 */
export interface ObjectElement extends Element<ArrayPrimitive<ObjectContent>> {
  element: "object";
}

/**
 * @see https://apielements.org/en/latest/element-definitions.html#option-element
 */
export interface OptionElement {
  element: "option";
}

export type ParseResultContent =
  CategoryElement |
  AnnotationElement;

/**
 * @see https://apielements.org/en/latest/element-definitions.html#parse-result-array
 */
export interface ParseResultElement extends Element<ArrayPrimitive<ParseResultContent>> {
  element: "parseResult";
}

/**
 * @see https://apielements.org/en/latest/element-definitions.html#ref-element
 */
export interface RefElement {
  element: "ref";
}

export interface ResourceAttributes {
  href: TemplatedHrefPrimitive;
  hrefVariables?: HrefVariablesElement;
}

type ResourceContent =
  CopyElement       |
  CategoryElement   |
  TransitionElement |
  DataStructureElement

/**
 * @see https://apielements.org/en/latest/element-definitions.html#resource
 */
export interface ResourceElement extends Element<ArrayPrimitive<ResourceContent>, ResourceAttributes> {
  element: "resource";
}

/**
 * @see https://apielements.org/en/latest/element-definitions.html#select-element
 */
export interface SelectElement extends Element<ArrayPrimitive<OptionElement>> {
  element: "select";
}

export type SourceMapContent = ArrayPrimitive<ArrayElement<NumberPrimitive>>;

/**
 * @see https://apielements.org/en/latest/element-definitions.html#source-map
 */
export interface SourceMapElement extends Element<SourceMapContent, SourceMapContent> {
  element: "sourceMap";
}

type StringAttributes = PrimitiveAttributes<StringPrimitive>;

/**
 * @see http://apielements.org/en/latest/element-definitions.html#string-element
 */
export interface StringElement extends Element<string, StringAttributes> {
  element: "string";
}

/**
 * @see https://apielements.org/en/latest/element-definitions.html#templated-href-string
 */
export interface TemplatedHrefElement extends Element<string, StringAttributes> {
  element: "templatedHref"
}

export interface TransitionAttributes {
  relation?: StringPrimitive;
  href: TemplatedHrefElement;
  hrefVariables?: HrefVariablesElement;
  data?: DataStructureElement;
  contentTypes?: ArrayPrimitive<StringPrimitive>;
}

type TransitionContent =
  CopyElement |
  HttpTransactionElement;

/**
 * @see https://apielements.org/en/latest/element-definitions.html#transition
 */
export interface TransitionElement extends Element<ArrayPrimitive<TransitionContent>, TransitionAttributes> {
  element: "transition";
}