const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };
finaldata = [];
for (let [fruit, amount] of Object.entries(fruits)) {
  finaldata[fruit] = amount;
}

console.log(finaldata);
