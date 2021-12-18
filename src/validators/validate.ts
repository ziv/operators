// @module validators/validate
import { validate, ValidationError } from 'class-validator';
import { mergeMap, pipe } from 'rxjs';
import { Operator } from '../types';

export type Validate = Operator<object, ValidationError[]>;

/**
 * Validates an object using class-validator.
 */
export function validate$(): Validate {
  return pipe(mergeMap((value: object) => validate(value)));
}

export default validate$;
