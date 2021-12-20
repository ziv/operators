// @module validators/validate-or-reject
import { validateOrReject } from 'class-validator';
import {
  mergeMap,
  ObservableInput,
  ObservedValueOf,
  OperatorFunction
} from 'rxjs';

export type ValidateOrReject<T extends object> = OperatorFunction<
  T,
  ObservedValueOf<ObservableInput<T>>
>;

/**
 * Validates the given object or rejects it with the given error.
 */
export function validateOrReject$<T extends object>(): ValidateOrReject<T> {
  return mergeMap<T, ObservableInput<T>>(value =>
    validateOrReject(value).then(() => value)
  );
}

export default validateOrReject$;
