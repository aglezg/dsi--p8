import 'mocha';
import {expect} from 'chai';
import {add} from '../src/basicFunctions';

describe('add function tests', () => {
  it('add(1, 8) returns value 9', () => {
    expect(add(1, 8)).to.be.equal(9);
  });

  it('add(-1, 8) returns value 7', () => {
    expect(add(-1, 8)).to.be.equal(7);
  });

  it('add(1.2, 3.5) returns value 4.7', () => {
    expect(add(1.2, 3.5)).to.be.equal(4.7);
  });
});
