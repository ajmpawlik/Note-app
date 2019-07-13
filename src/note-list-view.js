(function(exports){
  function NoteListView(noteList){
    this.noteList = noteList;
    this.getNotesHtmlList = function(){
      var resultList = "<ul>"
       this.noteList.showAllNotes().forEach(function(item) {
         resultList = resultList +'<li><div>' + item.text + "</div></li>";
      });
      resultList = resultList + "</ul>"
      console.log(resultList);
      return resultList
      //return(`<ul><li><div>${item.text}</div></li></ul>`);
      // <ul><li><div>notelist.allNotes.join</div></li><li>
      // <div>Favourite drink: seltzer</div></li></ul>
    }
  }
  exports.NoteListView = NoteListView;
})(this);
