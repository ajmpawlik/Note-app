function TestSingleNote() {
var noteModel = new Note("I like books")
var singleNoteView = new SingleNoteView(noteModel)
// var text = singleNoteView.noteModel.text
// console.log(text)
// console.log(noteModel)
assert.isTrue(singleNoteView.displaysSingleNote() == "<div>I like books</div>")
}
TestSingleNote();
