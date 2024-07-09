import { assert } from 'chai';
import { factorial } from '../factorial.js';

describe('factorial', () => {
  it('should return 1 when n is 1', () => {
    assert.equal(factorial(1), 1);
  });

  it('should return 2 when n is 2', () => {
    assert.equal(factorial(2), 2);
  });

  it('should return 6 when n is 3', () => {
    assert.equal(factorial(3), 6);
  });

  it('should return 24 when n is 4', () => {
    assert.equal(factorial(4), 24);
  });

  it('should return 120 when n is 5', () => {
    assert.equal(factorial(5), 120);
  });
});
