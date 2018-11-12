require('./note-list-model.js')

NoteListView = function() {
  this.noteList = new NoteList()
}

NoteListView.prototype.toHTML = function () {
  var string = this.noteList.all()
  return `<ul><li><div>${string}</div></li></ul>`
};
