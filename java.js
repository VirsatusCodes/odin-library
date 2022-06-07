let myLibrary = [];

function Book(title, author, oneToFive, readOrNot) {
this.title=title;
this.author=author;
this.oneToFive=oneToFive;
this.readOrNot=readOrNot;
};

function addBookToLibrary(book) {
 myLibrary.push(book);
};

const eragon = new Book('Eragon', 'Christopher Paolini', 5, 'read' );

const eldest = new Book('Eldest', 'Christopher Paolini', 5, 'read' );

addBookToLibrary(eragon);

addBookToLibrary(eldest);