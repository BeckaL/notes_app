const {
  describe,
  it,
  expect,
  matchers
} = require('./test-suite.js')

function adder(a, b) {
  return a + b
}

describe("adder", function() {
  it ('adds two numbers', function() {
    expect(adder(1,2)).toEqual(3)
  })

  it('adds a different two numbers', function() {
    expect(adder(2,2)).toEqual(5)
  })
})
