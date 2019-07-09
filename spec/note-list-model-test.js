function testShowAllNotes() {
  var notelist = new NoteList()
  console.log(notelist.showAllNotes())
  assert.isTrue(notelist.showAllNotes().length == 0)
};
testShowAllNotes();

function testCreatelNote() {
  var notelist = new NoteList()
  assert.isTrue(notelist.createNote("Hi Ruth") == "Hi Ruth")
};
testCreatelNote();

function testCreatelNote() {
  var notelist = new NoteList()
  notelist.createNote('Hi Ruth')
  assert.isTrue(notelist.showAllNotes().length == 1)
};
testCreatelNote();
