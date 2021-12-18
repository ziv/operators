// @module transformers/to-type
import { ClassConstructor, plainToClass } from 'class-transformer';
import { map, pipe } from 'rxjs';
import { Operator } from '../types';

export type ToType<T> = Operator<unknown, T>;

/**
 * Transforms an object into a class instance.
 *
 * @param {ClassConstructor<T>} type - The class to transform the object into.
 */
export function toType$<T>(type: ClassConstructor<T>): ToType<T> {
  return pipe(
    map((input: unknown) => plainToClass(type, input) as unknown as T)
  );
}

export default toType$;
