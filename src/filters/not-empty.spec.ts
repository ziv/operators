import { of } from 'rxjs';
import notEmpty$ from './not-empty';

describe('not-empty', () => {
  it('should return the same object', done => {
    const input = { name: 'test' };
    of(input)
      .pipe(notEmpty$())
      .subscribe(output => {
        expect(output).toEqual(input);
        done();
      });
  });

  it('should not pass empty values', done => {
    const test: unknown[] = [];
    of(1, null, 2, undefined)
      .pipe(notEmpty$())
      .subscribe({
        next: value => {
          test.push(value);
          console.log(value);
        },
        complete: () => {
          expect(test.length).toEqual(2);
          done();
        }
      });
  });
});
