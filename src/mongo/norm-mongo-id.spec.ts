import { of } from 'rxjs';
import normMongoId$ from './norm-mongo-id';
import { ObjectId } from 'mongodb';

describe('norm-mongo-id', () => {
  it('should return the same object', done => {
    const input = { name: 'test' };
    of(input)
      .pipe(normMongoId$())
      .subscribe(output => {
        expect(output).toEqual(input);
        done();
      });
  });

  it('should keep existing mongo id', done => {
    const _id = new ObjectId();
    const input = { name: 'test', _id };
    of(input)
      .pipe(normMongoId$())
      .subscribe(output => {
        expect(output).toEqual(input);
        expect(output._id).toStrictEqual(_id);
        done();
      });
  });

  it('should convert string to mongo id', done => {
    const input = { name: 'test', _id: new ObjectId().toString() };
    of(input)
      .pipe(normMongoId$())
      .subscribe(output => {
        expect(output._id).toBeInstanceOf(ObjectId);
        done();
      });
  });
});
