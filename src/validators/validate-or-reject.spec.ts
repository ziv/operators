import { IsInt, ValidationError } from 'class-validator';
import { of } from 'rxjs';
import validateOrReject$ from './validate-or-reject';

describe('validateOrReject', () => {
  class TestClass {
    @IsInt()
    public property: number;
  }

  it('should reject validation', done => {
    const input = new TestClass();
    input.property = 'number' as unknown as number;

    of(input)
      .pipe(validateOrReject$())
      .subscribe({
        error(e) {
          expect(e[0]).toBeInstanceOf(ValidationError);
          done();
        }
      });
  });
});
