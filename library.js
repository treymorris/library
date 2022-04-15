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

class Library {
    constructor() {
        this.books = []
    }

    addBook(newBook) {
        if (!this.isInLibrary(newBook)) {
            this.books.push(newBook)
        }
    }

    removeBook(title) {
        this.books = this.books.filter((book) => book.title === title)
    }

    getBook(title) {
        return this.books.find((book) => book.title === title)
    }

    isInLibrary(newBook) {
        return this.books.some((book) => book.title === newBook.title)
    }
}

const library = new Library

const addbtn = document.getElementById('add-book');
const closebtn = document.getElementById('close-btn');
const submitbtn = document.getElementById('submit-btn');
const container = document.querySelector('.container');
const errorMsg = document.querySelector('.error-msg');

addbtn.addEventListener('click', () => {document.getElementById("form").style.display = "inline-block"});
closebtn.addEventListener('click', () => {document.getElementById("form").style.display = "none"});


const addBook = (e) => {
    e.preventDefault()
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read').checked
    const newBook = new Book(title, author, pages, read);

    if (library.isInLibrary(newBook)) {
        errorMsg.textContent = 'This book already exists in library!'
        document.getElementById("form").style.display = "none"
        document.getElementById('form').reset();
        setTimeout(function () { errorMsg.textContent = '' }, 5000);
        return
    }

    library.addBook(newBook);
    setTimeout(function(){document.getElementById("form").style.display = "none"}, 50);
    document.getElementById('form').reset();
    updateContainer()
};

submitbtn.addEventListener('click', addBook);

const updateContainer = () => {
    resetContainer()
    library.books.forEach((book) => {
        createBook(book)
    })
}

const resetContainer = () => {
    container.innerHTML = ''
}

const createBook = (book) => {
    const bookContainer = document.createElement('div');
    const divContainer = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pagesDiv = document.createElement('div');
    const readDiv = document.createElement('div');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');
    
    bookContainer.classList.add('bookContainer')
    titleDiv.classList.add('bookdiv');
    authorDiv.classList.add('bookdiv');
    pagesDiv.classList.add('bookdiv');
    readDiv.classList.add('bookdiv');
    readBtn.classList.add('remove-button');
    removeBtn.classList.add('remove-button');

    bookContainer.appendChild(divContainer);
    divContainer.appendChild(titleDiv);
    divContainer.appendChild(authorDiv);
    divContainer.appendChild(pagesDiv);
    divContainer.appendChild(readDiv);
    divContainer.appendChild(readBtn);
    divContainer.appendChild(removeBtn);
    container.appendChild(bookContainer);

    titleDiv.textContent = 'Title: ' + book.title;
    authorDiv.textContent = 'Author: ' + book.author;
    pagesDiv.textContent = 'Pages: ' + book.pages;
    if (book.read) {
        readDiv.textContent = 'You have read this Book!';
    } else {
        readDiv.textContent = 'You have not read this Book.';
    }
    readBtn.textContent = 'Toggle Read Status'
    readBtn.onclick = toggleRead
    removeBtn.textContent = 'Remove Book';
    removeBtn.addEventListener('click', () => {container.removeChild(bookContainer)});
};

const toggleRead = (e) => {
    const title = e.target.parentNode.firstChild.innerHTML.slice(7)
    const book = library.getBook(title)
    book.read = !book.read
    updateContainer()
}