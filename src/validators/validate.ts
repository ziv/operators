// @module validators/validate
import { validate, ValidationError } from 'class-validator';
import {
  mergeMap,
  ObservableInput,
  ObservedValueOf,
  OperatorFunction
} from 'rxjs';

export type Validate = OperatorFunction<
  object,
  ObservedValueOf<ObservableInput<ValidationError[]>>
>;

/**
 * Validates an object using class-validator.
 */
export function validate$(): Validate {
  return mergeMap<object, ObservableInput<ValidationError[]>>(value =>
    validate(value)
  );
}

export default validate$;
