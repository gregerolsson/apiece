import * as Op from '../operations';
import * as El from '../elements';
import { render } from './render';

interface ArrayPrimitiveProps {
  element: El.ArrayPrimitive<El.AnyElement>;
}

export const ArrayPrimitive = (props: ArrayPrimitiveProps) => Op.map(props.element, c =>
  render(c)
);