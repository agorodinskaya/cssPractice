class Media {
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
    
  }
  get title(){
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  toggleCheckOutStatus(){
    this.isCheckedOut = !this.isCheckedOut
  }
  getAverageRating() {
    let ratingsSum = this.ratings.reduce((acc, curr) => acc + curr);
    return (ratingsSum / this.ratings.length).toFixed(2)
  }
  set isCheckedOut(newValue) {
    this._isCheckedOut = newValue;
  }
  addRating(rating){
    this.ratings.push(rating)
  }

}

class Book extends Media {
    constructor(author,title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author(){
      return this._author;
    }
    get pages(){
      return this._pages;
    }
}

class Movie extends Media {
  constructor(director, title, runtime){
    super(title);
    this._director = director;
    this._runtime = runtime;
  }
  get director(){
    return this._director;
  }
  get runtime(){
    return this._runtime
  }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)
console.log(historyOfEverything)
console.log(historyOfEverything.toggleCheckOutStatus())
console.log(historyOfEverything.isCheckedOut)
console.log(historyOfEverything.addRating(4))
console.log(historyOfEverything.addRating(5))
console.log(historyOfEverything.addRating(5))
console.log(historyOfEverything.getAverageRating())

const speed = new Movie('Jan de Bont', 'Speed', 116);

console.log(speed);
console.log(speed.toggleCheckOutStatus());
console.log(speed.isCheckedOut);
console.log(speed.addRating(1));
console.log(speed.addRating(1));
console.log(speed.addRating(5));
console.log(speed.getAverageRating());