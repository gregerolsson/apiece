import { h } from 'preact';
import { JSONSchema7 } from 'json-schema';
import { StructuredList, StructuredListRow } from './list';
import { resolveSchema } from 'schemas';

interface SchemaProps {
  schema: JSONSchema7;
}

export function Schema(props: SchemaProps) {
  const schema = props.schema;

  return (
    <div class="ui-schema">
      <StructuredList captions={['Type', 'Property', 'Description']} class="apidoc">
        {
          renderSchema(schema)
        }
      </StructuredList>
    </div>
  )
}

export function renderSchema(schema: JSONSchema7) {
  switch (schema.type) {
    case 'number':
    case 'string':
    case 'boolean':
    case 'null': return renderPrimitiveSchema(schema); break;
    case 'object': return renderObjectSchema(schema); break;
    case 'array': return renderArraySchema(schema); break;
  }

  return null;
}

export function renderPrimitiveSchema(schema: JSONSchema7) {
  schema.minimum
  schema.maximum
  schema.exclusiveMinimum
  schema.exclusiveMaximum
  schema.minLength
  schema.maxLength
  schema.format
  schema.description
  schema.pattern

  return (
    <StructuredListRow>
      <strong>{schema.type}</strong>
      <div>{schema}</div>
      <div>{schema.description}</div>
    </StructuredListRow>
  )
}

export function renderObjectSchema(schema: JSONSchema7) {
  const names = Object.keys(schema.properties);

  return names.map(name => {
    let propertySchema = schema.properties[name] as JSONSchema7;

    if (propertySchema.$ref) {
      propertySchema = resolveSchema(schema, propertySchema.$ref);
    }

    return (
      <StructuredListRow>
        {
          propertySchema.type === 'object'
            ? <div>
                <span>{propertySchema.title}</span>
                <div class="ui-indent">
                  {renderObjectSchema(propertySchema)}
                </div>
              </div>
            : <code>{propertySchema.type}</code>
        }
        <strong>{name}</strong>
        <div>{propertySchema.description}</div>
      </StructuredListRow>
    )
  });
}

export function renderArraySchema(schema: JSONSchema7) {

  return (
    <div></div>
  )
}