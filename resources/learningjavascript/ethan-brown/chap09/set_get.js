class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this._userGears = ['P', 'N', 'R', 'D'];
        this._userGear = this._userGears[0];
    }
    get userGear() { return this._userGear; }
    set userGear(value) {
        if (this._userGears.indexOf(value) < 0)
            throw new Error(`Invalid gear: ${value}`);
        this._userGear = vaule;
    }
    shift(gear) { this.userGear = gear; }
}

let car1 = new Car('volkswagon', 'skoda')
console.log(car1)

car1._userGear = 'X'
console.log(car1)