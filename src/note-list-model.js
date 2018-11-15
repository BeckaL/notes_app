// require('./note-model.js')
(function(exports) {
  NoteList = function () {
    this.notes = []
  }

  NoteList.prototype.add = function (string) {
    var note = new Note(string, this.notes.length)
    this.notes.push(note)
  };

  NoteList.prototype.all = function () {
    return this.notes.map(note => note.printText()).join(', ')
  }

  NoteList.prototype.getbyid = function (id) {
    return this.notes[id].text
  };
  exports.NoteList = NoteList
})(this)
