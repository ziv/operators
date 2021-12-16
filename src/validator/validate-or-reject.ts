import { validateOrReject } from 'class-validator';
import { mergeMap, Observable, pipe, UnaryFunction } from 'rxjs';

type Obj = Record<string, unknown>;

export type ValidateOrReject<T> = UnaryFunction<Observable<T>, Observable<T>>;

export function validateOrReject$<T extends Obj>(): ValidateOrReject<T> {
  return pipe(
    mergeMap((value: T) => validateOrReject(value).then(() => value))
  );
}

export default validateOrReject$;
