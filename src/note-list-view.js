(function(exports){
  function NoteListView(noteList){
    this.noteList = noteList;
    this.getNotesHtmlList = function(){
      return this.noteList.showAllNotes().map(function(item) {
        console.log(item.text);
        return item.text;
      });
      //return(`<ul><li><div>${item.text}</div></li></ul>`);
      // <ul><li><div>notelist.allNotes.join</div></li><li>
      // <div>Favourite drink: seltzer</div></li></ul>
    }
  }
  exports.NoteListView = NoteListView;
})(this);
