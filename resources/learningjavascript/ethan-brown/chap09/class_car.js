class Car {
    constructor(make, model) {
    this.make = make;
    this.model = model;
    this.userGears = ['P', 'N', 'R', 'D'];
    this.userGear = this.userGears[0];
    }
    shift(gear) {
    if(this.userGears.indexOf(gear) < 0)
    throw new Error(`Invalid gear: ${gear}`);
    this.userGear = gear;
    }
    }

    const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "3i");
car1.shift('D');
car2.shift('R');

console.log(car1.userGear) // "D"
console.log(car2.userGear) // "R"

car1.userGear = 'X'
console.log(car1.userGear) // X
