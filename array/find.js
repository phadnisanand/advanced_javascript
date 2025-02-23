const arr = [{id: 11}, {id:20}, {id: 33}];

let found = arr.find(function (element) {
    return element.id > 25;
});
console.log(found);


const arr1 = [{id: 11}, {id:20}, {id: 33}];

let found1 = arr1.findIndex(function (element) {
    return element.id > 15;
});
console.log(found1);
