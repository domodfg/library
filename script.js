let myLibrary=[];

function book (title, author, pages, read) {
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
    this.info = function() {
      console.log(title, author, pages, read);
    }
  }

function addBooktoLibrary () {
    let title = document.querySelector('#title');
    let author = document.querySelector('#author');
    let pages = document.querySelector('#pages');
    let read = document.querySelector('#read');
}