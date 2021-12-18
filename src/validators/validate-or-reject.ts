// @module validators/validate-or-reject
import { validateOrReject } from 'class-validator';
import { mergeMap, pipe } from 'rxjs';
import { Operator } from '../types';

export type ValidateOrReject<T> = Operator<object, T>;

/**
 * Validates the given object or rejects it with the given error.
 */
export function validateOrReject$<T>(): ValidateOrReject<T> {
  return pipe(
    mergeMap((value: object) =>
      validateOrReject(value).then(() => value as unknown as T)
    )
  );
}

export default validateOrReject$;
