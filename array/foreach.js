const numbers = [1, 2, 3, 4];
let sum = 0;
numbers.forEach(myFunc)

function myFunc(item) {
  sum+= item;
}
 console.log(sum);


const numbers1 = [1, 2, 3, 4];
let sum1 = 0;
numbers1.forEach(function (item,index) {
  sum1+=item;
});
console.log(sum1);
