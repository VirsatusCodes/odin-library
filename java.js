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

addBookToLibrary(eragon);

const bookNumber = document.querySelector('#book-number');

const title = document.querySelector('#title');

const author = document.querySelector('#author');

const pages = document.querySelector('#pages');

const score = document.querySelector('#score');

const readOrNot = document.querySelector('#readOrNot');

const addButton = document.querySelector('#add');

const readButton = document.querySelector('#read');

const removeButton = document.querySelector('#remove');

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



function checkIfEmpty(){
/* if i were launching i would have this test if the user has a library
yet and if they dont fill it with the ifEmpty info and if they do
then fill it with the info they do have */
};

function ifEmpty(){
    bookNumber.textContent = 'the library is...empty';
    title.textContent = 'the library is...empty';
    author.textContent = 'the library is...empty';
    pages.textContent = 'the library is...empty';
    score.textContent = 'the library is...empty';
    readOrNot.textContent = 'you NEED to fix this : (';
};

addButton.addEventListener('click', () => {
    const newBook = new Book (prompt());
    addBookToLibrary(newBook);
    fillTable();
})

readButton.addEventListener('click', () => {
    if(readOrNot.textContent === 'read') readOrNot.textContent = 'not read... YET!';
    else readOrNot.textContent = 'read';
});

removeButton.addEventListener('click', () =>{
    if(myLibrary.length > 1){
        myLibrary.splice(number, 1);
        number= myLibrary.length -1;
        fillTable();    
    } else if (myLibrary.length === 1) {
        myLibrary.splice(number, 1);
        ifEmpty();
    } else return;
});


const theTable = document.querySelector('table');
const tableRow = document.createElement('tr');
const tableData = document.createElement('td');
const newTableRow = document.querySelector('table:last-child');
const newtable = theTable.lastChild;
const anotherTable = document.querySelector('tbody');
const selected = anotherTable.lastChild;

anotherTable.appendChild(tableRow);
anotherTable.lastChild.appendChild(tableData);
tableData.textContent='test';
const tableData2 = document.createElement('td');
tableData2.textContent= 'other test';
anotherTable.lastChild.appendChild(tableData2);

function showBook() {
    const tableRow = document.createElement('tr');
    const tableData = document.createElement('td');
}