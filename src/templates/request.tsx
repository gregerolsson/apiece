import * as E from '../models/element';
import { h } from 'preact';

interface RequestProps {
  element: E.ResourceElement;
}

function Request(props: RequestProps) {
  return (
    <h2>{props.element.meta}</h2>
  )
}