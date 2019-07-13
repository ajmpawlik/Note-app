// function testCreateNote() {
//   var notelist = new NoteList()
//   notelist.createNote('Hi Ruth')
//   assert.isTrue(notelist.showAllNotes().length == 1)
// };
// testCreateNote();

function testView() {
  var noteList = new NoteList()
  noteList.createNote("I like books")
  var noteListView = new NoteListView(noteList)
  assert.isTrue(noteListView.getNotesHtmlList() == "<ul><li><div>I like books</div></li></ul>")
};
testView();

//(``)
