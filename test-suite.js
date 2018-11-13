const matchers = (exp) => ({
  toEqual: function(assertionToCheck) {
    if (exp !== assertionToCheck) {
      console.log("Test Failed: Got "
                  + exp
                  + " when expected to get "
                  + assertionToCheck
                )} else {
                  console.log('Sweet!')
                }
  }
})

const expect = (exp) => matchers(exp)

const describe = (description, testFunction) => {
  console.log(description)
  testFunction()
}

const it = (checks, testFunction) => describe(' ' + checks, testFunction)

const allow = (doubleName) => ({
  toReceive: function(fakeMethod) {
    doubleName = function() {
    }
    doubleName.prototype.new = function() {
    }
  }
})

module.exports = {
  describe,
  it,
  expect,
  matchers
}
