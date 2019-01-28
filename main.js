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
      };
    }
  },
  get appetizers() {},
  get mains() {},
  get desserts() {},
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
    };
    return this._courses[courseName].push(dish);
  }
};
console.log(menu);
