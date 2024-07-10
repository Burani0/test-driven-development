import { assert } from 'chai';
import { fibonacci } from '../fibonacci.js';

describe('fibonacci', () => {
  it('should return 0 when n is 0', () => {
    assert.equal(fibonacci(0), 0);
  });
})