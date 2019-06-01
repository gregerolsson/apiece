import * as Op from '../operations';
import * as El from '../elements';
import { render } from './render';
import { h } from 'preact';

const apiClass = "api";
const resourceGroupClass = "resourceGroup";
const dataStructuresClass = "dataStructures";
const scenarioClass = "scenario";
const transitionsClass = "transitions";
const authSchemesClass = "authSchemes";

interface CategoryProps {
  element: El.CategoryElement;
}

export function Category(props: CategoryProps) {
  const element = props.element;
  const title = Op.title(element);

  return (
    <div class="element-category">
      {
        title && <h1>{title}</h1>
      }
      {
        Op.map(element.content, c =>
          render(c)
        )
      }
    </div>
  )
}