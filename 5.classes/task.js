//Задача №1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix(){
      this.state *= 1.5;
    }
 set state(number){
    if (number < 0){
        this._state = 0
     } if (number > 100){
        this._state = 100
     } else {
        this._state = number
      }
    }
    get state () {
return this._state;
    }
 }

 class Magazine extends PrintEditionItem {
    constructor(type, name, releaseDate, pagesCount) {
        super(type, name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, type, releaseDate, pagesCount) {
        super(type, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, type, releaseDate, pagesCount) {
        super(author, type, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, type, releaseDate, pagesCount) {
        super(author, type, releaseDate, pagesCount);
        this.type = "fantastic"
    }
}

class DetectiveBook extends Book {
    constructor(author, type, releaseDate, pagesCount) {
        super(author, type, releaseDate, pagesCount);
        this.type = "detective";
    }
}

//Задание №2

class Library extends PrintEditionItem { 
   constructor (name, releaseDate, pagesCount) {
    super(releaseDate, pagesCount);
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (this.state > 30) {
        return this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let findBook = this.books.find (book => book[type] === value);
        if (typeof findBook === 'object') {
            return findBook;
        } else {
            return null;
        }
    }
    giveBookByName(bookName) {
        let giveBoook = this.books.find (book => book.name === bookName);
        if (typeof giveBoook === 'object') {
            let index = this.books.indexOf(giveBoook);
            this.books.splice(index, 1);
            return giveBoook;
        }
        else {
            return null;

        }
    }
}






