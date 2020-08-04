///TASK 1

const booksContainer = document.querySelector("#books")
const summaryContainer = document.querySelector("#summary")


class Book {
  constructor(title, author, genre,year, image, read, readDate){
    // this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.year = year;
    this.image = image;
    this.read = read;
    this.readDate = null;
  }
  showBooks() {
    const books = `<div class="child">
                    <h2>${this.title}</h2>
                    <p>${this.author}</p> 
                    <p>${this.year}</p> 
                    
                    <img src=${this.image}></div>`;
    const element = document.createRange().createContextualFragment(books);
    return element
  }
  
}

class BookList{
  constructor(summaryContainer, booksContainer){
    this.read =0;
    this.markedNotRead = 0;
    this.nextBook = null;
    this.currentBook = null;
    this.lastBook= null;
    this.books = [];
    this.summaryContainer = summaryContainer;
    this.booksContainer = booksContainer
  }
  add(book){
    this.books.push(book);
    book.read ? this.read ++ : this.markedNotRead ++;
    if(!this.currentBook && !book.read){
      this.currentBook = book;
    } else if(!this.nextBook && !book.read){
      this.nextBook = book;
    }
    this.display()
  }
  finishCurrentBook(){
    if(!this.currentBook){
      return;
    }
    this.currentBook.read = true;
    this.lastBook = this.currentBook;
    this.read ++;
    this.markedNotRead --;
    this.currentBook = this.nextBook;
    //for each book find ones that are unread and that not current: 
    this.nextBook = this.books.find(book =>{
      return !book.read && book.title !== this.currentBook.title;
    })
    this.display();
  }
  display() {
   
    const showSummary = `
            <ul>
              <li>Read: ${this.read}</li>
              <li>To read: ${this.markedNotRead}</li>
              <li><strong>Current Book :</strong> ${this.currentBook ? this.currentBook.title : "none"}</li>
              <li><strong>Next Book:</strong> ${this.nextBook ? this.nextBook.title : "none"}</li>
              <li><strong>Last Book :</strong> ${this.lastBook ? this.lastBook.title : "none"}</li>
              
            </ul>`
    const element = document.createRange().createContextualFragment(showSummary);
    this.summaryContainer.innerHTML = "";
    summaryContainer.append(element);

    this.booksContainer.innerHTML = "";
    this.books.forEach(book => {
    this.booksContainer.append(book.showBooks())
    
    })
  }

}


const book1 = new Book('I think therefore I draw',
  'Thomas Cathcart and Daniel Klien',
  'satire',
  '2018',
  'https://images-na.ssl-images-amazon.com/images/I/51z9xd335TL._SX355_BO1,204,203,200_.jpg',
  true,
  '2020')
const book2 = new Book("Microtrends: The Small Forces Behind Tomorrow's Big Changes",
  'Mark Penn and E. Kinney Zalesne',
  'satire',
  '2009',
  'https://images-na.ssl-images-amazon.com/images/I/412CS+TyUOL._SX331_BO1,204,203,200_.jpg',
  true,
  '2012')
const book3 = new Book("Clean Code",
  'Robert C. Martin',
  'tech',
  '2008',
  'https://images-na.ssl-images-amazon.com/images/I/41jEbK-jG+L._SX374_BO1,204,203,200_.jpg',
  false,
  '2012')
const book4 = new Book("Shantaram",
  'Gregory David Roberts',
  'fiction',
  '2003',
  'https://images-na.ssl-images-amazon.com/images/I/51fk-WfzitL._SX331_BO1,204,203,200_.jpg',
  false,
  '2003')

const book5 = new Book(
  "The ugly swans",
	"Strugatskiy A.N.",
  "fiction",
	"1986",
  "https://images-na.ssl-images-amazon.com/images/I/51jb8mMxqKL._SX325_BO1,204,203,200_.jpg",
	true
);
const book6 = new Book(
  "Le Petit Prince",
	"Antoine de Saint-Exupéry",
  "fiction",
	"1943",
  "https://images-na.ssl-images-amazon.com/images/I/41jhYyjRAJL._SX346_BO1,204,203,200_.jpg",
	true
);


// booksContainer.append(book1.showBooks())
// booksContainer.append(book2.showBooks())
// booksContainer.append(book3.showBooks())
// booksContainer.append(book4.showBooks())
// booksContainer.append(book5.showBooks())
// booksContainer.append(book6.showBooks())

const bookList = new BookList(summaryContainer, booksContainer);
bookList.add(book1);
bookList.add(book2);
bookList.add(book3);
bookList.add(book4);
bookList.add(book5);
bookList.add(book6);

bookList.finishCurrentBook()
