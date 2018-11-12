require('./note-model.js')
const { describe, it, expect, matchers } = require('./test-suite.js')


describe("notes", function() {

  describe('when initialized', function() {
    it ('takes the initialization text', function() {
      var notes = new Note()
      expect(notes.printText()).toEqual("My favourite language is javascript")
    })
  })
})
