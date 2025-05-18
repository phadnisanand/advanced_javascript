"use strict";
class emp {
  static salary;
  #name; // private property
  constructor(name) {
    this.#name = name;
  }
  #getName() {
    return this.#name;
  }
}

const obj = new emp("Anand");
// console.log(obj.#getName()); // private function
//console.log(obj.#name); // private can not access
emp.salary = 100;
console.log(emp.salary);
const obj2 = new emp("nutan");
