import { assert } from 'chai';
import { factorial } from '../factorial.js';

describe('factorial', () => {
  it('should return 1 when n is 1', () => {
    assert.equal(factorial(1), 1);
  });


});
