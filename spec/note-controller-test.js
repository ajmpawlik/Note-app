// function testViewMultipleNotes() {
//   var noteList = new NoteList()
//   noteList.createNote("I like books")
//   noteList.createNote("I like writing code")
//   noteList.createNote("I like when my code passes tests I wrote")
//   var noteListView = new NoteListView(noteList)
//   assert.isTrue(noteListView.getNotesHtmlList() == "<ul><li><div>I like books</div></li><li><div>I like writing code</div></li><li><div>I like when my code passes tests I wrote</div></li></ul>")
// };
// testViewMultipleNotes();
// function TestNoteController1() {
//
//   var noteController = new NoteController())
//   assert.isTrue(noteController.noteList == "noteList")
//   };
// TestNoteController1()

function TestNoteController2() {
  var noteList = new NoteList
  noteList.createNote("I like books")
  var noteController = new NoteController(noteList)
  var html = noteController.displayNoteListView()
  console.log(noteController.noteList.showAllNotes()[0].text)
  assert.isTrue(noteController.noteList.showAllNotes()[0].text == "I like books")
  assert.isTrue(noteController.displayNoteListView() == "<ul><li><div>I like books</div></li></ul>")
  console.log(html);
}
TestNoteController2();
