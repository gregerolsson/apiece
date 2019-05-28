import * as E from '../models/element';

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

E.forEach(example.content, e => {
  if (e.element === 'category') {
    processCategory(e);
  }
  else {
    processAnnotation(e);
  }
});

E.forEach(example.content, e => {
  switch (e.element) {
    case 'category': processCategory(e); break;
    case 'annotation': processAnnotation(e); break;
  }
});

function processCategory(e: E.CategoryElement) {

}

function processAnnotation(e: E.AnnotationElement) {

}