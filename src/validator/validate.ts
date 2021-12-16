import { validate } from 'class-validator';
import { mergeMap, Observable, pipe, UnaryFunction } from 'rxjs';
import { ValidationError } from 'class-validator/types/validation/ValidationError';

type Obj = Record<string, unknown>;

export type Validate<T> = UnaryFunction<
  Observable<T>,
  Observable<ValidationError[]>
>;

export function validate$<T extends Obj>(): Validate<T> {
  return pipe(mergeMap((value: T) => validate(value)));
}

export default validate$;
