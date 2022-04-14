class Book {
    constructor(title, author, pages, read) {
        this.title = form.title.value;
        this.author = form.author.value;
        this.pages = form.pages.value;
        this.read = form.read.value;
    }
}

let bookArray = [];


const addbtn = document.getElementById('add-book');
const closebtn = document.getElementById('close-btn');
const submitbtn = document.getElementById('submit-btn');



addbtn.addEventListener('click', () => {document.getElementById("form").style.display = "inline-block"});
closebtn.addEventListener('click', () => {document.getElementById("form").style.display = "none"});
submitbtn.addEventListener('click', addBook);


function addBook() {
    const newBook = new Book(title, author, pages, read);
    bookArray.push(newBook);
    setTimeout(function(){document.getElementById("form").style.display = "none"}, 5000);
    document.getElementById('form').reset();
    console.log(bookArray);
    displayLibrary(newBook);
}

function displayLibrary(item) {
    const container = document.querySelector('.container');
    const divContainer = document.createElement('div');
    container.appendChild(divContainer);

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('bookdiv');
    divContainer.appendChild(titleDiv);
    titleDiv.textContent = 'Title: ' + item.title;

    const authorDiv = document.createElement('div');
    authorDiv.classList.add('bookdiv');
    divContainer.appendChild(authorDiv);
    authorDiv.textContent = 'Author: ' + item.author;

    const pagesDiv = document.createElement('div');
    pagesDiv.classList.add('bookdiv');
    divContainer.appendChild(pagesDiv);
    pagesDiv.textContent = '# Pages: ' + item.pages;

    const readDiv = document.createElement('div');
    readDiv.classList.add('bookdiv');
    divContainer.appendChild(readDiv);
    readDiv.textContent = 'Read?: ' + item.read;

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-button');
    divContainer.appendChild(removeBtn);
    removeBtn.textContent = 'Remove Book';
    removeBtn.addEventListener('click', () => {container.removeChild(divContainer)});
}

function validate() {
    const title = document.getElementById('title');


}