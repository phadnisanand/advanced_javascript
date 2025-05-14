// prototype -> All JavaScript objects inherit properties and methods from a prototype.
//Prototypes are the mechanism by which JavaScript objects inherit features from one another.
// https://www.w3schools.com/js/js_object_prototypes.asp

// add methods properties to global

String.prototype.myProp = "this is custom property";
String.prototype.myFunc = function () {
  return this.length + 2;
};

Array.prototype.myArrayFunc = function () {
  return this.length + 2;
};
Array.prototype.myPropArr = "this is array custom property";

// Custom Objects
let myData = {
  getFullName: function () {
    return this.name + " " + this.surname;
  },
  getAge: function () {
    return this.age;
  },
};

const student = {
  name: "Anand",
  surname: "Phadnis",
  age: 38,
};

const teacher = {
  name: "Priya",
  surname: "Joshi",
  age: 58,
};
student.__proto__ = myData;
teacher.__proto__ = myData;

console.log(student.getFullName());
console.log(teacher.getFullName());
console.log(student.getAge());
console.log(teacher.getAge());
