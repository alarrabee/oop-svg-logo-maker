//Exports Triangle, Cicrcle, and Square classes
// want a 300x200 pixel image

//place any common functionality and properties shared by the triangle, circle, and square classes in a parent Shape class and use inheritance to reuse the code in the child classes.



//parent shape class
//all shapes share a color choice
class Shape {
    constructor(color){
        this.color = color;
    }
    render(){

    }
}

//triangle class
class Triangle extends Shape {
    constructor(color){
        super(color);
    }
    render(){
        return `<svg width="300" height="200"><polygon points="50,10 90,90 10,90" fill="${this.color}" /></svg>`;
    }
}

//circle class
class Circle extends Shape {
    constructor(color){
        super(color);
    }
    render(){
        return `<svg width="300" height="200"><circle cx="50" cy="50" r="40" fill="${this.color}"/></svg>`
    }
}


//square class
class Square extends Shape {
    constructor(color){
        super(color);
    }
    render(){
        return `<svg width="300" height="200"><rect x="10" y="10" width="80" height="80" fill="${this.color}"/></svg>`
    }
}


module.exports = {Triangle, Circle, Square}
//Exports classes




//SVG attributes
// width: width of the image
// height: height of the image

//-----

//SVG circle attributes
//cx: x-coordinates of the center of the circle
//cy: y-coordinates of the center of the circle
//r: radius
//fill: color

{/* <svg width="300" height="200">
    <circle cx="50" cy="50" r="40" fill=""/>
</svg> */}

//-----

//SVG square/rectangle attributes
//x: the x-coordinates of the top-left corner
//y: the y-coordinates of the top-left corner
//width: of the rectangle
//height: of the rectangle

{/* <svg width="300" height="200">
    <rect x="10" y="10" width="80" height="80" fill=""/>
</svg> */}

//-----

//SVG triangle/polygon attributes
// points = required. each point must contain an x and y coordinate

{/* <svg width="300" height="200">
    <polygon points="50,10 90,90 10,90" fill=""/>
</svg> */}