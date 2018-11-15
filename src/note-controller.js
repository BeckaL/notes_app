(function(exports) {

  NoteController = function(notelistmodel) {
    this.notelistmodel = notelistmodel
    this.notelistview = new NoteListView(this.notelistmodel)
  }

  NoteController.prototype.addNote = function(string) {
    this.notelistmodel.add(string)
    this.changeHTML()
  }

  NoteController.prototype.changeHTML = function() {
    var html = this.notelistview.toHTML()
    document.getElementById('app').innerHTML = html
  }

  NoteController.prototype.urlChange = function () {
    window.addEventListener("hashchange", this.showNoteText, false)
  };

  NoteController.prototype.getNoteFromUrl = function (location) {
      return location.hash.split('/')[1]
  };
  NoteController.prototype.showNoteText = function () {
    id = nc.getNoteFromUrl(window.location)
    text = nc.notelistmodel.getbyid(id)
    document.getElementById('noteText').innerHTML = text
  };
  exports.NoteController = NoteController
})(this)
