(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList
    this.displayNoteListView = function(){
      var noteListView = new NoteListView(this.noteList)
      return noteListView.getNotesHtmlList()
    }
    var element = document.getElementById("app");
    document.getElementById("app").innerHTML = this.displayNoteListView()
    console.log(element)
  }
  exports.NoteController = NoteController
})(this)
