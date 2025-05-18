// JavaScript still follows a prototype-based inheritance model.
// Classes in JavaScript are syntactic sugar over the prototype-based inheritance model which we use to implement OOP concepts.

/*
https://www.freecodecamp.org/news/javascript-classes-how-they-work-with-use-case/
https://www.w3schools.com/js/js_classes.asp
https://javascript.info/classes
*/
//Prototype and Constructor functions

class Pen {
  constructor(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
  }
  showPrice = function () {
    // normal method
    console.log(`Price of ${this.name} is ${this.price}`);
  };
  moveChair() {} // prototype method
}
const pen1 = new Pen("Peter parker", "Blue", "$11");

pen1.showPrice();

console.dir(Pen);
