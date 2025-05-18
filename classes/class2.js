class Chair {
  constructor(
    color,
    seatHeight,
    recliningAngle,
    backSupport,
    headSupport,
    padding,
    armRests,
    seatSize,
    isHeightAdjustable,
    isMovable
  ) {
    this.color = color;
    this.seatHeight = seatHeight;
    this.recliningAngle = recliningAngle;
    this.backSupport = backSupport;
    this.headSupport = headSupport;
    this.padding = padding;
    this.armRests = armRests;
    this.seatSize = seatSize;
    this.isHeightAdjustable = isHeightAdjustable;
    this.isMovable = isMovable;
  }

  adjustableHeight() {}
  adjustAngle() {}
  moveChair() {}
}

// const newChair = new Chair(
//   "Blue",
//   "25 inch",
//   "20 deg",
//   true,
//   false,
//   "3 inch",
//   true,
//   "16 inch",
//   false,
//   false
// );

// console.dir("Chair Prototype", Chair);
// console.log("Chair Object", newChair);

class OfficeChair extends Chair {
  constructor(color, isHeightAdjustable, seatHeight, recliningAngle) {
    super(); // use the super keyword to call the constructor of the parent class.
    // We can also use it to call functions and properties of the parent class.
    this.type = "Office Chair";
    this.color = color;
    this.isHeightAdjustable = isHeightAdjustable;
    this.seatHeight = seatHeight;
    this.recliningAngle = recliningAngle;
    this.isMovable = true;
  }

  adjustableHeight(height) {
    if (height > this.seatHeight) {
      console.log(`Chair height changed to ${height}`);
    } else {
      console.log(
        `Height cannot be decreased more than the seat height ${this.seatHeight}`
      );
    }
  }

  adjustAngle(angle) {
    if (angle >= this.recliningAngle) {
      console.log(`Chair angle changed to ${angle}`);
    } else {
      console.log(
        `Angle cannot be decreased more than the min reclining angle ${this.recliningAngle}`
      );
    }
  }

  moveChair(x, y) {
    console.log(`Chair moved to co-ordinates = (${x}, ${y})`);
  }
}

const newOfficeChair = new OfficeChair("Red", true, 30, 30);

console.log(newOfficeChair.adjustableHeight(31));
console.log(newOfficeChair.adjustAngle(40));
console.log(newOfficeChair.moveChair(10, 20));
