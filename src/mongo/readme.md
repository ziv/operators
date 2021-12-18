# mongo

## normMongoId$
Convert MongoDB id string to a MongoDB `ObjectId`.

```typescript
import { of } from 'rxjs';
import normMongoId$ from '@xpr/operators/mongo/norm-mongo-id';

const plain = { _id: '61bb57b7b9476488e2767a2d', name: 'John' };

of(plain).pipe(normMongoId$()).subscribe(console.log);
// { _id: ObjectId('61bb57b7b9476488e2767a2d'), name: 'John' }
```
