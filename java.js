let myLibrary = [];

function Book(title, author, pages, score, readOrNot) {
this.title=title;
this.author=author;
this.pages=pages;
this.score=score;
this.readOrNot=readOrNot;
};

function addBookToLibrary(book) {
 myLibrary.push(book);
};

const eragon = new Book('Eragon', 'Christopher Paolini', 544, 5, 'read' );

const eldest = new Book('Eldest', 'Christopher Paolini', 694, 5, 'read' );

addBookToLibrary(eragon);

addBookToLibrary(eldest);

const bookNumber = document.querySelector('#book-number');

const title = document.querySelector('#title');

const author = document.querySelector('#author');

const pages = document.querySelector('#pages');

const score = document.querySelector('#score');

const readOrNot = document.querySelector('#readOrNot');

const backButton = document.querySelector('#back');

const addButton = document.querySelector('#add');

const readButton = document.querySelector('#read');

const removeButton = document.querySelector('#remove');

const nextButton = document.querySelector('#next');

const searchPrompt = document.querySelector('#search-prompt');

const searchButton = document.querySelector('#search');

function onLoadFillTable(firstInArray) {
    bookNumber.textContent = 1;
    title.textContent = myLibrary[0].title;
    author.textContent = myLibrary[0].author;
    pages.textContent = myLibrary[0].pages;
    score.textContent = myLibrary[0].score;
    readOrNot.textContent = myLibrary[0].readOrNot;
}