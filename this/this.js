function Hi() {
  this.hello = "world";
  console.log("gi", this);
}
// const hhh = new Hi();
// console.log(hhh);

// const Hi = () => {
//   console.log(this);
// };

// Hi();
// const user = {
//   firstName: "Anurag",
//   lastName: "Singh",
//   tags: ["a", "b", "c"],
//   printTags() {
//     this.tags.forEach(function (tag) {
//       console.log(this);
//     }, this);
//   },
// };

// console.log(user.printTags());

// const body = document.querySelector("body");

// body.addEventListener(
//   "click",
//   (e) => {
//     console.log(e.target);
//     console.log(e.currentTarget);
//     console.log(this);
//   },
//   this
// );

// class User {
//   constructor() {
//     this.firstName = "Anurag";
//     console.log(this);
//   }

//   getUser() {
//     console.log(this);
//   }
// }
// const us = new User();
// us.getUser();

// in case of arrow function this pointing to window object.
// in case of function inside another function then inner function points to window
// do not use arrow function as method inside object.
// https://www.youtube.com/watch?v=GP4PQrATtR0&list=PLfEr2kn3s-bp5qRVFVRHuntWy2L9i9Arh&index=8

function outerFunc() {
  console.log(this);
  function innerFunc() {
    console.log(this);
  }
  innerFunc();
}
outerFunc();
