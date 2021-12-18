// @module mongo/norm-mongo-id
import { map, pipe } from 'rxjs';
import { ObjectId } from 'mongodb';
import { Operator } from '../types';

// todo fix types to match the idKey input
type Input<T> = T & { _id?: string | ObjectId };
type Output<T> = T | (T & { _id?: ObjectId });

export type NormMongoId<T> = Operator<Input<T>, Output<T>>;

/**
 * Normalize MongoDB _id field to ObjectId
 *
 * @param idKey {string} - The key of the _id field
 */
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
