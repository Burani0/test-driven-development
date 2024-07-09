import {assert} from 'chai';
import {multiply} from '../multiply.js';

const assertEqual = require('assert').equal;

describe('multiply', () => {
  it('should return 1 when multiplying 1 and 1', () => {
    assertEqual(multiply(1, 1), 1);
  });
});