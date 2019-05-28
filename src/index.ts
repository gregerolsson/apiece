import * as El from './elements';
import * as Op from './operations';

import result from './tests/b';


Op.forEach(result.content, e => {
  if (e.element === 'category') {
    processCategory(e);
  }
  else {
    processAnnotation(e);
  }
});

function processParseResult(e: El.ParseResultElement) {
  Op.filter(result.content, Op.isAnnotation).forEach(processAnnotation);
  Op.filter(result.content, Op.isCategory).forEach(processCategory);
}

function processCategory(e: El.CategoryElement) {
  if (Op.hasClass(e, 'api')) {
    console.log('API', Op.string(e.meta.title));
  }
  else if (Op.hasClass(e, 'resourceGroup')) {
    console.log('Resource Group', Op.string(e.meta.title));
  }
}

function processAnnotation(e: El.AnnotationElement) {

}