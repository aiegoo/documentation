class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get perimeter() {
        return this.width * 2 + this.height * 2;
    }
}

const aRect = new Rectangle(3, 4)
console.log(aRect)
console.log(aRect.perimeter) // 注意perimeter后面没有加()