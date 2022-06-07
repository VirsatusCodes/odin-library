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