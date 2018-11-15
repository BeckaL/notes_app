const { describe, it, expect, matchers } = require('../test-suite.js')
require('../src/note-model.js')
require('../src/single-note.js')

describe('Single note', function() {
  describe("toHTML", function() {
    it('returns a string of HTML', function() {
      note = new Note('my HTML string')
      var singleNote = new SingleNote(note)
      expect(singleNote.toHTML()).toEqual('<div>my HTML string</div>')
    })
  })
})
