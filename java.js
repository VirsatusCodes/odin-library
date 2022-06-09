"use strict";


let myLibrary = [];

let recentBook=0

function Book(title, author, pages, score, readOrNot) {
this.title=title;
this.author=author;
this.pages=pages;
this.score=score;
this.readOrNot=readOrNot;
recentBook=this
};

function addBookToLibrary(book) {
 myLibrary.push(book);
};

const eragon = new Book('Eragon', 'Christopher Paolini', 544, 5, 'read' );

const farasd = new Book('fasrd', 'Christopher Paolini', 544, 5, 'read' );

const fklnasdka = new Book ('dljknasla', 'ahsnidakda');

addBookToLibrary(eragon);

addBookToLibrary(farasd);

addBookToLibrary(fklnasdka);

/* button.addeventlistener(blah blah() {
    bring up prompt
})

button in prompt gets data for book then 
you create the book and 
 */
const createButton = document.querySelector('#book-create');

const title = document.querySelector('#title');

const author = document.querySelector('#author');

const pages = document.querySelector('#pages');

const score = document.querySelector('#score');

const readOrNot = document.querySelector('#read-or-not');

createButton.addEventListener('click', () =>{ 
    if(title.value != '' && author.value != '' && pages.value < 10000) {
    new Book(title.value, author.value, pages.value, score.value, readOrNot.value);
    addBookToLibrary(recentBook);
    resetValues();
    singleFillInRow();
    } else return;
});

function resetValues(){
    title.value='';
    author.value='';
    pages.value='';
    score.value='';
    readOrNot.value='';
}

const tableRows = document.querySelector('tbody');

let lastTableRow = 0;
let i = 0
function makeRow() {
    const tableRow = document.createElement('tr');
    tableRows.appendChild(tableRow);
    for (i = 0; i < 5 ; i++ ){
    const tableData = document.createElement('td');
    tableRows.lastChild.appendChild(tableData);
    }
    lastTableRow = tableRows.lastChild
}




function fillTable() {
    for(let i = 0; i < myLibrary.length ; i++){
        makeRow();
        lastTableRow.childNodes[0].textContent=myLibrary[i].title;
        lastTableRow.childNodes[1].textContent=myLibrary[i].author;
        lastTableRow.childNodes[2].textContent=myLibrary[i].pages;
        lastTableRow.childNodes[3].textContent=myLibrary[i].score;
        lastTableRow.childNodes[4].textContent=myLibrary[i].readOrNot; 
    };
};

function singleFillInRow() {
    makeRow();
    lastTableRow.childNodes[0].textContent=myLibrary[myLibrary.length-1].title;
    lastTableRow.childNodes[1].textContent=myLibrary[myLibrary.length-1].author;
    lastTableRow.childNodes[2].textContent=myLibrary[myLibrary.length-1].pages;
    lastTableRow.childNodes[3].textContent=myLibrary[myLibrary.length-1].score;
    lastTableRow.childNodes[4].textContent=myLibrary[myLibrary.length-1].readOrNot; 
}
