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
})