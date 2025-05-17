function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function () {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  };

const person1 = new Person('Pranjal', 25);
const person2 = new Person('Ayaan', 30);

console.log(person1.introduce());
console.log(person2.introduce());