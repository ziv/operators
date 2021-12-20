// @module filters/not-empty
import { filter, MonoTypeOperatorFunction } from 'rxjs';

export type NotEmpty<T> = MonoTypeOperatorFunction<T>;

/**
 * Pass only not empty values
 */
export function notEmpty$<T>(): NotEmpty<T> {
  return filter(item => !!item);
}

export default notEmpty$;
