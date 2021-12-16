import { ClassConstructor, plainToClass } from 'class-transformer';
import { map, pipe } from 'rxjs';
import { Operator } from '../types';

export type ToType<T> = Operator<unknown, T>;

export function toType$<T>(type: ClassConstructor<T>): ToType<T> {
  return pipe(
    map((input: unknown) => plainToClass(type, input) as unknown as T)
  );
}

export default toType$;
