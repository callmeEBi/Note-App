let $ = document;
let textBox = $.querySelector("#text_box");
let noteBoxes = $.querySelector(".note_boxes");
let addButton = $.querySelector(".add_button");
let RemoveButton = $.querySelector(".remove_button");
let colorCircle = document.getElementsByClassName("color_circle");
let newNoteBox;
for (i of colorCircle) {
  colorEventSet(i);
}

function colorEventSet(i) {
  i.addEventListener("click", () => {
    textBox.classList = "";
    textBox.classList.add(i.classList[1]);
  });
}

function noteAppender() {
  if (textBox.value.trim() === "") {
    alert("context can not be empty");
    return;
  }

  newNoteBox = $.createElement("div");
  newNoteBox.classList.add("note_box");
  newNoteBox.innerHTML = textBox.value;
  textBox.value = "";
  newNoteBox.addEventListener("click", function (event) {
    event.target.remove();
  });
  newNoteBox.classList.add(textBox.classList);
  textBox.classList = "";
  noteBoxes.append(newNoteBox);
}

textBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    noteAppender();
  }
});

addButton.addEventListener("click", noteAppender);
RemoveButton.addEventListener("click", function () {
  textBox.value = "";
});
