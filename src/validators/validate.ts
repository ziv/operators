import { validate, ValidationError } from 'class-validator';
import { mergeMap, pipe } from 'rxjs';
import { Operator } from '../types';

export type Validate = Operator<object, ValidationError[]>;

export function validate$(): Validate {
  return pipe(mergeMap((value: object) => validate(value)));
}

export default validate$;
