(function(exports) {
    NoteList = function () {
      this.notes = []
    }

    NoteList.prototype.add = function (string) {
      var note = new Note(string)
      this.notes.push(note)
    }

    NoteList.prototype.all = function () {
      return this.notes.map(note => note.printText()).join(', ')
    }

    exports.NoteList = NoteList
})(this);
