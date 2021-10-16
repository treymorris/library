let myLibrary = [];

function book(title, author, numpages, readornot) {

    this.title = title

    this.author = author

    this.numpages = numpages

    this.readornot = readornot

    this.info = function() {
        //console.log(title + ', ' + author + ', ' + numpages + ', ' + readornot);
        return title + ', ' + author + ', ' + numpages + ', ' + readornot;
    }
}

function addBook() {
    //query for a button press new book
    //add variable input for all the options
    //store in new variable creating the object and push to array
    myLibrary.push(book);
}

const book1 = new book('book', 'me', '10', 'nope');

console.log(book1.info());