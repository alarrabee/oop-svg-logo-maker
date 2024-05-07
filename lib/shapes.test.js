//Tests for shapes

//each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.


const {Triangle, Circle, Square} = require("./shapes");

test("Should render a red circle with blue text as an svg", () => {
    const shape = new Circle ("red", "blue", "ASD")
    const expected = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="red"/><text x="10" y="50" font-family="Arial" font-size="24" fill="blue">ASD</text></svg>`
expect(shape.render()).toBe(expected)
})

test("Should render a red triangle with blue text as an svg", () => {
    const shape = new Triangle ("red", "blue", "ASD")
    const expected = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="50,10 90,90 10,90" fill="red"/><text x="10" y="50" font-family="Arial" font-size="24" fill="blue">ASD</text></svg>`
expect(shape.render()).toBe(expected)
})

test("Should render a red square with blue text as an svg", () => {
    const shape = new Square ("red", "blue", "ASD")
    const expected = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="80" height="80" fill="red"/><text x="10" y="50" font-family="Arial" font-size="24" fill="blue">ASD</text></svg>`
expect(shape.render()).toBe(expected)
})