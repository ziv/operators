import { map, Observable, pipe, UnaryFunction } from 'rxjs';
import { ObjectId } from 'mongodb';

type Input<T> = T & { _id?: string | ObjectId };
type Output<T> = T | (T & { _id?: ObjectId });

export type NormMongoId<T> = UnaryFunction<
  Observable<Input<T>>,
  Observable<Output<T>>
>;

export function normMongoId$<T>(): NormMongoId<T> {
  return pipe(
    map((input: Input<T>) =>
      input._id && typeof input._id === 'string'
        ? {
            ...input,
            _id: new ObjectId(input._id)
          }
        : input
    )
  );
}

export default normMongoId$;
