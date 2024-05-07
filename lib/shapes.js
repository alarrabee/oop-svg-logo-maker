//Exports Triangle, Cicrcle, and Square classes
// want a 300x200 pixel image

//place any common functionality and properties shared by the triangle, circle, and square classes in a parent Shape class and use inheritance to reuse the code in the child classes.



//parent shape class
//all shapes share a color choice
class Shape {
    constructor(shapeColor){
        this.shapeColor = shapeColor;
    }
    render(){

    }
}

//triangle class
class Triangle extends Shape {
    // constructor(textColor, shapeColor){
    //     super(textColor, shapeColor);
    // }
    render(){
        return `<svg width="300" height="200">
                    <polygon points="50,10 90,90 10,90" fill="${this.shapeColor}"/>
                </svg>`;
    }
}

//circle class
class Circle extends Shape {
    // constructor(textColor, shapeColor){
    //     super(textColor, shapeColor);
    // }
    render(){
        return `<svg width="300" height="200">
                    <circle cx="50" cy="50" r="40" fill="${this.shapeColor}"/>
                </svg>`
    }
}


//square class
class Square extends Shape {
    // constructor(textColor, shapeColor){
    //     super(textColor, shapeColor);
    // }
    render(){
        return `<svg width="300" height="200">
                    <rect x="10" y="10" width="80" height="80" fill="${this.shapeColor}"/>
                </svg>`
    }
}




module.exports = {Triangle, Circle, Square}
//Exports classes

