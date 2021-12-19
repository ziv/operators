// @module filters/not-empty
import { filter, pipe } from 'rxjs';
import { Operator } from '../types';

export type NotEmpty<T> = Operator<T, T>;

/**
 * Pass only not empty values
 *
 * @param idKey {string} - The key of the _id field
 */
export function notEmpty$<T>(): NotEmpty<T> {
  return pipe(filter(item => !!item));
}

export default notEmpty$;
