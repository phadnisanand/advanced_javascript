// https://www.w3schools.com/jsref/jsref_object_preventextensions.asp

// // Create an Object: creates an object from an existing object.
// const person = {
//   firstName: "John",
//   lastName: "Doe"
// };

// // Create new Object
// const man = Object.create(person);
// //man.firstName = "Peter";
// console.dir(man);

// Object.assign() -> method copies properties from one or more source objects to a target object.

// // Create Target Object
// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// // Create Source Object
// const person2 = { firstName: "Doe", age: 50, eyeColor: "blue" };

// // Assign Source to Target
// Object.assign(person1, person2);

// Display Target

// //Object.fromEntries() creates an object from a list of keys/values.
// const fruits = [
//   ["apples", 300],
//   ["pears", 900],
//   ["bananas", 500],
// ];

// const myObj = Object.fromEntries(fruits);
// console.log(myObj);
// "use strict"
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// // Freeze Object
// Object.freeze(person);

// // This will throw an error
// person.age = 51;

// // Create an object:
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// // Get Properties
// let props = Object.getOwnPropertyNames(person);
// console.log(props);

// Create an object:
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "EN",
// };
// person.language = "No";

// console.log(person);

// The Object.groupBy() method groups elements
// of an object according to string values returned from a callback function.
// const fruits = [
//   { name: "apples", quantity: 300 },
//   { name: "bananas", quantity: 500 },
//   { name: "oranges", quantity: 200 },
//   { name: "kiwi", quantity: 150 },
// ];

// // Callback function to select low volumes
// function myCallback({ quantity }) {
//   return quantity > 200 ? "ok" : "low";
// }
// // Group by ok and low
// const result = Object.groupBy(fruits, myCallback);
// console.log(result);

// new property add in prototype of object.
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// person.__proto__.newprop = "this is custom new property";

// Add new property to existing objects in prototype
//Array.__proto__.newproperty = "new array property";

// Add new property to existing objects
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// person.newProperty = "new value";
// console.log(person);
