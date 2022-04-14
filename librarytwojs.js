class Book {
    constructor(
        title = 'Unknown',
        author = 'Unknown',
        pages = '0',
        read = false
    ) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

let bookArray = [
    { title: 'Test1', author: 'Author1', pages: '25', read: true },
    { title: 'Test2', author: 'Author2', pages: '25', read: true },
    { title: 'Test3', author: 'Author3', pages: '25', read: false }
];

displayLibrary();

const addbtn = document.getElementById('add-book');
const closebtn = document.getElementById('close-btn');
const submitbtn = document.getElementById('submit-btn');

addbtn.addEventListener('click', () => {document.getElementById("form").style.display = "inline-block"});
closebtn.addEventListener('click', () => {document.getElementById("form").style.display = "none"});
submitbtn.addEventListener('click', addBook);

function addBook(e)  {
    e.preventDefault()
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read').checked
    const newBook = new Book(title, author, pages, read);
    bookArray.push(newBook);
    setTimeout(function(){document.getElementById("form").style.display = "none"}, 500);
    document.getElementById('form').reset();
    console.log(newBook);
    addOneBook(newBook);
};

function displayLibrary() {

    bookArray.forEach((book) => {

        const container = document.querySelector('.container');
        const divContainer = document.createElement('div');
        const titleDiv = document.createElement('div');
        const authorDiv = document.createElement('div');
        const pagesDiv = document.createElement('div');
        const readDiv = document.createElement('div');
        const removeBtn = document.createElement('button');
        
        titleDiv.classList.add('bookdiv');
        authorDiv.classList.add('bookdiv');
        pagesDiv.classList.add('bookdiv');
        readDiv.classList.add('bookdiv');
        removeBtn.classList.add('remove-button');

        container.appendChild(divContainer);
        divContainer.appendChild(titleDiv);
        divContainer.appendChild(authorDiv);
        divContainer.appendChild(pagesDiv);
        divContainer.appendChild(readDiv);
        divContainer.appendChild(removeBtn);

        titleDiv.textContent = 'Title: ' + book.title;
        authorDiv.textContent = 'Author: ' + book.author;
        pagesDiv.textContent = 'Pages: ' + book.pages;
        if (book.read) {
            readDiv.textContent = 'You have read this Book!';
        } else {
            readDiv.textContent = 'You have not read this Book.';
        }
        removeBtn.textContent = 'Remove Book';
        removeBtn.addEventListener('click', () => { container.removeChild(divContainer) });
    });
};

function addOneBook(newBook) {
        const container = document.querySelector('.container');
        const divContainer = document.createElement('div');
        const titleDiv = document.createElement('div');
        const authorDiv = document.createElement('div');
        const pagesDiv = document.createElement('div');
        const readDiv = document.createElement('div');
        const removeBtn = document.createElement('button');
        
        titleDiv.classList.add('bookdiv');
        authorDiv.classList.add('bookdiv');
        pagesDiv.classList.add('bookdiv');
        readDiv.classList.add('bookdiv');
        removeBtn.classList.add('remove-button');

        container.appendChild(divContainer);
        divContainer.appendChild(titleDiv);
        divContainer.appendChild(authorDiv);
        divContainer.appendChild(pagesDiv);
        divContainer.appendChild(readDiv);
        divContainer.appendChild(removeBtn);

        titleDiv.textContent = 'Title: ' + newBook.title;
        authorDiv.textContent = 'Author: ' + newBook.author;
        pagesDiv.textContent = 'Pages: ' + newBook.pages;
        if (newBook.read) {
            readDiv.textContent = 'You have read this Book!';
        } else {
            readDiv.textContent = 'You have not read this Book.';
        }
        removeBtn.textContent = 'Remove Book';
        removeBtn.addEventListener('click', () => {container.removeChild(divContainer)});
};