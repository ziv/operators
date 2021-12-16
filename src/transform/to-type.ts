import { ClassConstructor, plainToClass } from 'class-transformer';
import { map, Observable, pipe, UnaryFunction } from 'rxjs';

export type ToType<T> = UnaryFunction<Observable<unknown>, Observable<T>>;

export function toType$<T>(type: ClassConstructor<T>): ToType<T> {
  return pipe(
    map((input: unknown) => plainToClass(type, input) as unknown as T)
  );
}

export default toType$;
