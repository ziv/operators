# validator

Validation operators using `class-validator`.

Sample usage:

```typescript
import { IsNumber } from 'class-validator';

class Point {
  @IsNumber()
  x: number;

  @IsNumber()
  y: number;
}
```

## validate$

Run validation and return a list of errors.

```typescript
import { IsNumber } from 'class-validator';
import validate$ from '@xpr/operators/validate';

const point = new Point();
point.x = 1;
point.y = 'not a number';

of(input).pipe(validate$(point)).subscribe(console.log);
// ValidationError list or empty list for no errors
```


## validateOrReject$

Run validation and reject on errors.

```typescript
import { IsNumber } from 'class-validator';
import validate$ from '@xpr/operators/validate';

const point = new Point();
point.x = 1;
point.y = 'not a number';

of(input).pipe(validateOrReject$(point)).subscribe({
  error(err) {
    // err is a list of ValidationError
  }
});
```
