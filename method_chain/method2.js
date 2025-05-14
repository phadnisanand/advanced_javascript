class Calculator {
  data = 0;

  add(val) {
    this.data = this.data + val;
    return this;
  }

  sub(val) {
    this.data = this.data - val;
    return this;
  }

  multi(val) {
    this.data = this.data * val;
    return this;
  }

  divide(val) {
    this.data = this.data / val;
    return this;
  }
  display() {
    return this.data;
  }
}

const newObj = new Calculator();
const result1 = newObj.add(10).multi(5).divide(2).sub(10).display();
console.log(result1);
const result2 = newObj.sub(10).display();
console.log(result2);
