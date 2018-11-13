// const { describe, it, expect, matchers } = require('./test-suite.js')
// const matchers = (exp) => ({
//   toEqual: function(assertionToCheck) {
//     if (exp !== assertionToCheck) {
//       console.log("Test Failed: Got "
//                   + exp
//                   + " when expected to get "
//                   + assertionToCheck
//                 )} else {
//                   console.log('Sweet!')
//                 }
//   }
// })
//
// const expect = (exp) => matchers(exp)
//
// const describe = (description, testFunction) => {
//   console.log(description)
//   testFunction()
// }
//
// const it = (checks, testFunction) => describe(' ' + checks, testFunction)

describe("notes", function() {

  describe('when initialized', function() {
    it ('takes the initialization text', function() {
      var notes = new Note("My favourite language is javascript")
      expect(notes.printText()).toEqual("My favourite language is javascript")
    })
  })
})
