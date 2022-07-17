let myLibrary = [];
const form = document.querySelector(".userInput");
const inputs = document.querySelectorAll("input");
const display = document.querySelector(".display");

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    console.log(title, author, pages, read);
  };
}

function addBooktoLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").value;
  const libraryBook = new book(title, author, pages, read);
  myLibrary.push(libraryBook);
  console.log(myLibrary);
}

const submit = document.querySelector(".submit");
submit.addEventListener("click", () => {
  if (form.checkValidity()) {
    addBooktoLibrary();
    displayBook();
    inputs.forEach((input) => (input.value = ""));
  } else {
    form.reportValidity();
  }
});

function displayBook() {
  const bookDisplay = document.createElement("div");
  for (item of myLibrary) {
    bookDisplay.textContent =
      item.title + "  " + item.author + "  " + item.pages + "  " + item.read;
  }
  display.appendChild(bookDisplay);
}
