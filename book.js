let myLibrary = [];

function createBook(title, author, numpages, readornot) {

    this.title = title

    this.author = author

    this.numpages = numpages

    this.readornot = readornot

    this.info = function() {
        //console.log(title + ', ' + author + ', ' + numpages + ', ' + readornot);
        return title + ', ' + author + ', ' + numpages + ', ' + readornot;
    }
}

const submit = document.getElementById('submit');

submit.addEventListener('click', addBook);

const table = document.getElementById('table');


function addBook(e) {
    e.preventDefault();

    //get input value
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let numpages = document.getElementById('num-pages').value;
    let read = document.getElementById('read-ornot').value;
    const booknew = new createBook(title, author, numpages, read);
    myLibrary.push(booknew);
    
    console.log(myLibrary);

}