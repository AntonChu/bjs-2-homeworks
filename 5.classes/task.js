class PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        this.name = name,
        this.releaseDate = releaseDate,
        this.pagesCount = pagesCount,
        this.state = 100,
        this.type = null;
    }

    fix(){
        this.state *= 1.5;
    }

    set state(state){
        if(state < 0){
            this._state = 0;
        } else if(state > 100){
            this._state = 100;
        } else{
            this._state = state;
        }
    }

    get state(){
        return this._state;
    }
}   

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount),
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount),
        this.author = author,
        this.type = 'book';
    }
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

// Task #2
class Library{
    constructor(name){
        this.name = name,
        this.books = [];
    }

    addBook(printEditionItem){

        if(printEditionItem.state > 30){
            this.books.push(printEditionItem);
        }
    }

    findBookBy(_key, value){          
// Почему редактор не дает мне написать первый аргумент функции без подчеркивания? 
        for(let i = 0; i < this.books.length; i++){
            if(this.books[i][_key] === value){
                return this.books[i].name;
            }
        }

        return null; 
    }

    giveBookByName(bookName){
        for(let i = 0; i < this.books.length; i++){
            if(this.books[i].name === bookName){
                return this.books.splice(i, 1);
            }   
        }

        return 'null';
    }
}

const library = new Library("Библиотека имени Ленина");
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("releaseDate", 1924));
