// @module transformers/to-type
import { ClassConstructor, plainToClass } from 'class-transformer';
import { map, OperatorFunction } from 'rxjs';

export type ToType<T> = OperatorFunction<unknown, T>;

/**
 * Transforms an object into a class instance.
 *
 * @param {ClassConstructor<T>} type - The class to transform the object into.
 */
export function toType$<T>(type: ClassConstructor<T>): ToType<T> {
  return map<unknown, T>(input => plainToClass(type, input) as T);
}

export default toType$;
