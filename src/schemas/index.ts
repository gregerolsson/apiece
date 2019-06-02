import * as url from 'url';
import * as path from 'path';
import { JSONSchema7 } from 'json-schema';

/** All registered schemas, keyed by $id */
const schemas: { [$id: string]: JSONSchema7 } = { }

/**
 * 
 * @param schema 
 */
export function addSchema(schema: JSONSchema7) {
  if (!schema.$id) {
    throw new Error(`Schema does not have an $id and can not be added`);
  }

  schemas[schema.$id] = schema;
}

/**
 * 
 * @param $id 
 */
export function getSchema($id: string) {
  const schema = schemas[$id];

  if (!schema) {
    throw new Error(`Schema with $id ${$id} is not available`);
  }

  return schema;
}

/**
 * 
 * @param root 
 * @param $ref 
 */
export function resolveSchema(root: JSONSchema7, $ref: string) {
  const $id = resolveId(root, $ref);
  const path = url.parse($ref).hash;
  
  let ref = getSchema($id);

  path.split('/').slice(1).forEach(segment =>
    ref = (ref as any)[segment]
  );

  return ref;
}

/**
 * 
 * @param root 
 * @param $ref 
 */
export function resolveId(root: JSONSchema7, $ref: string) {
  const uri = url.parse(root.$id);
  const ref = url.parse($ref);

  if (!ref.protocol) {
    uri.pathname = `${path.dirname(uri.path)}/${ref.pathname}`
    return url.format(uri);
  }
  else {
    return $ref;
  }
}