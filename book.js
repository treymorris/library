let myLibrary = [];

function createBook(title, author, numpages, readornot) {
    this.title = title
    this.author = author
    this.numpages = numpages
    this.readornot = readornot
    this.info = function() {
        return title + ', ' + author + ', ' + numpages + ', ' + readornot;
    }
}

const addbtn = document.getElementById('add-book');
addbtn.addEventListener('click', (e) => {document.getElementById("myForm").style.display = "block"});

const closebtn = document.getElementById('btn-cancel');
closebtn.addEventListener('click', (e) => {document.getElementById("myForm").style.display = "none"});

const table = document.getElementById('table');

function addBook(e) {
    //e.preventDefault();

    //get input value
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let numpages = document.getElementById('num-pages').value;
    let read = document.getElementById('read-ornot').value;
    const booknew = new createBook(title, author, numpages, read);
    myLibrary.push(booknew);
    
    console.log(myLibrary);

}

function displayLibrary() {
   let text = '';
  for (i = 0; i <= myLibrary.length; i++) {
       text += myLibrary[i] + "<br>";
  }
   //document.getElementById("table-data").innerHTML = text;
}

