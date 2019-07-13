// function testCreateNote() {
//   var notelist = new NoteList()
//   notelist.createNote('Hi Ruth')
//   assert.isTrue(notelist.showAllNotes().length == 1)
// };
// testCreateNote();

function testView() {
  var noteList = new NoteList()
  console.log(noteList.createNote("I like books"))
  console.log(noteList)
  var noteListView = new NoteListView(noteList)
  console.log(noteListView.getNotesHtmlList())
  assert.isTrue(noteListView.getNotesHtmlList() == "I like books")
};
testView();

//(``)
