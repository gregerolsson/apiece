import * as E from '../elements';
import * as O from '../operations';
import * as S from 'json-schema';

let schema: S.JSONSchema7;

const example: E.ParseResultElement = {
  element: "parseResult",
  content: [
    {
      "element": "category",
      "meta": {
        "classes": {
          "element": "array",
          "content": [
            {
              "element": "string",
              "content": "api"
            }
          ]
        }
      }
    }
  ]
}

O.forEach(example.content, e => {
  if (e.element === 'category') {
    processCategory(e);
  }
  else {
    processAnnotation(e);
  }
});

O.forEach(example.content, e => {
  switch (e.element) {
    case 'category': processCategory(e); break;
    case 'annotation': processAnnotation(e); break;
  }
});

function processCategory(e: E.CategoryElement) {

}

function processAnnotation(e: E.AnnotationElement) {

}