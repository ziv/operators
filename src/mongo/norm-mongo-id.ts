// @module mongo/norm-mongo-id
import { map, OperatorFunction } from 'rxjs';
import { ObjectId } from 'mongodb';

// todo fix types to match the idKey input
type I<T> = T & { _id?: string | ObjectId };
type O<T> = T & { _id?: string | ObjectId };

export type NormMongoId<T> = OperatorFunction<I<T>, O<T>>;

/**
 * Normalize MongoDB _id field to ObjectId
 *
 * @param idKey {string} - The key of the _id field
 */
export function normMongoId$<T>(idKey = '_id'): NormMongoId<T> {
  return map<I<T>, O<T>>(input =>
    input && input[idKey] && typeof input[idKey] === 'string'
      ? { ...input, [idKey]: new ObjectId(input[idKey]) }
      : input
  );
}

export default normMongoId$;
