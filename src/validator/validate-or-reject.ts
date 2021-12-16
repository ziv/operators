import { validateOrReject } from 'class-validator';
import { mergeMap, Observable, pipe, UnaryFunction } from 'rxjs';

export type ValidateOrReject<T> = UnaryFunction<
  Observable<object>,
  Observable<T>
>;

export function validateOrReject$<T>(): ValidateOrReject<T> {
  return pipe(
    mergeMap((value: object) =>
      validateOrReject(value).then(() => value as unknown as T)
    )
  );
}

export default validateOrReject$;
