//Prototype and Constructor functions

function Pen(name, color, price) {
  this.name = name;
  this.color = color;
  this.price = price;
}

const pen1 = new Pen("Marker", "Blue", "$3");

Pen.prototype.showPrice = function () {
  console.log(`Price of ${this.name} is ${this.price}`);
};

pen1.showPrice();
