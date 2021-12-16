import { IsString, ValidationError } from 'class-validator';
import { of } from 'rxjs';
import validate$ from './validate';

describe('validate', () => {
  class TestClass {
    @IsString()
    public property: string;
  }

  it('should run validation', done => {
    const input = new TestClass();
    input.property = 1 as unknown as string;

    of(input)
      .pipe(validate$())
      .subscribe(output => {
        expect(output[0]).toBeInstanceOf(ValidationError);
        done();
      });
  });
});
