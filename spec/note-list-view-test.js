// function testCreateNote() {
//   var notelist = new NoteList()
//   notelist.createNote('Hi Ruth')
//   assert.isTrue(notelist.showAllNotes().length == 1)
// };
// testCreateNote();

function testView() {
  var noteList = new NoteList()
  noteList.createNote("I like books1")
  var noteListView = new NoteListView(noteList)
  assert.isTrue(noteListView.getNotesHtmlList() == "<ul><li><div>I like books1</div></li></ul>")
};
testView();

function testViewMultipleNotes() {
  var noteList = new NoteList()
  noteList.createNote("I like books")
  noteList.createNote("I like writing code")
  noteList.createNote("I like when my code passes tests I wrote")
  var noteListView = new NoteListView(noteList)
  assert.isTrue(noteListView.getNotesHtmlList() == "<ul><li><div>I like books</div></li><li><div>I like writing code</div></li><li><div>I like when my code passes tests I wrote</div></li></ul>")
};
testViewMultipleNotes();
