import { Observable, UnaryFunction } from 'rxjs';

export type Operator<Input, Output> = UnaryFunction<
  Observable<Input>,
  Observable<Output>
>;
