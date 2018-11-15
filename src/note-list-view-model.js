// require('./note-list-model.js')

(function(exports) {
  NoteListView = function(notelist) {
    this.noteList = notelist
    MAX_CHARS = 20
  }

  NoteListView.prototype.toHTML = function () {
    var notes = this.noteList.notes
    returnString = '<ul>'
    notes.forEach(note => {
      text = note.printText()
      if (text.length > MAX_CHARS) {
        text = text.split('').splice(0, MAX_CHARS).join('')
      }
      returnString += `<li><a href="#notes/${note.id}">${text}</a></li>`
    })
    return returnString + '</ul>'
  };

  exports.NoteListView = NoteListView
})(this)
