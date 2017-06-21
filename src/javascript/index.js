import Rectangle from './Rectangle'

let rectangle = new Rectangle(5, 4)
let area = rectangle.getArea()

console.log(`The rectangle has an area of ${area}`)

var rootElement = document.getElementById('root')
rootElement.textContent = `The rectangle has an area of ${area}`
