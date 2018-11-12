require('./note-list-model.js')
require('./note-model.js')
require('./note-list-view-model.js')

const { describe, it, expect, matchers } = require('./test-suite.js')

describe('Note-list-view', function() {
  describe("toHTML", function() {
    it('returns a string of HTML', function() {
        var noteListView = new NoteListView()
        noteListView.noteList.add('Hello')
        expect(noteListView.toHTML()).toEqual('<ul><li><div>Hello</div></li></ul>')
    })
  })
})
