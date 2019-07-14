(function(exports){
  function NoteListView(noteList){
    this.noteList = noteList;
    this.getNotesHtmlList = function(){
      var shelf = []
      var resultList1 = "<ul>"
      this.noteList.showAllNotes().forEach(function(item) {
         shelf.push("<li><div>" + item.text + "</div></li>");
      });

      var resultList2 = shelf.join("")
      var resultList3 = "</ul>"
      return resultList1 + resultList2 + resultList3
    }
  }
  exports.NoteListView = NoteListView;
})(this);
