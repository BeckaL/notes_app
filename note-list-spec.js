require('./note-list-model.js')
require('./note-model.js')
const { describe, it, expect, matchers } = require('./test-suite.js')

describe('Note-list', function() {
  describe("add", function() {
    it('returns all the notes', function() {
        var noteList = new NoteList()
        var note = new Note()
        noteList.add(note.printText())
        expect(noteList.notes[0]).toEqual("My favourite language is javascript")
    })
  })
})
