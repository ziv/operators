import { validateOrReject } from 'class-validator';
import { mergeMap, pipe } from 'rxjs';
import { Operator } from '../types';

export type ValidateOrReject<T> = Operator<object, T>;

export function validateOrReject$<T>(): ValidateOrReject<T> {
  return pipe(
    mergeMap((value: object) =>
      validateOrReject(value).then(() => value as unknown as T)
    )
  );
}

export default validateOrReject$;
