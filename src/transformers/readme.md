# transform

## toType$

Transform a value to a type using `class-transformer`.

```typescript
import toType$ from '@xmcl/transform/to-type';

class Point {
  constructor(public x: number, public y: number) {}
}

of(input).pipe(toType$(Point)).subscribe(console.log);
// Point { x: 1, y: 2 }
```
