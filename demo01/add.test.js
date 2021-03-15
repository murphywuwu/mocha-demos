var add = require('./add.js');
var expect = require('chai').expect;

// describe: 测试套件(test suite)
describe('加法函数的测试', function() {
  // it: 测试用例(test case)
  it('1 加 1 应该等于 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });
});
