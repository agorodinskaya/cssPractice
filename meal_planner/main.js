const menu = {
  _courses:{
    appetizers:[],
    mains:[],
    desserts:[],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(newAppetizer) {
    this._courses.appetizers = newAppetizer;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(newMain) {
    this._courses.mains = newMain;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(newDesert) {
    this._courses.desserts = newDesert;
  },
  get courses() {
    return {appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts  }
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
        name: dishName,
        price: dishPrice
    };
    return this._courses[courseName].push(dish)
  },
  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    const randomIdx = Math.floor(Math.random() * dishes.length);
    return dishes[randomIdx]
  },
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your total price is ${totalPrice}, the detail is as follows: 
    ${appetizer.name} is ${appetizer.price}, ${main.name} is ${main.price}, ${dessert.name} is ${dessert.price} `
  }
}

// adding dishes :
menu.addDishToCourse('appetizers', 'sandwich', 10)
menu.addDishToCourse('appetizers', 'salad', 1.5)
menu.addDishToCourse('appetizers', 'corn', 1.9)
menu.addDishToCourse('appetizers', 'carrots', 4.00)

menu.addDishToCourse('mains', 'poulet', 21)
menu.addDishToCourse('mains', 'viande', 22)
menu.addDishToCourse('mains', 'poisson', 19)

menu.addDishToCourse('desserts', 'tarte', 15)
menu.addDishToCourse('desserts', 'icecream', 10)
menu.addDishToCourse('desserts', 'fruitsalad', 10)

console.log(menu.courses);

console.log(menu.generateRandomMeal())