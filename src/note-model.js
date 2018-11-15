(function(exports) {
  Note = function(note, id) {
  this.text = note
  this.id = id
  }

  Note.prototype.printText = function () {
    return this.text
  }

  exports.Note = Note
})(this)
