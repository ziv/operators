# filters

## notEmpty$
Allow pass of not empty values.

```typescript
import { of } from 'rxjs';
import notEmpty$ from '@xpr/operators/filters/not-empty';

of([1, null, 2, undefined, 3]).pipe(notEmpty$()).subscribe(console.log);
// 1, 2, 3

```
