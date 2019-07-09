// (function(exports) {
//   function testNoteInitialization() {
//     var note = new Note("test note");
//
//     if (note.text !== "test note") {
//       throw new Error("Note not initialized with text");
//     }
//   };
//   testNoteInitialization();
// })(this);

  function testNoteInitialization() {
    var note= new Note("test note");
    assert.isTrue(note.text === "test note");
  };
  testNoteInitialization();
