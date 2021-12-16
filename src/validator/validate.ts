import { validate, ValidationError } from 'class-validator';
import { mergeMap, Observable, pipe, UnaryFunction } from 'rxjs';

export type Validate = UnaryFunction<
  Observable<object>,
  Observable<ValidationError[]>
>;

export function validate$(): Validate {
  return pipe(mergeMap((value: object) => validate(value)));
}

export default validate$;
