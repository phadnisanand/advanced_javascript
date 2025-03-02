const arrayList = document.querySelectorAll('li')
const listItemArray = Array.from(arrayList, char => {
     return char.textContent.toUpperCase()
});

console.log(listItemArray);

// const name = 'Anand Phadnis';
// console.log(Array.from(name, char => {
//     return char.toUpperCase();
// }));
