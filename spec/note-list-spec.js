require('../src/note-list-model.js')
require('../src/note-model.js')
const { describe, it, expect, matchers } = require('../test-suite.js')

describe('Note-list', function() {
  describe("add", function() {
    it('stores a note', function() {
        var noteList = new NoteList()
        noteList.add("My favourite language is javascript")
        expect(noteList.notes[0].printText()).toEqual('My favourite language is javascript')
    })
  })

  describe("add", function() {
    it('each note has a unique id', function() {
        var noteList = new NoteList()
        noteList.add("My favourite language is javascript")
        expect(noteList.notes[0].id).toEqual(0)
    })
  })

  describe("add", function() {
    it('each note has a unique id', function() {
        var noteList = new NoteList()
        noteList.add("My favourite language is javascript")
        noteList.add("My favourite language is ruby")
        expect(noteList.notes[1].id).toEqual(1)
    })
  })

  describe("add", function() {
    it('each note has a unique id', function() {
        var noteList = new NoteList()
        noteList.add("My favourite language is javascript")
        noteList.add("My favourite language is ruby")
        noteList.add("My favourite language is python")
        expect(noteList.notes[2].id).toEqual(2)
        expect(noteList.notes[2].text).toEqual('My favourite language is python')
    })
  })

  describe("all", function() {
    it('returns all notes', function() {
      var noteList = new NoteList()
      var note = new Note()
      noteList.add("My favourite language is javascript")
      noteList.add("My favourite language is javascript")
      expect(noteList.all()).toEqual("My favourite language is javascript, My favourite language is javascript")
    })
  })


})
