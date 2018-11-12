const assert = (exp) => ({
  toEqual: function(assertionToCheck) {
    if (exp !== assertionToCheck) {
      console.log("Test Failed: Got "
                  + assertionToCheck
                  + " when expected to get "
                  + exp
                )
    }
  }
})

const expect = (exp) => assert(exp)

const describe = (description, functionToExecute) => {
  console.log(description)
  functionToExecute()
}

const it = (testText, functionToExecute) => describe(' ' +testText, functionToExecute)


function adder(a, b) {
  return a + b
}

describe("adder", function() {
  it ('adds two numbers', function() {
    expect(adder(1,2)).toEqual(3)
  })

  it('adds a different two numbers', function() {
    expect(adder(2,2)).toEqual(4)
  })
})
