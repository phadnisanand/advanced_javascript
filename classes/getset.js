// https://www.geeksforgeeks.org/javascript-getters-and-setters/

// const p = {
//   n1: "Anurag",
//   n2: "Das",
//   get Name() {
//     return `${this.n1} ${this.n2}`;
//   },
//   set Name(name) {
//     [this.n1, this.n2] = name.split(" ");
//   },
// };

// console.log(p.Name);
// p.Name = "Anuj Jain";
// console.log(p.Name);

// for class

class R {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get a() {
    return this.width * this.height;
  }

  set a(value) {
    [this.width, this.height] = [...value];
  }
}

const rect = new R(10, 5);
console.log(rect.a);
rect.a = [15, 30];
console.log(rect.a);
