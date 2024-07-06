const assert = require('assert');

function returnBool(n) {
  if (n) return true
  return false
}

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });

  describe('returns a bool', () => {
    let bool;
    for (let i=0; i < 2; i++) {
    it('should return a bool', () => {
      assert.equal(returnBool(bool), true);
    });
    bool = 2;
   } 
  });
});
