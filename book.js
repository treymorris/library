function books(title, author, numpages, readornot) {

    this.title = title

    this.author = author

    this.numpages = numpages

    this.readornot = readornot

    this.info = function() {
        //console.log(title + ', ' + author + ', ' + numpages + ', ' + readornot);
        return title + ', ' + author + ', ' + numpages + ', ' + readornot;
    }
}

const book1 = new books('book', 'me', '10', 'nope');

console.log(book1.info());