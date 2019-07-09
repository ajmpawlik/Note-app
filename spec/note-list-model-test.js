function testShowAllNotes() {
  var notelist = new NoteList()
  console.log(notelist.showAllNotes())
  assert.isTrue(notelist.showAllNotes().length == 0)
};
testShowAllNotes();

function testCreatelNoteSeeContent() {
  var notelist = new NoteList()
  assert.isTrue(notelist.createNote("Hi Ruth") == "Hi Ruth")
};
testCreatelNoteSeeContent();

function testCreateNote() {
  var notelist = new NoteList()
  notelist.createNote('Hi Ruth')
  assert.isTrue(notelist.showAllNotes().length == 1)
};
testCreateNote();
