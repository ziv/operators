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

  it('should not pass empty values', () => {
    const test: any[] = [];
    of([1, null, 2])
      .pipe(notEmpty$())
      .subscribe({
        next: value => test.push(value),
        complete: () => expect(test.length).toEqual(2)
      });
  });
});
