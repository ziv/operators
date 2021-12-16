import { of } from 'rxjs';
import toType$ from './to-type';

describe('to-type', () => {
  class Point {
    constructor(public x: number, public y: number) {}
  }

  it('should convert raw to plain', done => {
    const input = { x: 1, y: 2 };
    of(input)
      .pipe(toType$(Point))
      .subscribe(output => {
        expect(output).toBeInstanceOf(Point);
        done();
      });
  });
});
