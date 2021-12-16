import { map, Observable, pipe, UnaryFunction } from 'rxjs';
import { ObjectId } from 'mongodb';

// todo fix types to match the idKey input
type Input<T> = T & { _id?: string | ObjectId };
type Output<T> = T | (T & { _id?: ObjectId });

export type NormMongoId<T> = UnaryFunction<
  Observable<Input<T>>,
  Observable<Output<T>>
>;

export function normMongoId$<T>(idKey = '_id'): NormMongoId<T> {
  return pipe(
    map((input: Input<T>) =>
      input[idKey] && typeof input[idKey] === 'string'
        ? {
            ...input,
            [idKey]: new ObjectId(input[idKey])
          }
        : input
    )
  );
}

export default normMongoId$;
