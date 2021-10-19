const addbtn = document.getElementById('add-book');
addbtn.addEventListener('click', (e) => {document.getElementById("form").style.display = "block"});

const closebtn = document.getElementById('close-btn');
closebtn.addEventListener('click', (e) => {document.getElementById("form").style.display = "none"});

const submitbtn = document.getElementById('submit-btn');
submitbtn.addEventListener('click', addBook);

class createBook {
    constructor(title, author, pages, read) {
        this.title = form.title.value;
        this.author = form.author.value;
        this.pages = form.pages.value;
        this.read = form.read.value;
    }
}

let myLibrary = [];
let newBook;

function addBook(e) {
    e.preventDefault();
    const newBook = new createBook(title, author, pages, read);
    myLibrary.push(newBook);
    document.getElementById("form").style.display = "none"
    console.log(myLibrary);
    displayLibrary(newBook);
}

function displayLibrary(item) {
    const container = document.querySelector('.container');

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('bookdiv');
    container.appendChild(titleDiv);
    titleDiv.textContent = 'Title: ' + item.title;

    const authorDiv = document.createElement('div');
    authorDiv.classList.add('bookdiv');
    titleDiv.appendChild(authorDiv);
    authorDiv.textContent = 'Author: ' + item.author;

    const pagesDiv = document.createElement('div');
    pagesDiv.classList.add('bookdiv');
    authorDiv.appendChild(pagesDiv);
    pagesDiv.textContent = '# of Pages: ' + item.pages;

    const readDiv = document.createElement('div');
    readDiv.classList.add('bookdiv');
    pagesDiv.appendChild(readDiv);
    readDiv.textContent = 'Read?: ' + item.read;
}
