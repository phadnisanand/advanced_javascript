// higher order functions. Higher order functions are functions that
//  take one or more functions as arguments, or return a function as their result.

function callback() {
  // callback function
  console.log("I am inside callback function");
}

function highOrderFunc(callback) {
  // higher order function
  console.log("I am inside high order function");
  callback();
}
highOrderFunc(callback);

// Higher Order Functions
// 1 with arrays, you can use the map(), reduce(), filter(), and sort() functions
// with objects, you can use the Object.entries() function to create a new array from an object
// with functions, you can use the compose() function to create complex functions from simpler ones
