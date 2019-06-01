import { h } from 'preact';
import { JSONSchema7 } from 'json-schema';

interface SchemaProps {
  schema: JSONSchema7;
}

export function Schema(props: SchemaProps) {
  const schema = props.schema;

  return (
    <div class="ui-schema">
      
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
}

export function renderObjectSchema(schema: JSONSchema7) {
  const names = Object.keys(schema.properties);

  names.forEach(name => {

  });
}

export function renderArraySchema(schema: JSONSchema7) {

}