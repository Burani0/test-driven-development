import { assert } from 'chai';
import { fibonacci } from '../fibonacci.js';

describe('fibonacci', () => {
  it('should return 0 when n is 0', () => {
    assert.equal(fibonacci(0), 0);
  });

  it('should return 1 when n is 1', () => {
    assert.equal(fibonacci(1), 1);
  });
  it('should return 1 when n is 2', () => {
    assert.equal(fibonacci(2), 1);
  });
  it('should return 8 when n is 6', () => {
    assert.equal(fibonacci(6), 8);
  });

  it('should throw an error when n is negative', () => {
    assert.throws(() => fibonacci(-1), Error, 'Input must be a non-negative integer');
  });
})