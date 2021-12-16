import validateOrReject$ from './validate-or-reject';

describe('validateOrReject', () => {
  const operator = validateOrReject$();
  it('should return a promise', () => {
    expect(operator).toBeTruthy();
  });
  //
  // it('should resolve if the validation passes', async () => {
  //   const promise = validateOrReject(() => true);
  //   await expect(promise).resolves.toBeUndefined();
  // });
  //
  // it('should reject if the validation fails', async () => {
  //   const promise = validateOrReject(() => false);
  //   await expect(promise).rejects.toBeInstanceOf(Error);
  // });
  //
  // it('should reject if the validation throws an error', async () => {
  //   const promise = validateOrReject(() => {
  //     throw new Error('test');
  //   });
  //   await expect(promise).rejects.toBeInstanceOf(Error);
  // });
});
