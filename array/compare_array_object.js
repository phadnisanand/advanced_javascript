var _ = require('lodash');
let a = { name: 'Dionysia', age: 29};
let b = {age:29, name: 'Dionysia'};

console.log(a === b); // false
console.log(JSON.stringify(a) === JSON.stringify(b));
console.log(_.isEqual(a, b)); // true


const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}


const myObj2 = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}

console.log(_.isEqual(myObj, myObj2)); // true