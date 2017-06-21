export default class Rectangle {

    constructor(width, height) {
        this.width = width
        this.height = height
    }

    getArea(v) {
        const multiply = (x,y) => x*y
        return multiply(this.width, this.height)
    }

}
