function Calculator() {
  let data = 0;
  this.add = function (val) {
    data = data + val;
    return this;
  };
  this.sub = function (val) {
    data = data - val;
    return this;
  };
  this.multi = function (val) {
    data = data * val;
    return this;
  };
  this.divide = function (val) {
    data = data / val;
    return this;
  };
  this.display = function () {
    return data;
  };
}

const newObj = new Calculator();
const result1 = newObj.add(10).multi(5).divide(2).sub(10).display();
console.log(result1);
const result2 = newObj.sub(10).display();
console.log(result2);
