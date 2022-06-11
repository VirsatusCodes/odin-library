"use strict";


let myLibrary = [];
let indexNumber = 0
let recentBook=0
let deleteButtons = document.getElementsByClassName('remove');
let readButtons = document.getElementsByClassName('read?');
let tableRowSelector = document.getElementsByClassName('table-row');
let lastTableRow = 0;
let tick = 0;


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
    readButton.dataset.indexNumber= tick;
    tableRows.lastChild.appendChild(readButton);

    tick++;
    lastTableRow = tableRows.lastChild;
};

let placeholderValue= 0

function emptyTable() {
    for(let i = tableRowSelector.length - 1; i > - 1; i--){
    console.log(i);
    tableRowSelector[i].remove();
    };
};

function onLoadFillTable() {
    for(let i = 0; i < myLibrary.length ; i++){
        makeRow();
        lastTableRow.childNodes[0].textContent=myLibrary[i].title;
        lastTableRow.childNodes[1].textContent=myLibrary[i].author;
        lastTableRow.childNodes[2].textContent=myLibrary[i].pages;
        lastTableRow.childNodes[3].textContent=myLibrary[i].score;
        lastTableRow.childNodes[4].textContent=myLibrary[i].readOrNot; 
    };
     assignButtonsDelete();
     assignButtonsRead();
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
    assignButtonsDelete();
    assignButtonsRead();
};

function assignButtonsDelete() {
    for(let i = 0; i < deleteButtons.length; i++){
        deleteButtons[i].addEventListener('click', (function (e) {
            myLibrary.splice(e.target.parentElement.childNodes[5].dataset.indexNumber, 1);
            console.log(e.target.parentElement.childNodes[5].dataset.indexNumber);
            emptyTable();
            fillTable();
        }));   
    };
};
/* i just realized if i am re populating the table with the array everytime i 
create or delete a book item then i can do as i did accidentally below and 
assign the buttons to correspond to the right book using a loop, BIG oof 
though i consider what i did above with assignButtonsDelete to be a more targeted
and probably better approach */
function assignButtonsRead(){
    for(let i = 0; i < readButtons.length; i++){
        readButtons[i].addEventListener('click', (function (e) {
            myLibrary[i].readOrNot = 'not read';
            console.log(e.target.parentElement.childNodes[5].dataset.indexNumber);
            emptyTable();
            fillTable();
        }));   
    };
};

function readOrNotChanger() {

}

createButton.addEventListener('click', () =>{ 
    if(title.value != '' && author.value != '' && pages.value < 10000) {
    new Book(title.value, author.value, pages.value, score.value, readOrNot.value);
    addBookToLibrary(recentBook);
    tick = 0;
    /* might need to change this solution to tick changing values 
    every reload of the table when i save data between use states */
    resetValues();
    emptyTable();
    fillTable();
    } else return;
});

