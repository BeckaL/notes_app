(function(exports) {

  matchers = (exp) => ({
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

  expect = (exp) => matchers(exp)

  describe = (description, testFunction) => {
    console.log(description)
    testFunction()
  }

  it = (checks, testFunction) => describe(' ' + checks, testFunction)

  return {
  exports.expect: expect
  exports.describe: describe
  exports.it: it
 }

})(this);

//
// module.exports = {
//   describe,
//   it,
//   expect,
//   matchers
// }
