(function(exports){
  function NoteList() {
    this.allNotes = []
    this.showAllNotes = function(){
      return this.allNotes
    }
    this.createNote = function(text){
      var note = new Note(text)
      this.allNotes.push(note)
      return note.text //this optional for 2 test
    }
  }
  exports.NoteList = NoteList
})(this)
