const matchers = (exp) => ({
  toEqual: function(assertionToCheck) {
    if (exp !== assertionToCheck) {
      console.log("Test Failed: Got "
                  + assertionToCheck
                  + " when expected to get "
                  + exp
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

module.exports = {
  describe,
  it,
  expect,
  matchers
}
