const assert = (exp) => ({
  toBe: function(assertionToCheck) {
    if (exp === assertionToCheck) {
      console.log("Test Passed")
    } else {
      console.log("Test Failed: Got "
                  + assertionToCheck
                  + " when expected to get "
                  + exp
                )
    }
  }
})

const expect = (exp) => assert(exp)

function adder(a, b) {
  return a + b
}

const result1 = adder(1, 2)
expect(result1).toBe(3)
expect(result1).toBe(4)
