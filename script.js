let myLibrary = [];
const form = document.querySelector(".userInput");
const inputs = document.querySelectorAll("input");
const display = document.querySelector(".display");

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

book.prototype.info = function () {
  return this.title + "  " + this.author +  "  " + this.pages + "  " + this.read;
};

function addBooktoLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").value;
  const libraryBook = new book(title, author, pages, read);
  myLibrary.push(libraryBook);
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
  const bookCard= document.createElement("div");
  const bookTitle=document.createElement("div");
  const bookAuthor=document.createElement("div");
  const bookPages=document.createElement("div");
  const bookRead=document.createElement("div");
  for (const [i, item] of myLibrary.entries()) {
    bookTitle.textContent = item.title;
    bookAuthor.textContent = item.author;
    bookPages.textContent = item.pages;
    bookRead.textContent = item.read;
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookRead);
    bookCard.setAttribute('id', i);
    bookCard.classList.add('card');
  }
  display.appendChild(bookCard);
}
