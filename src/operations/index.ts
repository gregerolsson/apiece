import * as El from '../elements';

interface TypePredicate<T> {
  (e: any): e is T
}

/**
 * Generates a type predicate function for checking if an element
 * is of a given type, which will also coerce it to the that Element-type
 * in the TypeScript type system.
 * 
 * @param element Element type to check for
 */
function predicate<T extends El.AnyElement>(element: El.ElementType): TypePredicate<T> {
  return (e: El.AnyElement): e is T => (e && e.element === element);
}

export const isAnnotation = predicate<El.AnnotationElement>('annotation');
export const isCategory = predicate<El.CategoryElement>('category');
export const isExtend = predicate<El.ExtendElement>('extend');
export const isMember = predicate<El.MemberElement>('member');
export const isObject = predicate<El.ObjectElement>("object");
export const isRef = predicate<El.RefElement>('ref');

export function find<T>(from: El.AnyElement, type: El.ElementType) {
  if (from.element === type)  {
    return from;
  }

  //if (Array.isArray(from.content)) {
    // from.content.find(e => find<T>(e, type))
  //}
}

/**
 * Returns the items (content) in the given ArrayElement or the array itself
 * if it is a native Array.
 * 
 * @param array Native Array or ArrayElement
 */
export function items<T>(array: El.ArrayPrimitive<T>) {
  return Array.isArray(array)
    ? array
    : array.content;
}

/**
 * Filters out all items in the array that matches the given predicate function,
 * and coerces the result to that of the type predicate.
 * 
 * @param array ArrayElement<T> | T[] to iterate over
 * @param iter Iterator function
 */
export function filter<U extends El.AnyElement>(array: El.ArrayPrimitive<any>, pred: TypePredicate<U>): U[] {
  return items(array).filter(pred);
}

/**
 * Maps...
 * 
 * @param array ArrayElement<T> | T[] to iterate over
 * @param iter Iterator function
 */
export function map<T>(array: El.ArrayPrimitive<T>, iter: (e: T) => void) {
  return items(array).map(iter);
}

/**
 * Iterates over an ArrayPrimitive which may be either an action Array or
 * an ArrayElement.
 * 
 * @param array ArrayElement<T> | T[] to iterate over
 * @param iter Iterator function
 */
export function forEach<T>(array: El.ArrayPrimitive<T>, iter: (e: T) => void) {
  return items(array).forEach(iter);
}

/**
 * ...
 * 
 * @param array ArrayElement<T> | T[] to iterate over
 * @param predicate Predicate function
 */
export function some<T>(array: El.ArrayPrimitive<T>, predicate: (e: T) => boolean) {
  return items(array).some(predicate);
}

/**
 * Returns the given string content (which may be this primitive itself, if
 * it is not encapsulated in a StringElement).
 * 
 * @param primitive String or StringElement
 */
export function string<T>(primitive: El.StringPrimitive | El.TemplatedHrefPrimitive) {
  if (typeof primitive === 'string') {
    return primitive;
  }
  return primitive.content;
}

/**
 * 
 * @param el 
 * @param name 
 */
export function hasClass(el: El.Element<any>, name: string) {
  const classes = el.meta.classes;

  return some(classes, c =>
    string(c) === name
  );
}

/**
 * 
 * @param el 
 */
export function title(el: El.Element<any>) {
  if (el.meta && el.meta.title) {
    return string(el.meta.title)
  }

  return null;
}