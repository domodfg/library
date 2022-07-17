let myLibrary = [];
const form = document.querySelector(".userInput");
const inputs = document.querySelectorAll("input");
const display = document.querySelector(".display");
const displayForm = document.querySelector(".addBook");
const undisplayForm = document.querySelector(".cancel");

undisplayForm.addEventListener("click", () => {
  form.classList.remove("active");
});

displayForm.addEventListener("click", () => {
  form.classList.add("active");
});

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

book.prototype.toggle = function () {
  if (this.read == "Finished") {
    this.read = "Unfinished";
  } else this.read = "Finished";
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
    form.classList.remove("active");
  } else {
    form.reportValidity();
  }
});

function displayBook() {
  const bookCard = document.createElement("div");
  const bookTitle = document.createElement("div");
  const bookAuthor = document.createElement("div");
  const bookPages = document.createElement("div");
  const bookRead = document.createElement("div");
  const removeButton = document.createElement("button");
  const readButton = document.createElement("button");
  for (const [i, item] of myLibrary.entries()) {
    bookTitle.textContent = item.title;
    bookAuthor.textContent = item.author;
    bookPages.textContent = item.pages;
    bookRead.textContent = item.read;
    bookCard.setAttribute("id", i);
    bookCard.classList.add("card");
    removeButton.setAttribute("id", i);
    removeButton.classList.add("remove");
    readButton.setAttribute("id", i);
    readButton.classList.add("read");
  }
  removeButton.textContent = "Remove";
  readButton.textContent = "Read";
  removeButton.addEventListener("click", () => {
    const bookId = document.getElementById(removeButton.id);
    myLibrary.splice(removeButton.id, 1);
    display.removeChild(bookId);
    updateID();
  });
  readButton.addEventListener("click", () => {
    myLibrary[readButton.id].toggle();
    bookRead.textContent = myLibrary[readButton.id].read;
  });
  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookPages);
  bookCard.appendChild(bookRead);
  bookCard.appendChild(removeButton);
  bookCard.appendChild(readButton);
  display.appendChild(bookCard);
}

function updateID () {
    // This portion is code is for updating the ID of each cards after removals of cards such that the remove and toggle can work properly
    const allCard = document.querySelectorAll(".card");
    const allRemoveButton = document.querySelectorAll(".remove");
    const allReadButton = document.querySelectorAll(".read");
    allCard.forEach((card, i) => {
      card.id = i;
    });
    allRemoveButton.forEach((removeButton, i) => {
      removeButton.id = i;
    });
    allReadButton.forEach((readButton, i) => {
      readButton.id = i;
    });
}