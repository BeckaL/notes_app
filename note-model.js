(function(exports) {
  Note = function(note) {
    this.text = note
  }

  Note.prototype.printText = function () {
    return this.text
  };
  exports.Note = Note;

})(this);
