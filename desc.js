// const arr = ['aa','bb','cc']
// const [x , ...y] = arr;
// console.log(x , y)

// const data = [
//    { name: 'Anita', age: 45 },
//    { name: 'Tanvi', age: 20 },
//    { name: 'Bittu', age: 32 }
// ];
// const [x , ...y] = data;
// console.log(x.name, x.age);
// console.log(y);

// const car = {
//   name: "Toyota",
//   color: "Black",
//   year: 2022,
//   engineType: "Automatic",
// };

// const {name, ...pending} = car;
// console.log(name , pending)


// const {name, year} = car;
// console.log(name , year)

const data = [10,20,30,40,50];
console.log(data);

let [testdata,testdata2,...pending] = [...data];
console.log(testdata);
console.log(testdata2);
console.log(pending);
