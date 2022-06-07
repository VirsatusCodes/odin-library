"use strict";

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

let number = 0;
function fillTable() {
    bookNumber.textContent = number + 1;
    title.textContent = myLibrary[number].title;
    author.textContent = myLibrary[number].author;
    pages.textContent = myLibrary[number].pages;
    score.textContent = myLibrary[number].score;
    readOrNot.textContent = myLibrary[number].readOrNot;
};

nextButton.addEventListener('click', () =>{
    number += 1;
    fillTable()
});

backButton.addEventListener('click', () =>{
    number -= 1;
    fillTable()
});

readButton.addEventListener('click', () => {
    if(readOrNot.textContent === 'read') readOrNot.textContent = 'not read... YET!';
    else readOrNot.textContent = 'read';
});
