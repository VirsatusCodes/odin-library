"use strict";


let myLibrary = [];
let indexNumber = 0
let recentBook=0
let deleteButtons = document.getElementsByClassName('remove');
let tableRowSelector = document.getElementsByClassName('table-row');
let lastTableRow = 0;
let tick = 0

const createButton = document.querySelector('#book-create');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const score = document.querySelector('#score');
const readOrNot = document.querySelector('#read-or-not');
const tableRows = document.querySelector('tbody');

function Book(title, author, pages, score, readOrNot) {
this.title=title;
this.author=author;
this.pages=pages;
this.score=score;
this.readOrNot=readOrNot;

recentBook=this;
};

function addBookToLibrary(book) {
 myLibrary.push(book);
};

const eragon = new Book('Eragon', 'Christopher Paolini', 544, 5, 'read' );
const eldest = new Book('Eldest', 'Christopher Paolini', 512, 5, 'read' );
addBookToLibrary(eragon);
addBookToLibrary(eldest);

function resetValues(){
    title.value='';
    author.value='';
    pages.value='';
    score.value='';
    readOrNot.value='';
}

function makeRow() {
    const tableRow = document.createElement('tr');
    tableRow.classList = 'table-row'
    tableRows.appendChild(tableRow);

    for (let i = 0; i < 5 ; i++ ){
    const tableData = document.createElement('td');
    tableRows.lastChild.appendChild(tableData);
    };

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'delete';
    deleteButton.classList = 'remove';
    deleteButton.dataset.indexNumber= tick;
    tableRows.lastChild.appendChild(deleteButton);

    const readButton = document.createElement('button');
    readButton.textContent = 'read?';
    readButton.classList = 'read?';
    deleteButton.dataset.indexNumber= tick;
    tableRows.lastChild.appendChild(readButton);

    tick++;
    lastTableRow = tableRows.lastChild;
};

function emptyTable() {
    for(let i = 0; i < tableRowSelector.length; i++){
    tableRowSelector[i].remove();
    console.log(i);
    };
    if(tableRowSelector.length === 1 )tableRowSelector[0].remove();
    else return;
};

function fillTable() {
    for(let i = 0; i < myLibrary.length ; i++){
        makeRow();
        lastTableRow.childNodes[0].textContent=myLibrary[i].title;
        lastTableRow.childNodes[1].textContent=myLibrary[i].author;
        lastTableRow.childNodes[2].textContent=myLibrary[i].pages;
        lastTableRow.childNodes[3].textContent=myLibrary[i].score;
        lastTableRow.childNodes[4].textContent=myLibrary[i].readOrNot; 
    };
    assignbuttons(); /* this has to be called everytime fillTable is to properly update */
};

function singleFillInRow() {
    makeRow();
    lastTableRow.childNodes[0].textContent=myLibrary[myLibrary.length-1].title;
    lastTableRow.childNodes[1].textContent=myLibrary[myLibrary.length-1].author;
    lastTableRow.childNodes[2].textContent=myLibrary[myLibrary.length-1].pages;
    lastTableRow.childNodes[3].textContent=myLibrary[myLibrary.length-1].score;
    lastTableRow.childNodes[4].textContent=myLibrary[myLibrary.length-1].readOrNot; 

}

function assignbuttons() {
    for(let i = 0; i < deleteButtons.length; i++){
        deleteButtons[i].addEventListener('click', (function (e) {
            myLibrary.splice(e.target.parentElement.childNodes[5].dataset.indexNumber, 1)
            console.log(e.target.parentElement.childNodes[5].dataset.indexNumber)
        }));   
    };
};

createButton.addEventListener('click', () =>{ 
    if(title.value != '' && author.value != '' && pages.value < 10000) {
    new Book(title.value, author.value, pages.value, score.value, readOrNot.value);
    addBookToLibrary(recentBook);
    resetValues();
    singleFillInRow();
    assignbuttons();
    } else return;
});

