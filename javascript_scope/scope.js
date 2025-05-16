// https://www.freecodecamp.org/news/scope-in-javascript-global-vs-local-vs-block-scope/

//  block scope.
if (true) {
  let blockVariable = "I'm in block scope";
  console.log(blockVariable);
}
//console.log(blockVariable);

var abcvar = "Global Variable";
function parent() {
  let num1 = 10;
  let num2 = 20;
  var num3 = 30;
  function child() {
    console.log(num1, num2, abcvar);
  }
  child();
}
parent();

//debugger;
//console.log(num3);

// The Concept of Variable Shadowing
var message = "Global message";

function showMessage() {
  var message = "Local message"; // This "shadows" the global variable
  console.log("local", message); // Accessing the local variable
}

showMessage();
console.log("global", message); // Accessing the global variable

// difference block vs local scope.
function myFunction() {
  if (true) {
    var localVariable = "I'm in block scope";
    let blockVariable = "I'm also in block scope";
  }
  console.log(localVariable); // Accessible
  console.log(blockVariable); // Error: blockVariable is not defined
}
//myFunction();

function exampleBlockScope() {
  if (true) {
    let blockVariable = "I'm block-scoped with 'let'";
    const constantBlockVar = "I'm block-scoped with 'const'";
  }
  console.log(blockVariable); // Error: blockVariable is not defined
  console.log(constantBlockVar); // Error: constantBlockVar is not defined
}

var globalVariable = "I'm global";

function outerFunction() {
  var outerVariable = "I'm in outer scope";

  function innerFunction() {
    var innerVariable = "I'm in inner scope";
    console.log(innerVariable); // Access innerVariable
    console.log(outerVariable); // Access outerVariable
    console.log(globalVariable); // Access globalVariable
  }

  innerFunction();
}

outerFunction();
