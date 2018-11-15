(function(exports) {

  SingleNote = function(noteModel) {
    this.noteModel = noteModel

  }

  SingleNote.prototype.toHTML = function () {
    text = this.noteModel.printText()
    return `<div>${text}</div>`
  };


  exports.SingleNote = SingleNote
})(this)
