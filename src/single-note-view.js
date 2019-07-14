(function(exports) {
  function SingleNoteView(noteModel) {
    this.noteModel = noteModel
    this.displaysSingleNote = function(){
      var1 = "<div>"
      var2 = this.noteModel.text
      var3 = "</div>"
      var htmlNoteModel = var1 + var2 + var3
      return htmlNoteModel
    }
  }
  exports.SingleNoteView = SingleNoteView;
})(this);
