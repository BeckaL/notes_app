// require('./note-list-model.js')

(function(exports) {
  NoteListView = function(notelist) {
    this.noteList = notelist
    MAX_CHARS = 20
  }

  NoteListView.prototype.toHTML = function () {
    var string = this.noteList.all()
    if (string.length > MAX_CHARS) {
      string = string.split('').splice(0, MAX_CHARS).join('')
    }
    // console.log(trimmed_string || string)
    return `<ul><li><div>${string}</div></li></ul>`
  };

  exports.NoteListView = NoteListView
})(this)
