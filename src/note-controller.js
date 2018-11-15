NoteController = function(notelistmodel) {
  this.notelistmodel = notelistmodel
  this.notelistview = new NoteListView(this.notelistmodel)
}

NoteController.prototype.addNote = function(string) {
  this.notelistmodel.add(string)
}

NoteController.prototype.changeHTML = function() {
  var html = this.notelistview.toHTML()
  app = document.getElementById('app')
  app.innerHTML = html
}
