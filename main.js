const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    }
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(dish) {
    this._courses.appetizers.push(dish);
  },
  set mains(dish) {
    this._courses.mains.push(dish);
  },
  set desserts(dish) {
    this._courses.desserts.push(dish);
  },
  addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      }
      return this._courses[courseName].push(dish);
    },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price+main.price+dessert.price;
    return console.log(`The name of the appetizer dish is ${appetizer.name}. The name of the main dish is ${main.name}. The name of the dessert dish is ${dessert.name}. The total price is $${totalPrice}.`);
  }
};

menu.addDishToCourse('appetizers', 'green salad', 5);
menu.addDishToCourse('appetizers', 'hot soup', 3);
menu.addDishToCourse('appetizers', 'bread', 2);
menu.addDishToCourse('mains', 'grilled salmon', 10);
menu.addDishToCourse('mains', 'grilled steak', 8);
menu.addDishToCourse('mains', 'grilled chicken', 7);
menu.addDishToCourse('desserts', 'strawberry cake', 7);
menu.addDishToCourse('desserts', 'ice cream', 5);
menu.addDishToCourse('desserts', 'chocolates', 3);

menu.generateRandomMeal();